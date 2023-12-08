import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";

type Props = {};

const MUIRadio = (props: Props) => {
  const form = useForm();

  const { register, formState, handleSubmit } = form;

  const { errors } = formState;

  const onSubmit = (e: any) => {
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="block">
      <Typography variant="h6" color="black" className="font-bold mt-10">
        Radio
      </Typography>
      <div className="p-5 border-4 border-dashed border-black">
        <FormControl>
          <FormLabel id="demo-customized-radios">Label</FormLabel>

          <RadioGroup
            defaultValue="female"
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              {...register("radio", {
                required: "alo",
              })}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              {...register("radio", {
                required: "alo",
              })}
              label="Male"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              {...register("radio", {
                required: "alo",
              })}
              label="Other"
            />
          </RadioGroup>

          <Typography variant="body2" color="red">
            {errors.radio?.message?.toString()}
          </Typography>
        </FormControl>
        <Button variant="outlined" type="submit" color="secondary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default MUIRadio;
