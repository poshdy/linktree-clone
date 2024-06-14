import LandingPage from "@/app/(home)/components/landing-page";
import React from "react";
import IconSlider from "./components/Marquee";
import { ProcessSection } from "@/constants";
import Title from "@/components/shared/title";
import { styles } from "@/styles";
import NavBar from "./components/nav-bar";
import { auth } from "@/auth";

const HomePage = async () => {
  const session = await auth();
  return (
    <section className="min-h-screen space-y-20 py-5 flex-col w-full dark:bg-black bg-dark  dark:bg-dot-white/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center">
      <NavBar session={session} />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-dark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <LandingPage session={session} />

      <div className="w-[80%] mx-auto">
        <IconSlider />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-[80%] mx-auto gap-3">
        {ProcessSection.map((item, idx) => (
          <div
            className={`${styles.grad} ${
              idx == 1 || idx == 2 ? "md:col-span-2 col-span-1" : "col-span-1"
            } p-5 z-30 rounded-3xl space-y-3`}
            key={idx}
          >
            <item.icon className="w-10 h-10 text-blue" />
            <Title title={item.title} className="text-3xl text-neutral-300 " />
            <Title
              title={item.description}
              className="text-sm text-neutral-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
