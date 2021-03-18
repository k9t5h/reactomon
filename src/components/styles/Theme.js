import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "../contexts/ThemeStore";

const themes = {
  dark: {
    background: "black",
    text: "silver",
  },
  light: {
    background: "yellow",
    text: "blue",
  },
};

const GlobalStyle = createGlobalStyle`
    * {
      transition: all 0.5s;
    }
  `;

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
