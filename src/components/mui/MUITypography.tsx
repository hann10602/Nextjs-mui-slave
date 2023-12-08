import { Typography } from "@mui/material";
import React from "react";

type Props = {};

const MUITypography = (props: Props) => {
  return (
    <div>
      <Typography variant="h6" color="black" className="font-bold">
        Typography
      </Typography>
      <div className="p-5 border-4 border-dashed border-black flex items-center">
        <Typography className="mr-5" variant="h1" color="black">
          h1
        </Typography>
        <Typography className="mr-5" variant="h2" color="black">
          h2
        </Typography>
        <Typography className="mr-5" variant="h3" color="black">
          h3
        </Typography>
        <Typography className="mr-5" variant="h4" color="black">
          h4
        </Typography>
        <Typography className="mr-5" variant="h5" color="black">
          h5
        </Typography>
        <Typography className="mr-5" variant="h6" color="black">
          h6
        </Typography>
        <Typography className="mr-5" variant="subtitle1" color="black">
          subtitle1
        </Typography>
        <Typography className="mr-5" variant="subtitle2" color="black">
          subtitle2
        </Typography>
        <Typography className="mr-5" variant="body1" color="black">
          body1
        </Typography>
        <Typography variant="body2" color="black">
          body2
        </Typography>
      </div>
    </div>
  );
};

export default MUITypography;
