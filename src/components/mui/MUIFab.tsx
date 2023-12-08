import React from "react";
import { Fab, Typography } from "@mui/material";
import { AddIcCallTwoTone } from "@mui/icons-material";

type Props = {};

const MUIFab = (props: Props) => {
  return (
    <div>
      <Typography variant="h6" color="black" className="font-bold mt-10">
        Fab
      </Typography>
      <div className="p-5 border-4 border-dashed border-black">
        <Fab color="secondary" variant="circular" size="large">
          <AddIcCallTwoTone />
        </Fab>

        <Fab color="primary" variant="extended" className="ml-5">
          <AddIcCallTwoTone className="mr-5" /> Navigation
        </Fab>
      </div>
    </div>
  );
};

export default MUIFab;
