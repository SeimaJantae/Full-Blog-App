import AdminLayout from "@/components/layout/AdminLayout";
import { NextPage } from "next";
import React from "react";

type Props = {};

const Posts: NextPage<Props> = () => {
  return (
    <AdminLayout>
      <h1>Post content</h1>
    </AdminLayout>
  );
};

export default Posts;
