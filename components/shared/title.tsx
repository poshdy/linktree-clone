import React from "react";
import { cn } from "@/lib/utils";
type TitleProps = {
  title: string;
  className: string;
};

const Title = ({ className, title }: TitleProps) => {
  return (
    <h2 className={cn("font-bold leading-tight tracking-tighter", className)}>
      {title}
    </h2>
  );
};

export default Title;
