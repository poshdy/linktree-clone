import React from "react";
import Container from "./shared/Container";
import Figure from "./figure";
import ActionButton from "./shared/ActionButton";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <Container>
      <section className="text-dark flex flex-col item-center justify-around space-y-5 lg:flex-row lg:justify-center lg:items-start min-h-[70vh] mt-20 font-bold">
        <section className="lg:w-[50%] w-full flex items-start flex-col space-y-4">
          <h2 className="text-5xl leading-tight tracking-tighter">
            Simplify your online presence with
            <strong className="text-yellow ml-2">Reach me!.</strong>
          </h2>
          <h5 className="font-semibold">
            The easy way to share your social media, website, portfolio, and
            more.
          </h5>
          <ActionButton />
        </section>
        <Figure />
      </section>
    </Container>
  );
};

export default LandingPage;
