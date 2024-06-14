import React from "react";
import Title from "@/components/shared/title";
import { AnimatedButton } from "@/components/shared/animated-button";
import CallToAction from "./call-to-action";
import { Session } from "next-auth";

const LandingPage = ({ session }: { session: Session | null }) => {
  return (
    <section className="text-gray-200 flex flex-col justify-center items-center space-y-10 w-[60%] mx-auto">
      <div className="flex flex-col items-center gap-3">
        <AnimatedButton>
          <Title
            title="Join 5 people using Reach me! for their link in bio. One link to
          help you share"
            className="text-center text-xs md:text-sm font-normal relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"
          />
        </AnimatedButton>
        <Title
          title="Simplify your online presence with Reach me"
          className="text-4xl text-center sm:text-8xl font-bold py-8"
        />
        <Title
          className="text-xs md:text-base font-normal text-center"
          title="The easy way to share your social media, website, portfolio, and more."
        />
        <CallToAction session={session} />
      </div>
    </section>
  );
};

export default LandingPage;
