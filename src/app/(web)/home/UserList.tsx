import React from "react";

type Props = {};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
};

const getUserList = async () => {
  const res = await fetch("https://dummyjson.com/users?limit=5", {
    next: {
      revalidate: 30,
    },
  });

  if (res.ok) {
    return res.json();
  }
};

const UserList = async (props: Props) => {
  const userList = await getUserList();

  return (
    <div>
      <p>user list</p>
      {userList.users.map((user: User) => (
        <div key={user.id} className="w-full p-10">
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
