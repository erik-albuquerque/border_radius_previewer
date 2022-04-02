import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;
    --white-50: #fffbf5;
    --brown-700: #423232;
    --red-400: #ff5733;
    --green-500: #3db13d;
    --cyan: #b5e2dc;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background-color: var(--white-50);
  }

  @media (max-width: 1080px) {
    html { 
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }
`;
