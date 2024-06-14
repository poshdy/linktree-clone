import { Page } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  user: Page;
};

const Profile = ({ user }: Props) => {
  return (
    <div className="w-12 h-12 relative md:w-12 md:h-12 ">
      <Image
        alt={user.username}
        src={user.profile_photo!!}
        fill
        className="object-cover rounded-full border-2 border-neutral-400"
        sizes="100vw,100vh"
      />
    </div>
  );
};

export default Profile;
