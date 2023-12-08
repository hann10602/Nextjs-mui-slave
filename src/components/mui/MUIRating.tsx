"use client";

import React, { useState } from "react";
import { Rating, Typography } from "@mui/material";

type Props = {};

const MUIRating = (props: Props) => {
  const labels: { [index: string]: string } = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  const [star, setStar] = useState<number>(2.5);
  const [hover, setHover] = useState(-1);

  return (
    <div>
      <Typography component="legend" variant="h6" className="font-bold mb-2">
        Rating
      </Typography>
      <div>
        <Typography>Controlled</Typography>
        <div className="flex items-center">
          <Rating
            value={star}
            precision={0.5}
            onChange={(e, value) => {
              if (value) {
                setStar(value);
                setHover(value);
              }
            }}
            onChangeActive={(e, hover) => {
              setHover(hover);
            }}
          />
          {(hover !== -1 && <span className="ml-5">{labels[String(hover)]}</span>) || <span className="ml-5">{labels[String(star)]}</span>}
        </div>
      </div>
      <div className="mt-5">
        <Typography>Read Only</Typography>

        <Rating value={star} precision={0.5} readOnly={true} />
      </div>
      <div className="mt-5">
        <Typography>Disabled</Typography>
        <Rating value={star} precision={0.5} disabled={true} />
      </div>
    </div>
  );
};

export default MUIRating;
