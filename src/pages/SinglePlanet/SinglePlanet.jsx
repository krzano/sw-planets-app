import { PLANETS_API_URL, PLANETS_PATH } from "@/constants";
import useFetch from "@/hooks/useFetch";
import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Residents from "./components/Residents/Residents";
import InfoBox from "./components/InfoBox/InfoBox";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

const SinglePlanet = () => {
  const { id } = useParams();
  const { data: planet, isLoading, isError } = useFetch(`${PLANETS_API_URL}/${id}`);

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      {isError ? (
        <Typography fontSize={24} textAlign={"center"}>
          Something went wrong...
        </Typography>
      ) : planet ? (
        <Paper
          sx={{
            mx: "auto",
            py: 4,
            px: 6,
            maxWidth: 500,
            border: 1,
            borderColor: (theme) => theme.palette.primary.dark,
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h2" textAlign={"center"}>
              {planet.name}
            </Typography>
            <Divider />
            <InfoBox label="Diameter:" value={planet.diameter} />
            <InfoBox label="Climate:" value={planet.climate} />
            <InfoBox label="Terrain:" value={planet.terrain} />
            <InfoBox label="Gravity:" value={planet.gravity} />
            <InfoBox label="Population:" value={planet.population} />
            <InfoBox label="Orbital period:" value={planet.orbital_period} />
            <Stack spacing={1}>
              <InfoBox label="Planet residents:" value={`(${planet.residents.length})`} />
              <Residents residentsUrls={planet.residents} />
            </Stack>
          </Stack>
        </Paper>
      ) : null}
      <Box display={"grid"} justifyContent={"center"}>
        <Button variant="contained" component={Link} to={PLANETS_PATH} sx={{ mt: 3 }}>
          Back to planet list
        </Button>
      </Box>
    </>
  );
};
export default SinglePlanet;
