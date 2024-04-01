import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  className: string;
};

const Header = ({ title, className }: Props) => {
  return (
    <h3
      className={cn(
        "font-bold text-yellow leading-tight tracking-tighter",
        className
      )}
    >
      {title}
    </h3>
  );
};

export default Header;
