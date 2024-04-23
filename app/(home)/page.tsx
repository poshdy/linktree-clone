import LandingPage from "@/app/(home)/components/landing-page";
import React from "react";

type Props = {};

const HomePage = async (props: Props) => {
  return (
    <main className="container min-h-screen flex items-center flex-col mt-4">
      <LandingPage />
    </main>
  );
};

export default HomePage;
