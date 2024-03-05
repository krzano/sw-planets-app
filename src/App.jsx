import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
export default App;
