import React from "react";
import Figure from "./page-figure";
import Container from "./shared/Container";
import ActionButton from "./shared/ActionButton";
import Header from "./shared/header";

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
        <Figure />
      </section>
    </section>
  );
};

export default MidSection;
