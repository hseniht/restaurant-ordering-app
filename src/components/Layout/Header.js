import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HeaderCart from "./HeaderCart";
const Header = (props) => {
  return (
    <AppBar
      component="nav"
      // color="salsa"
      classes={{ root: "app-header" }}
    >
      <Toolbar className="nav-menu-wrap">
        <Typography
          className="logo"
          variant="h6"
          component="div"
          sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
        >
          L'Exquis Brasserié
        </Typography>
        <HeaderCart />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
