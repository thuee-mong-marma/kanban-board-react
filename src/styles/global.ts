import { createGlobalStyle } from "styled-components";
import { SCREEN_BREAKPOINTS } from "../constants/breakpoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text_primary};
    font-size: 14px;
    overflow-y: auto;
    padding: 0 40px;
    margin: 0 auto;

    @media(max-width: ${SCREEN_BREAKPOINTS.EXTRA_SMALL}px) {
      padding: 0 20px;
    }
  }

  h1 {
    font-size: 3rem;
    line-height: 100%;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border: 1px solid;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    :hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background}
    }

    @media(max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
      margin-bottom: 0;
    }

    @media(max-width: ${SCREEN_BREAKPOINTS.MEDIUM}px) {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text_tertiary};
  }

    /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.scrollbar_background};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollbar_thumb};
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.scrollbar_thumb_hover};
  }

`;
