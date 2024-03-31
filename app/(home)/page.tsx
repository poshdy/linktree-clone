import LandingPage from "@/components/landing-page";
import MidSection from "@/components/mid-section";
import Container from "@/components/shared/Container";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <LandingPage />
      <MidSection />
    </>
  );
};

export default page;
