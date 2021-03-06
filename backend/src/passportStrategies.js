const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const bcrypt = require("bcrypt");
const models = require("./models");

const { JWT_SECRET } = process.env;

passport.use(
  new LocalStrategy(
    {
      usernameField: "mail",
      passwordField: "password",
    },
    (formMail, formPassword, done) => {
      try {
        models.user.find(formMail).then(([[dbUser]]) => {
          if (!dbUser.id) return done(null, false, "Wrong username!");
          const { id, email, avatar, pseudo, password } = dbUser;
          const isPasswordOK = bcrypt.compareSync(formPassword, password);
          if (!isPasswordOK) return done(null, false, "Wrong password!");

          const user = { id, email, avatar, pseudo };
          return done(null, user);
        });
      } catch (e) {
        console.error(e);
        return done(e);
      }
      return null;
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
