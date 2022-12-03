import "./App.css";
import Content from "./components/Layout/Body";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/UI/palletes";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Content/>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
