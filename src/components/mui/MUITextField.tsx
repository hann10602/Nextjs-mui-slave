"use client";
import { SendSharp } from "@mui/icons-material";
import {
  Fab,
  FormControl,
  FormHelperText,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { error } from "console";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const MUITextField = (props: Props) => {
  const form = useForm();

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = (e: any) => {
    console.log(e);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" color="black" className="font-bold mt-10">
          Text field
        </Typography>
        <div className="p-5 border-4 border-dashed border-black">
          <TextField label="Text field" required {...register("textField")} />
          {/* <p>{errors.textField?.message?.toString()}</p> */}
          <Fab
            className="ml-5"
            variant="extended"
            type="submit"
            color="primary"
          >
            <SendSharp />
          </Fab>
        </div>
      </form>
    </div>
  );
};

export default MUITextField;
