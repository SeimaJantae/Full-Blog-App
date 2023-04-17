import AdminNav from "@/components/common/AdminNav";
import { NextPage } from "next";
import React from "react";

type Props = {};

const navItems: any = [
  { href: "/admin/dashboard", lable: "Dashboard" },
  { href: "/admin/posts", lable: "Posts" },
  { href: "/admin/users", lable: "Users" },
  { href: "/admin/comments", lable: "Comments" },
];
const Admin: NextPage<Props> = () => {
  return (
    <div>
      <AdminNav navItems={navItems} />
    </div>
  );
};

export default Admin;
