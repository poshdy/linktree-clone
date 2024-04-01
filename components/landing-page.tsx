import React from "react";
import Container from "./shared/Container";
import Figure from "./page-figure";
import ActionButton from "./shared/ActionButton";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <Container>
      <section className="flex flex-col item-center justify-center space-y-5 lg:flex-row lg:justify-around lg:items-center min-h-[80vh] mt-20 font-bold">
        <section className="lg:w-[50%] w-full flex items-center md:items-start flex-col space-y-8">
          <div className="text-dark flex flex-col item-center lg:items-start ">
            <h2 className="text-4xl md:text-7xl leading-tight tracking-tighter text-center md:text-left">
              Simplify your online presence with
              <strong className="text-yellow ml-2">Reach me!.</strong>
            </h2>
            <h5 className="font-semibold text-center md:text-left">
              The easy way to share your social media, website, portfolio, and
              more.
            </h5>
            <h6 className="font-semibold text-center md:text-left">
              Join 5 people using Reach me! for their link in bio. One link to
              help you share
            </h6>
          </div>
          <ActionButton />
        </section>
        <section className="flex justify-center items-center">
          <Figure />
        </section>
      </section>
    </Container>
  );
};

export default LandingPage;
