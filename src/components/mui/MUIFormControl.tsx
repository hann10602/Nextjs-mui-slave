import { FormControl, FormHelperText, Input, InputLabel, Typography } from "@mui/material";
import React from "react";

type Props = {};

const MUIFormControl = (props: Props) => {
  return (
    <div>
      <Typography variant="h6" color="black" className="font-bold mt-10">
        Form Control
      </Typography>
      <div className="p-5 border-4 border-dashed border-black">
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We will never share your email.
          </FormHelperText>
        </FormControl>
      </div>
    </div>
  );
};

export default MUIFormControl;
