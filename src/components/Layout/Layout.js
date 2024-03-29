import Box from "@mui/material/Box";
import Header from "./Header";
import Toolbar from "@mui/material/Toolbar";
// import bgLeft from "../../assets/bg-Left.svg";
// import bgRight from "../../assets/bg-Right.svg";
import bgLeft from "../../assets/bg-left-ingredients.svg";
import bgRight from "../../assets/bg-right-ingredients.svg";
import "./Layout.scss";

const MainBackground = ({ className }) => {
  return (
    <div className={className}>
      <img className="side-bg__left" src={bgLeft} />
      <img className="side-bg__right" src={bgRight} />
    </div>
  );
};

const Layout = ({ children, ...props }) => {
  return (
    <div id={"restaurant-app-root"}>
      <MainBackground className="main-bg" />
      <Header />
      <Box
        className="app-body"
        component="main"
        // sx={{ p: 3, mx: "auto", my: 8 }}
      >
        {/* <Toolbar /> no longer need this empty space hack from MUI*/}
        {children}
      </Box>
    </div>
  );
};

export default Layout;
