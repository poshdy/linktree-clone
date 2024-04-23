import { findByUsername } from "@/actions";
import React from "react";

type Props = {};

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const user = await findByUsername(params?.username);

  console.log(user);
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default ProfilePage;
