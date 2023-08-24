import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'system-ui', sans-serif;
    background-color: ${theme.colors.grey[0]};
  }
`;

export default GlobalStyle;
