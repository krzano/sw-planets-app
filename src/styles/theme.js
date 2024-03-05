import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#3a167a" },
    background: {
      paper: grey[900],
    },
  },
  typography: {
    fontFamily: "'Kanit', sans-serif",
  },
});

export default theme;
