import {
  Paper,
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  TablePagination,
  Typography,
} from "@mui/material";
import TableLoadingBackdrop from "./components/TableLoadingBackdrop/TableLoadingBackdrop";
import styled, { css } from "styled-components";

const Table = ({ itemsArray, columns, currentPage, onPageChange, pageSize, count, isLoading }) => {
  return (
    <Paper
      sx={{ border: 1, borderColor: (theme) => theme.palette.primary.dark, overflow: "hidden" }}
    >
      <TableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              {columns.map(({ label, align }, index) => (
                <TableCell key={index} align={align}>
                  <Typography textTransform={"uppercase"} fontSize={18} fontWeight={500} py={1}>
                    {label}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ position: "relative" }}>
            <TableLoadingBackdrop open={isLoading} />
            {itemsArray.map((item, index) => (
              <TableRow key={index}>
                {columns.map(({ align, render, label }) => (
                  <TableCell key={`${label}-${index}`} align={align}>
                    {render(item)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
      <Box>
        <TablePagination
          component={"div"}
          count={count}
          page={currentPage - 1}
          rowsPerPage={pageSize}
          rowsPerPageOptions={[pageSize]}
          onPageChange={(_, page) => {
            onPageChange(page + 1);
          }}
          slotProps={{
            actions: {
              previousButton: isLoading
                ? {
                    disabled: true,
                  }
                : undefined,
              nextButton: isLoading
                ? {
                    disabled: true,
                  }
                : undefined,
            },
          }}
        />
      </Box>
    </Paper>
  );
};

const StyledTable = styled(MuiTable)`
  ${({ theme }) => css`
    overflow: hidden;
    .MuiTableCell-root {
      color: ${theme.palette.grey[50]};
      padding: ${theme.spacing(2)} ${theme.spacing(4)};
    }
    .MuiTableHead-root {
      .MuiTableRow-root {
        background: linear-gradient(
          180deg,
          ${theme.palette.grey[800]} 0%,
          ${theme.palette.grey[900]} 160%
        );
      }
    }
    .MuiTableBody-root {
      .MuiTableRow-root {
        transition: background-color 0.3s;
        &:hover {
          background-color: ${theme.palette.background.paper};
        }
      }
    }
  `};
`;

export default Table;
