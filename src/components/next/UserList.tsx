"use client";
import { User } from "@/types/user.type";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

type Props = {
  userList: User[];
};

const UserList = ({ userList }: Props) => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [page, setPage] = useState<number>(0);

  const handlePageChange = (e: unknown, page: number) => {
    setPage(page);
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number(e.target.value));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">First name</TableCell>
                <TableCell align="center">Last name</TableCell>
                <TableCell align="center">Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((user) => (
                <TableRow key={user.id}>
                  <TableCell align="center">{user.id}</TableCell>
                  <TableCell align="center">{user.firstName}</TableCell>
                  <TableCell align="center">{user.lastName}</TableCell>
                  <TableCell align="center">{user.age}</TableCell>
                </TableRow>
              )) || []}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
          count={25}
          onPageChange={handlePageChange}
          page={page}
        />
      </Paper>
    </Box>
  );
};

export default UserList;
