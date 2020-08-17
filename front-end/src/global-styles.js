import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    text-rendering: optimizeLegibility;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ._separator {
    height: 1px;
    width: 100%;
    background-color: #DEDEDE;
    display: block;
    margin: 10px 0;
  }
  ._text-center {
    text-align: center;
  }
  ._clearfix {
    clear: both;
  }

  .badge {
    padding: 4px 14px;
    font-size: .7rem;
    background-color: #DEDEDE;
    margin-left: 5px;
    margin-right: 15px;
    border-radius: 15px;
  }
  .badge--blue {
    background-color: #72c5ff;
    color: #F3F3F3;
  }
  .badge--green {
    background-color: #6bdf99;;
    color: #F3F3F3;
  }
`;