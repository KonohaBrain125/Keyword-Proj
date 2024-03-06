import * as React from "react";
import {
  IconButton,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme as useMuiTheme } from "@emotion/react";

const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme = createTheme({ palette: { mode: "dark" } });

const ThemeContext = React.createContext();

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const storedThemeMode = localStorage.getItem("themeMode");
  const initialThemeMode = storedThemeMode || "light";
  const [themeMode, setThemeMode] = React.useState(initialThemeMode);

  const toggleThemeMode = () =>
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  // Update the theme mode in localStorage
  React.useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const currentTheme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
      <MuiThemeProvider theme={currentTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default function ThemeToggle() {
  const { themeMode, toggleThemeMode } = useTheme();

  return (
    <IconButton onClick={toggleThemeMode}>
      {themeMode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}
