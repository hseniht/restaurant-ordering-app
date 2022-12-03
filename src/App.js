import "./App.css";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/UI/palletes";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Meals />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
