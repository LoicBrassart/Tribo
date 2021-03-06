import styled from "styled-components";

export default styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 3px solid red;
  background-color: rgba(20, 20, 20, 0.9);
  color: white;

  display: flex;
  justify-content: space-between;
  height: 5vh;

  ul {
    display: flex;
    height: 100%;

    li {
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0 1em;
    }
  }
`;
