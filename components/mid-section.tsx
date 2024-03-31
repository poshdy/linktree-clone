import React from "react";
import Figure from "./figure";
import Container from "./shared/Container";
import ActionButton from "./shared/ActionButton";

type Props = {};

const MidSection = (props: Props) => {
  return (
    <section className=" bg-blue h-[60vh] flex items-center">
      <section className="w-[90%] mx-auto flex items-center justify-center">
        <section className="w-[50%]">
          <h3 className="text-5xl font-bold text-yellow leading-tight tracking-tighter">
            Share your Linktree from your Instagram, TikTok, Twitter and other
            bios
          </h3>
          <ActionButton />
        </section>
        <Figure />
      </section>
    </section>
  );
};

export default MidSection;
