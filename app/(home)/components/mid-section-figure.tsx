import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { icons } from "@/constants";
import React from "react";

type Props = {};

const MidSectionFigure = (props: Props) => {
  return (
    <section className="flex flex-col items-center space-y-3">
      {icons.map((i) => (
        <section
          className={`bg-orange w-52 rounded-full p-6 space-x-2 flex items-center`}
          key={i.color}
        >
          <i.Icon className="w-10 h-10 text-yellow" />

          <div className="flex w-full flex-col space-y-2">
            <Skeleton className="w-[80%] bg-yellow h-2" />
            <Skeleton className="w-[30%] bg-yellow h-2" />
          </div>
        </section>
      ))}
    </section>
  );
};

export default MidSectionFigure;
