import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { Reset } from "styled-reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@components/Footer";
import Header from "@components/Header";
import HomePage from "@pages/HomePage";
import BaSPage from "@pages/BaSPage";
import GlobalStyle from "./globalStyles";
import SApp from "./style";

function App() {
  const theme = useSelector((store) => store.theme);

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <SApp>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/labo" element={<BaSPage />} />
          </Routes>
        </main>
        <Header />
        <Footer />
      </SApp>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
