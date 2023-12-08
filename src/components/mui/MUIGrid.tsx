"use client";
import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";

type Props = {};

const MUIGrid = (props: Props) => {
  return (
    <div>
      <Typography variant="h6" color="black" className="font-bold mt-10">
        Grid
      </Typography>
      <div className="p-5 border-4 border-dashed border-black">
        <Grid container columns={9} spacing={2} alignItems="center">
          <Grid sx={{ bgcolor: "black" }} item md={3} lg={4}>
            1
          </Grid>
          <Grid sx={{ bgcolor: "black" }} item md={3} lg={4}>
            2
          </Grid>
          <Grid sx={{ bgcolor: "black" }} item md={3} lg={4}>
            3
          </Grid>
          <Grid sx={{ bgcolor: "black" }} item md={3} lg={4}>
            4
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MUIGrid;
