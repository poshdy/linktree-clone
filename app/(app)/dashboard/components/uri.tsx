import Title from "@/components/shared/title";
import Link from "next/link";
import React from "react";
import { CiCircleInfo } from "react-icons/ci";
type Props = {
  username: string;
};

const Uri = ({ username }: Props) => {
  return (
    <div className="flex items-center justify-center gap-2 w-full">
      {/* <CiCircleInfo className="w-7 h-7" /> */}
      <Link
        className="text-center text-xs md:text-sm font-normal relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"
        href={`/${username}`}
      >
        Your Reach me! Page Is Live at:{" "}
        <strong className="underline">Reachme/{username}</strong>
      </Link>
    </div>
  );
};

export default Uri;
