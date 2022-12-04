import Box from "@mui/material/Box";
import Header from "./Header";
import Toolbar from "@mui/material/Toolbar";
const Layout = ({ children, ...props }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Box component="main" sx={{ p: 3, mx: "auto", my: 8 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
