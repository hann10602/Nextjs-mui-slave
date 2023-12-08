"use client";
import { DeleteForever } from "@mui/icons-material";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { useState } from "react";
import React from "react";

type Props = {};

type User = {
  id: number;
  avatar: string;
  name: string;
};

const MUIList = (props: Props) => {
  const userList: User[] = [
    {
      id: 1,
      avatar:
        "https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg",
      name: "user1",
    },
    {
      id: 2,
      avatar:
        "https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg",
      name: "user2",
    },
    {
      id: 3,
      avatar:
        "https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg",
      name: "user3",
    },
  ];

  const [users, setUsers] = useState<User[]>(userList);

  return (
    <div>
      <Typography variant="h6" color="black" className="font-bold mt-10">
        List
      </Typography>
      <div className="p-5 border-4 border-dashed border-black">
        <List
          component="nav"
          className="w-96"
          sx={{ bgcolor: "black" }}
          subheader={
            <ListSubheader
              component="div"
              sx={{ bgcolor: "inherit", color: "white" }}
            >
              List title
            </ListSubheader>
          }
        >
          {users.map((user) => (
            <ListItem key={user.id} alignItems="center" disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="avatar" src="" />
                </ListItemAvatar>
                <ListItemText>User</ListItemText>
                <ListItemIcon>
                  <DeleteForever
                    onClick={() =>
                      setUsers(
                        users.filter(
                          (currentUser) => currentUser.id !== user.id
                        )
                      )
                    }
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default MUIList;
