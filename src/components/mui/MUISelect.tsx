"use client";
import { SendAndArchive } from "@mui/icons-material";
import {
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type Props = {};

const MUISelect = (props: Props) => {
  const values: number[] = [17, 18, 19];
  const [value, setValue] = useState<number>(values[0]);

  return (
    <div>
      <Typography component="legend" variant="h6" className="font-bold mb-2">
        Select
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select
          value={value}
          onChange={(e) => setValue(e.target.value as number)}
        >
          {values.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Fab type="submit" variant="circular" color="success">
        <SendAndArchive />
      </Fab>
    </div>
  );
};

export default MUISelect;
