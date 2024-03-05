import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import Table from "@/components/Table/Table";
import { PLANETS_API_PAGE_SIZE, PLANETS_API_URL, PLANETS_PATH } from "@/constants";
import useFetch from "@/hooks/useFetch";
import extractPlanetIdFromUrl from "@/utils/extractPlanetIdFromUrl";
import { Link, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const PlanetList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useFetch(`${PLANETS_API_URL}?page=${currentPage}`);

  if (isError) return <Typography>There was an error... Please try again later.</Typography>;
  if (isLoading && !data) return <LoadingSpinner />;
  return data ? (
    <Table
      isLoading={isLoading}
      count={data.count}
      pageSize={PLANETS_API_PAGE_SIZE}
      currentPage={currentPage}
      onPageChange={(newPage) => setCurrentPage(newPage)}
      itemsArray={data.results}
      columns={[
        {
          label: "Name",
          render: (planet) => (
            <Tooltip title="Go to planet page">
              <Link
                component={RouterLink}
                to={`${PLANETS_PATH}/${extractPlanetIdFromUrl(planet.url)}`}
                fontSize={20}
                fontWeight={500}
                sx={{ color: (theme) => theme.palette.text.primary }}
                underline="hover"
              >
                {planet.name}
              </Link>
            </Tooltip>
          ),
          align: "center",
        },
        {
          label: "diameter",
          render: (planet) => planet.diameter,
          align: "right",
        },
        {
          label: "climate",
          render: (planet) => planet.climate,
        },
        {
          label: "terrain",
          render: (planet) => planet.terrain,
        },
      ]}
    />
  ) : null;
};
export default PlanetList;
