import React, { Children, FC, ReactNode } from "react";
import AdminNav from "../common/AdminNav";
import Link from "next/link";

type Props = {
  children: ReactNode;
};

const navItems: any = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/posts", label: "Posts" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/comments", label: "Comments" },
  { href: "/admin/contact", label: "Contact" },
];

const AdminLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <AdminNav navItems={navItems} />
      <div className="flex-1 p-4">{children}</div>
      <div className="fixed z-10 right-10 bottom-10">
        <Link href={"/admin/post/create"}>
          <button className="bg-action text-primary-light p-2 rounded shadow-sm hover:bg-action_hightlight text-sm">
            Create Content
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminLayout;
