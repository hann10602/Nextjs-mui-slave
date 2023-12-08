"use client";
import { Notifications } from "@mui/icons-material";
import { Avatar, AvatarGroup, Badge, Typography } from "@mui/material";
import React from "react";

type Props = {};

const MUIDataDisplay = (props: Props) => {
  return (
    <div>
      <Typography variant="h6" color="black" className="font-bold mt-10">
        Avatar
      </Typography>
      <div className="p-5 border-4 border-dashed border-black">
        <AvatarGroup max={7} total={24}>
          <Avatar
            alt="avatar"
            src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
          />
          <Avatar
            alt="avatar"
            src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
          />
          <Avatar
            alt="avatar"
            src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
          />
          <Avatar sx={{ bgcolor: "orange" }}>N</Avatar>
          <Avatar sx={{ bgcolor: "red" }}>LO</Avatar>
          <Avatar sx={{ bgcolor: "green" }}>NN</Avatar>
        </AvatarGroup>
      </div>
      <Typography variant="h6" color="black" className="font-bold mt-10">
        Badge
      </Typography>
      <div className="p-5 border-4 border-dashed border-black">
        <Badge
          badgeContent={11}
          max={10}
          color="warning"
          invisible={false}
          showZero
        >
          <Notifications />
        </Badge>
        <Badge
          className="ml-10"
          variant="dot"
          badgeContent={11}
          color="warning"
          invisible={false}
        >
          <Notifications />
        </Badge>
        <Badge
          className="ml-10"
          variant="dot"
          overlap="rectangular"
          badgeContent={11}
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
          }}
          color="warning"
          invisible={false}
        >
          <Notifications color="primary" />
        </Badge>
      </div>
    </div>
  );
};

export default MUIDataDisplay;
