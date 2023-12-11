import UserList from "@/components/next/user-list/UserList";
import { Typography } from "@mui/material";
import React, { Suspense } from "react";
import Loading from "../home/loading";
import TableSkeleton from "@/components/next/user-list/TableSkeleton";

type Props = {};

const Page = async (props: Props) => {
  const res = await fetch("https://dummyjson.com/users?limit=25", {
    method: "GET",
    next: {
      revalidate: 5,
    },
  });

  const data = await res.json();

  return (
    <div>
      <Typography variant="h3">User List</Typography>
      {data.users ? (
        <UserList userList={data.users || []} />
      ) : (
        <TableSkeleton />
      )}
    </div>
  );
};

export default Page;
