import { Box, Typography } from "@mui/material";

const InfoBox = ({ label, value }) => {
  return (
    <Box display={"flex"} gap={2} fontSize={20}>
      <Typography fontSize={"inherit"}>{label}</Typography>
      <Typography fontSize={"inherit"} fontWeight={500}>
        {value}
      </Typography>
    </Box>
  );
};
export default InfoBox;
