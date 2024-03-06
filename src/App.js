import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "./components/themeToggle";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import router from "./router/router";
import { createMuiTheme } from "@mui/material";

function App() {
  const THEME = createMuiTheme({
    typography: {
      fontFamily: "inter, sans-serif",
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });

  return (
    <ThemeProvider theme={THEME}>
      {/* <Router> */}
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
      {/* </Router> */}
    </ThemeProvider>
  );
}

export default App;
