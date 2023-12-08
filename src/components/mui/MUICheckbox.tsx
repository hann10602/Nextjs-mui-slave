import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";

type Props = {};

const MUICheckbox = (props: Props) => {
  const form = useForm();

  const { register, formState, handleSubmit } = form;

  const { errors } = formState;

  const onSubmit = (e: any) => {
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" color="black" className="font-bold mt-10">
        Checkbox
      </Typography>
      <div className="p-5 border-4 border-dashed border-black">
        <FormGroup>
          <FormLabel>Checkbox</FormLabel>
          <FormControlLabel
            control={
              <>
                <Checkbox
                  defaultChecked
                  value="first"
                  {...register("check", {
                    required: "alo",
                  })}
                />
                <Checkbox
                  value="second"
                  {...register("check", {
                    required: "alo",
                  })}
                />
                <Checkbox
                  value="third"
                  {...register("check", {
                    required: "alo",
                  })}
                />
                <Checkbox
                  value="ford"
                  {...register("check", {
                    required: "alo",
                  })}
                />
              </>
            }
            label=""
          />
          <Typography variant="body2" color="red">
            {errors.check?.message?.toString()}
          </Typography>
        </FormGroup>
        <Button variant="outlined" type="submit" color="secondary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default MUICheckbox;
