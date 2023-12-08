"use client";
import { SendSharp } from "@mui/icons-material";
import {
  Fab,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

type Props = {};

const MUISwitch = (props: Props) => {
  const form = useForm();

  const { register, handleSubmit, formState } = form;

  const onSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" color="black" className="font-bold mt-10">
        Switch
      </Typography>
      <div className="p-5 border-4 border-dashed border-black">
        <FormGroup>
          <FormControlLabel
            control={<Switch {...register("switch")} value="switch1" />}
            label="Switch1"
          />
          <FormControlLabel
            control={<Switch {...register("switch")} value="switch2" />}
            label="Switch2"
          />
          <FormControlLabel
            control={<Switch {...register("switch")} value="switch3" />}
            label="Switch3"
          />
        </FormGroup>
        <Fab variant="circular" type="submit" color="secondary">
          <SendSharp />
        </Fab>
      </div>
    </form>
  );
};

export default MUISwitch;
