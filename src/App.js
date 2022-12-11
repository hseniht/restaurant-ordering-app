import "./App.css";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/UI/palletes";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./contexts/cart-context";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Cart />
        <Layout>
          <Meals />
        </Layout>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
