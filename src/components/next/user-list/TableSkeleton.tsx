import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Skeleton,
} from "@mui/material";

type Props = {};

const TableSkeleton = (props: Props) => {
  const skeletonArray = Array.from({ length: 5 }, (i: number) => i + 1);
  return (
    <Box sx={{ width: "100%" }}>
      <Paper>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Skeleton variant="text" className="w-full" />
                </TableCell>
                <TableCell align="center">
                  <Skeleton variant="text" className="w-full" />
                </TableCell>
                <TableCell align="center">
                  <Skeleton variant="text" className="w-full" />
                </TableCell>
                <TableCell align="center">
                  <Skeleton variant="text" className="w-full" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {skeletonArray.map((item) => (
                <TableRow key={item}>
                  <TableCell align="center">
                    <Skeleton variant="text" className="w-full" />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton variant="text" className="w-full" />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton variant="text" className="w-full" />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton variant="text" className="w-full" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div></div>
      </Paper>
    </Box>
  );
};

export default TableSkeleton;
