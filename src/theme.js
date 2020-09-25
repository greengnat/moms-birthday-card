import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    background-color: #f7f7f7;
    width: 100%;
}
html {
    width: 100vw;
    overflow-x: hidden;
    padding: none;
    font-size: 62.5%;
}
`;

export default GlobalStyle;
