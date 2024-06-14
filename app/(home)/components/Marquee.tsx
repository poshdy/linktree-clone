import { icons } from "@/constants";
import React from "react";
import Marquee from "react-fast-marquee";
type Props = {};

const IconSlider = (props: Props) => {
  return (
    <Marquee className="" autoFill gradient gradientColor="#1A1A1A">
      <div className="flex items-center gap-8 ">
        {icons.map((k) => (
          <div className=" flex items-center justify-center gap-1" key={k.name}>
            <k.Icon className="w-10 h-10 text-neutral-400" />
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-500">
              {k.name}
            </h2>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default IconSlider;
