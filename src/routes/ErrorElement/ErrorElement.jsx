import { BASE_PAGE_PATH } from "@/constants";
import { Button, Container, Divider, Typography } from "@mui/material";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  let errorMessage = "Something went wrong...";
  if (isRouteErrorResponse(error) && error.status === 404) {
    errorMessage = "Page not found...";
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        minHeight: "80vh",
      }}
    >
      <Typography variant="h2">Error</Typography>
      <Divider flexItem />
      <h2>{errorMessage}</h2>
      <Button variant="contained" size="large" component={Link} to={BASE_PAGE_PATH}>
        back home
      </Button>
    </Container>
  );
};
export default ErrorElement;
