import React from "react";
import "./reset.css";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const GlobalStyles = createGlobalStyle`
  :root {
    --clr-dark: #141D2F;
    --clr-light: #f6f8ff;
    --clr-dark-blue: #1E2A47;
    --clr-primary: #0079FF;
    --white: #fff;

    --ff-mono: "Space Mono";
    --fw-bold: 700;
    --fw-reg: 400;
    --fs-xlg: 2.8rem;
    --fs-lg: 2.2rem;
    --fs-md: 1.6rem;
    --fs-sm: 1.5rem;
    --fs-xsm: 1.3rem;

    --bdr-rds: 1.2rem;
  }
  *,
  *::after,
  *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }
  html,
  body {
    margin: 0px auto;
    width: 100%;
    box-sizing: border-box;
  }
  html {
    background: var(--clr-dark);
    color: var(--clr-light);
    font-family: var(--ff-mono), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: var(--ff-reg);
    font-size: 62.5%;
  }
  body {
    position: relative;
    font-size: var(--fs-sm);
    line-height: 2.5rem;
    font-weight: var(--fw-reg);
  }
  h1 {
    font-size: var(--fs-xlg);
    line-height: 3.8rem;
  }
  h2 {
    font-size: var(--fs-lg);
    line-height: 3.3rem;
  }
  h3 {
    font-size: var(--fs-md);
  }
  h4 {
    font-size: var(--fs-xsm);
  }
  h1, h2 {
    font-weight: var(--fw-bold);
  }
  h3, h4 {
    font-weight: var(--fw-reg);
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
