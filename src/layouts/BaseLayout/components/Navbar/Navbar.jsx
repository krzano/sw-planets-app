import { Box, Container } from "@mui/material";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { BASE_PAGE_PATH } from "@/constants";

const Navbar = () => {
  return (
    <Box
      boxShadow={3}
      sx={{
        zIndex: 100,
        position: "sticky",
        top: 0,
        py: 2,
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
      component={"header"}
    >
      <Container component={"nav"}>
        <Link to={BASE_PAGE_PATH}>
          <Box component={"img"} src={logo} height={40} />
        </Link>
      </Container>
    </Box>
  );
};
export default Navbar;
