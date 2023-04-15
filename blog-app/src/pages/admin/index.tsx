import AdminNav from "@/components/common/AdminNav";
import { NextPage } from "next";
import React from "react";

type Props = {};

const Admin: NextPage = (props: Props) => {
  return (
    <div>
      <AdminNav />
    </div>
  );
};

export default Admin;
