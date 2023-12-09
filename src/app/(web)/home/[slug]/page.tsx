import { User } from "@/types/user.type";
import React from "react";

type Props = {
  params: { slug: string };
};

const getUser = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/users/${id}`, {
    next: {
      revalidate: 30,
    },
  });

  if (res.ok) {
    return res.json();
  }
};

const Page = async ({ params }: Props) => {
  const user: User = await getUser(params.slug);
  return (
    <div>
      My user
      <div className="flex">
        <p>Full name: </p>
        <p>{user.firstName + " " + user.lastName}</p>
      </div>
      <div className="flex">
        <p>Age: </p>
        <p>{user.age}</p>
      </div>
    </div>
  );
};

export default Page;
