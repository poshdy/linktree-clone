import React from "react";
import Link from "next/link";
import { RiArrowLeftUpLine } from "react-icons/ri";
type Props = {
  url: string;
};

const LinkIcon = ({ url }: Props) => {
  return (
    <Link
      className="rounded-full border border-neutral-300 p-1"
      href={`${url}`}
    >
      <RiArrowLeftUpLine className="w-2 h-2" />
    </Link>
  );
};

export default LinkIcon;
