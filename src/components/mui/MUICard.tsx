"use client";
import { DeleteForever } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type Props = {};

type Post = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
};

const MUICard = (props: Props) => {
  const postsInit: Post[] = [
    {
      id: 1,
      title: "Post 1",
      subTitle: "Sub Title 1",
      description: " Description 1",
    },
    {
      id: 2,
      title: "Post 2",
      subTitle: "Sub Title 2",
      description: " Description 2",
    },
    {
      id: 3,
      title: "Post 3",
      subTitle: "Sub Title 3",
      description: " Description 3",
    },
  ];

  const [posts, setPosts] = useState<Post[]>(postsInit);
  return (
    <div>
      <Typography variant="h6" color="black" className="font-bold mt-10">
        Card
      </Typography>
      <div className="p-5 border-4 border-dashed border-black">
        <Grid container>
          {posts.map((post) => (
            <Grid key={post.id} lg={3} md={4} sm={6} xs={12}>
              <Card elevation={3} className="mt-5">
                <CardHeader
                  action={
                    <IconButton
                      onClick={() =>
                        setPosts(
                          posts.filter((filterPost) => filterPost.id != post.id)
                        )
                      }
                    >
                      <DeleteForever />
                    </IconButton>
                  }
                  title={post.title}
                  subheader={post.subTitle}
                />
                <CardContent>
                  <Typography variant="body2">{post.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default MUICard;
