import UserList from "@/components/next/UserList";
import { Typography } from "@mui/material";
import React, { Suspense } from "react";
import Loading from "../home/loading";

type Props = {};

const Page = async (props: Props) => {
  const res = await fetch("https://dummyjson.com/users?limit=5", {
    method: "GET",
    next: {
        revalidate: 5
    }
  });

  const data = await res.json();

  return (
    <div>
      <Typography variant="h3">User List</Typography>
      <Suspense fallback={<Loading />}>
        <UserList userList={data.users} />
      </Suspense>
    </div>
  );
};

export default Page;
