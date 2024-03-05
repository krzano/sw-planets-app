import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Container component={"main"} sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};
export default BaseLayout;
