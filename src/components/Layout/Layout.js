import Box from "@mui/material/Box";
import Header from "./Header";
import Toolbar from "@mui/material/Toolbar";
import bgLeft from "../../assets/bg-Left.svg";
import bgRight from "../../assets/bg-Right.svg";
import "./Layout.scss";

const MainBackground = ({ className }) => {
  return (
    <div className={className}>
      <img src={bgLeft} />
      <img src={bgRight} />
    </div>
  );
};

const Layout = ({ children, ...props }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <MainBackground className="main-bg" />
      <Header />
      <Box
        className="app-body"
        component="main"
        sx={{ p: 3, mx: "auto", my: 8 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
