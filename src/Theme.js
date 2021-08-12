import { useContext } from "react";
import { ThemeContext } from "./store/theme-context";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const themes = {
  dark: {
    background: "#272823",
    title: "#6495ed",
    text: "#fff",
    active: "#db992e",
    hover: "orange",
    navbar: "#6b6e73",
    input: "#fff",
  },
  light: {
    background: "#ebebeb",
    title: "#ff6347",
    text: "#000",
    active: "#b6d6c6",
    hover: "skyblue",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    transition: all 0.3s;
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
