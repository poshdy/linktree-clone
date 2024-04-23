import { db } from "@/db";
import React from "react";

const Dashboard = async ({ params }: { params: { username: string } }) => {
  const user = await db.page.findUnique({
    where: {
      username: params.username,
    },
  });
  return <div>{user?.username}</div>;
};

export default Dashboard;
