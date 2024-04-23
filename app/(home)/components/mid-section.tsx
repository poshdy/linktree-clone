import React from "react";
import ActionButton from "@/components/shared/ActionButton";
import Header from "@/components/shared/header";

type Props = {};

const MidSection = (props: Props) => {
  return (
    <section className=" bg-blue h-[80vh] flex items-center">
      <section className="w-[90%] mx-auto flex items-center justify-around">
        <section className="w-[50%] space-y-5">
          <Header
            className="text-3xl md:text-5xl"
            title="Share your Linktree from your Instagram, TikTok, Twitter and other bios"
          />
          <ActionButton />
        </section>
      </section>
    </section>
  );
};

export default MidSection;
