import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: #333333;
    background-color: #FFFFFF;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: #005A9C;
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: #FF6B35;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
