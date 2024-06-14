import React from "react";
import Link from "next/link";
import Title from "./title";
import { FaStarOfLife } from "react-icons/fa";
import { cn } from "@/lib/utils";

type LogoProps = {
  textColor?: string;
};

const Logo = ({ textColor }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-3 font-bold ">
      <FaStarOfLife
        className={cn(
          "h-8 w-8 text-blue hover:animate-spin duration-300 ease-in-out"
        )}
      />
      <Title className={cn("text-lg font-bold", textColor)} title="Reach me!" />
    </Link>
  );
};

export default Logo;
