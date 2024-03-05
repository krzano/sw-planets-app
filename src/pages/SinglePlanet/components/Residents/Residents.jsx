import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { Chip, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const getResidentName = async (url) => {
  return axios
    .get(url)
    .then((res) => {
      return { success: true, name: res.data.name };
    })
    .catch(() => {
      return { success: false };
    });
};

const getAllNames = (residentUrls) => {
  return Promise.all(residentUrls.map(getResidentName));
};

const Residents = ({ residentsUrls }) => {
  const [residents, setResidents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    if (residentsUrls.length === 0) return;
    setIsLoading(true);
    getAllNames(residentsUrls)
      .then((response) => {
        setResidents(response);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [residentsUrls]);

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return (
      <Typography color="error">
        Something went wrong when fetching the residents of this planet...
      </Typography>
    );
  return (
    <Stack gap={1} direction="row" flexWrap="wrap">
      {residents.map((resident, index) => {
        if (!resident.success)
          return (
            <Chip key={index} color="error" variant="outlined">
              Could not fetch the name of this resident
            </Chip>
          );
        return <StyledChip key={index} label={resident.name} variant="filled" />;
      })}
    </Stack>
  );
};

const StyledChip = styled(Chip)`
  padding: 10px;
  .MuiChip-label {
    font-size: 14px;
  }
`;

export default Residents;
