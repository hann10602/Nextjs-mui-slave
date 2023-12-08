"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import UserList from "./UserList";

type Props = {};

const Page = (props: Props) => {
  const pathname = usePathname();
  return (
    <div>
      web 1
      <Link
        className={`link ${
          pathname === "/dashboard" ? "text-blue-400" : "text-red-400"
        }`}
        href="/dashboard/settings"
      >
        setting
      </Link>
      <UserList />
    </div>
  );
};

export default Page;
