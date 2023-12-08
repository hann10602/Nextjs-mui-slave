import { CloudUpload, DeleteForever, SendRounded } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Button, IconButton, Typography } from "@mui/material";
import React from "react";

type Props = {};

const MUIButton = (props: Props) => {
  return (
    <div>
      <Typography variant="h6" color="black" className="font-bold mt-10">
        Button
      </Typography>
      <div className="p-5 border-4 border-dashed border-black">
        <Button
          className="mr-5"
          variant="text"
          color="primary"
          startIcon={<DeleteForever />}
          size="large"
        >
          Text large
        </Button>
        <Button
          className="mr-5"
          color="primary"
          variant="outlined"
          endIcon={<SendRounded />}
          size="large"
        >
          Outlined large
        </Button>
        <Button
          color="primary"
          variant="contained"
          startIcon={<CloudUpload />}
          size="large"
        >
          Contained large
        </Button>
        <IconButton className="ml-5" color="secondary">
          <DeleteForever fontSize="large" />
        </IconButton>
        <IconButton className="ml-5" color="primary" disabled>
          <DeleteForever fontSize="large" />
        </IconButton>
        <LoadingButton
          loading={true}
          loadingPosition="start"
          startIcon={<DeleteForever />}
        >
          Loading...
        </LoadingButton>
      </div>
    </div>
  );
};

export default MUIButton;
