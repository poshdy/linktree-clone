import Image from "next/image";
import React from "react";
import image from "@/public/posh.jpeg";
import { Button } from "../../../components/ui/button";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogo } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { RxDiscordLogo } from "react-icons/rx";
import Header from "../../../components/shared/header";

const Figure = () => {
  return (
    <section className="lg:w-[18vw] w-[35vw] h-[40vh] lg:h-[70vh] bg-yellow space-y-5  flex flex-col justify-center items-center rounded-2xl border-2 border-dark">
      <div className=" relative w-[60px] md:w-[100px] aspect-square ">
        <Image
          fill
          priority
          className="object-cover rounded-full"
          sizes="100vh,100vh"
          alt="image"
          src={image}
        />
      </div>
      <div className="flex flex-col items-center space-y-3 w-[90%] mx-auto">
        <Button className="bg-white h-6 md:h-8 text-xs shadow-[2px_3px_0px_0px_#000] w-full text-dark hover:bg-green rounded-full">
          Recent Blog
        </Button>
        <Button className="bg-white h-6 md:h-8  text-xs shadow-[2px_3px_0px_0px_#000] w-full text-dark hover:bg-green rounded-full">
          LinkedIn Tips
        </Button>
        <Button className="bg-white h-6 md:h-8 text-xs  shadow-[2px_3px_0px_0px_#000] w-full text-dark hover:bg-green rounded-full">
          Latest Post
        </Button>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <CiFacebook className="w-5 h-5 md:w-8 md:h-8" />
        <PiInstagramLogo className="w-5 h-5 md:w-8 md:h-8" />
        <CiLinkedin className="w-5 h-5 md:w-8 md:h-8" />
        <RxDiscordLogo className="w-5 h-5 md:w-8 md:h-8" />
      </div>
      <Header title="Reach me!" className="text-dark text-lg md:text-2xl" />
    </section>
  );
};

export default Figure;
