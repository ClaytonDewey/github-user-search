import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  :root {
    --clr-dark: #141D2F;
    --clr-light: #f6f8ff;
    --clr-dark-blue: #1E2A47;
    --clr-primary: #0079FF;
    --clr-lt-blue: #60ABFF;
    --clr-faded-white: #8d95a2;
    --clr-blue-gray: #90A4D4;
    --white: #fefefe;

    --ff-mono: "Space Mono";
    --fw-bold: 700;
    --fw-reg: 400;
    --fs-xlg: 2.6rem;
    --fs-lg: 2.2rem;
    --fs-md: 1.6rem;
    --fs-sm: 1.5rem;
    --fs-xsm: 1.3rem;

    --bdr-rds: 1.2rem;
    --bx-shd: 0px 10px 15px rgba(0,0,0,0.1);
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
    margin: 2rem auto;
    width: 100%;
    box-sizing: border-box;
  }
  html {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: var(--ff-mono), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: var(--ff-reg);
    font-size: 62.5%;
  }
  body {
    position: relative;
    font-size: var(--fs-sm);
    line-height: 2.5rem;
    font-weight: var(--fw-reg);
    padding: 2rem;
  }
  h1 {
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
  }
  h2, p {
    font-size: var(--fs-xsm);
  }
  h2{
    font-weight: var(--fw-reg);
  }

  @media screen and (min-width: 36em) {
  h1 {
    font-size: var(--fs-xlg);
    line-height: 3.8rem;
  }
  h2 {
    font-size: var(--fs-md);
    line-height: 3.3rem;
  }

  }
  button {
    cursor: pointer;
    font-family: var(--ff-mono), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
    color: var(--clr-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  input {
    font-family: var(--ff-mono), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: var(--fs-md);

    &::placeholder{
      color: ${({ theme }) => theme.placeHolder};
    }
  }

`;
