import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    salsa: {
      main: "#f44336",
      contrastText: "#fff",
    },
    cream: {
      main: "#f5f5dc", //beige
      contrastText: "#0000008a",
    },
    salad: {
      main: "#16d76c",
      contrastText: "#fff",
    },
    slate: {
      main: "#708090", //slategray
      contrastText: "#fff",
    },
    // mode: "dark"
  },
  typography: {
    fontFamily: "Lora",
  },
});
