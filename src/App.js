import "./App.css";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/UI/palletes";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Cart />
      <Layout>
        <Meals />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
