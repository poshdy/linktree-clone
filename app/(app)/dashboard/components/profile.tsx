import Title from "@/components/shared/title";
import { User } from "@prisma/client";
import React from "react";

type Props = {
  user: string;
};

const Profile = ({ user }: Props) => {
  return (
    <section className="flex items-center justify-start border-2 border-dark gap-2 rounded-full w-full px-2 py-2">
      <div className="w-8 h-8 rounded-full bg-black"></div>
      <Title className="text-base font-semibold" title={user} />
    </section>
  );
};

export default Profile;
