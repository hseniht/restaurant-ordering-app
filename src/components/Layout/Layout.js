import Box from "@mui/material/Box";
import Header from "./Header";
const Layout = ({ children, ...props }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Box component="main" sx={{ p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
