import { Fragment } from "react";
import "./App.css";
import DrawerAppBar from "./components/Layout/Header";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/UI/palletes";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <DrawerAppBar />
    </ThemeProvider>
  );
}

export default App;
