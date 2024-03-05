import { Stack, Typography } from "@mui/material";
import PlanetList from "./components/PlanetList/PlanetList";

const Planets = () => {
  return (
    <>
      <Stack maxWidth={600} mb={4} spacing={2} px={2}>
        <Typography component={"h2"} fontSize={30}>
          A collection of all Star&nbsp;Wars planets <br /> in one place.
        </Typography>
        <Typography color={(theme) => theme.palette.grey[500]}>
          Click on the planet name to see more information
        </Typography>
      </Stack>
      <PlanetList />
    </>
  );
};
export default Planets;
