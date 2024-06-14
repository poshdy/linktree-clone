import React from "react";
import { cn } from "@/lib/utils";
type TitleProps = {
  title: string;
  className?: string;
  subTitle?: string;
};

const Title = ({ className, title, subTitle }: TitleProps) => {
  return (
    <div className={subTitle && "space-y-2"}>
      <h2 className={cn("font-bold leading-tight text-xl tracking-tighter", className)}>
        {title}
      </h2>
      <p className={"font-noraml text-sm text-light"}>{subTitle}</p>
    </div>
  );
};

export default Title;
