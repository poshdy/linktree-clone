import React from "react";
import SignUpButton from "./sign-up-button";
import Title from "@/components/shared/title";

const LandingPage = () => {
  return (
    <section className="text-gray-200 flex flex-col justify-center items-center space-y-8 w-[90%]">
      <Title
        title="'Simplify your online presence with Reach me'"
        className="text-5xl text-center md:text-7xl lg:text-9xl font-bold leading-tight tracking-tighter"
      />

      <section className="flex justify-between items-center w-full">
        <div className="space-y-3">
          <SignUpButton />
          <h5 className="font-semibold text-sm text-gray-500  max-w-80">
            The easy way to share your social media, website, portfolio, and
            more.
          </h5>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <span className="bg-gray-900 w-10 aspect-square rounded-full"></span>
              <span className="bg-gray-100 w-10 aspect-square rounded-full"></span>
              <span className="bg-gray-500 w-10 aspect-square rounded-full"></span>
            </div>
            <h6 className="font-semibold text-sm text-gray-400 w-72">
              Join 5 people using Reach me! for their link in bio. One link to
              help you share
            </h6>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
