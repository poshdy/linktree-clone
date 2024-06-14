"use client";
import { applyTheme } from "@/actions/page";
import React, { useState } from "react";
import { Templates } from "@prisma/client";
import Title from "@/components/shared/title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  themes: Templates[];
};

const Themes = ({ themes }: Props) => {
  const [id, setId] = useState("");
  return (
    <Carousel
      className="w-full"
    >
      <CarouselContent className="w-full">
        {themes?.map((theme) => (
          <CarouselItem
            className=" md:basis-1/2 lg:basis-1/4 flex items-center flex-col space-y-2"
            key={theme?.id}
          >
            <div
              onClick={() => {
                setId(theme?.id);
                applyTheme(theme?.id);
              }}
              style={{ backgroundColor: theme?.bgColor }}
              className={`w-[130px] md:w-[180px] h-[250px] rounded-lg space-y-2 cursor-pointer duration-300 ease-in-out ${
                theme?.id == id && "border-2 border-blue scale-90"
              }`}
            >
              <Buttons {...theme} />
            </div>
            <Title className="text-sm font-normal" title={theme?.name} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"action"} className="text-neutral-200" />
      <CarouselNext variant={"action"} className="text-neutral-200" />
      {/* </section> */}
    </Carousel>
  );
};

export default Themes;

const Buttons = (theme: Templates) => {
  return (
    <div className=" h-full flex-col gap-2  flex items-center justify-center">
      {[1, 2, 3].map((item, i) => (
        <span
          key={item}
          style={{
            backgroundColor: theme?.buttonColor ? theme?.buttonColor : "#000",
          }}
          className="rounded-full w-[80%] h-5 mx-auto"
        />
      ))}
    </div>
  );
};
