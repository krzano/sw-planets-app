import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { Backdrop, TableCell, TableRow } from "@mui/material";
import styled, { css } from "styled-components";

const TableLoadingBackdrop = ({ open }) => {
  return (
    <TableRow>
      <TableCell
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        <StyledBackdrop open={open}>
          <LoadingSpinner />
        </StyledBackdrop>
      </TableCell>
    </TableRow>
  );
};

const StyledBackdrop = styled(Backdrop)`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: all;
    border-radius: ${theme.shape.borderRadius}px;
  `}
`;

export default TableLoadingBackdrop;
