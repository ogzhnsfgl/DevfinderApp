import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const values = { theme, setTheme };
  useEffect(() => {
    theme
      ? (document.body.className = "dark")
      : (document.body.className = "light");
  }, [theme]);
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
