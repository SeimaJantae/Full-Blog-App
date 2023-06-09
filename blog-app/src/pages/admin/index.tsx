import AdminNav from "@/components/common/AdminNav";
import AdminLayout from "@/components/layout/AdminLayout";
import { NextPage } from "next";
import React from "react";

type Props = {};

const Admin: NextPage<Props> = () => {
  return (
    <AdminLayout>
      <h1>Admin content</h1>
    </AdminLayout>
  );
};

export default Admin;
