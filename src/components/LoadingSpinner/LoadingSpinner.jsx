import { Box, CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box p={4}>
      <CircularProgress size={50} thickness={6} />
    </Box>
  );
};
export default LoadingSpinner;
