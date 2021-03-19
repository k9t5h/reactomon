import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "../contexts/ThemeStore";

const themes = {
  dark: {
    background: "black",
    grayscale: 1,
    tableText: "silver",
    borderColor: "silver",
  },
  light: {
    background: "silver",
    grayscale: 0,
    tableText: "black",
    borderColor: "black",
  },
};

const GlobalStyle = createGlobalStyle`
    * {
      text-align: center;
      background-color: ${(props) => props.theme.background};
      transition: all 0.5s;
      filter: grayscale(${(props) => props.theme.grayscale})
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
