import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    font-family: ${(props) => props.theme.fonts.main};
    background: ${(props) => props.theme.colors.bg.body};
    color: ${(props) => props.theme.colors.text.global};
    cursor: default;
  }
  
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.main};
  }
  
  a {
  	color: inherit;
    text-decoration: none;
  }
  
  li{
    list-style: none;
  }
`;

export default GlobalStyles;
