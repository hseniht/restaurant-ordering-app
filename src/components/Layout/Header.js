import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HeaderCart from "./HeaderCart";
const Header = (props) => {
  return (
    <Box className="app-header" sx={{ display: "flex" }}>
      <AppBar component="nav" color="salsa">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            TK Eats
          </Typography>
          <HeaderCart />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
