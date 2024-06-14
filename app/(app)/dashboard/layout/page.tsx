import Title from "@/components/shared/title";
import React, { Suspense } from "react";
import Themes from "./components/themes";
import { getPage, getThemes, getButtonStyles } from "@/data-access/page";
import BackGround from "./components/back-ground";
import Buttons from "./components/Buttons";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ButtonColors from "./components/ButtonColors";
import { Separator } from "@/components/ui/separator";

const Layout = async () => {
  const themes = await getThemes();
  const buttons = await getButtonStyles();
  const page = await getPage();
  return (
    <section className="space-y-10 flex flex-col items-center justify-center">
      <div className="space-y-1 w-[90%] mx-auto">
        <Title title="Themes" />

        <Themes themes={themes} />
      </div>
      <div
        className={`flex items-center justify-center flex-col p-5 gap-3 z-30 rounded-3xl w-[90%] mx-auto`}
      >
        <div className="w-full">
          <Title title="Buttons" />

          <Buttons buttons={buttons} />
        </div>
        <div className="flex justify-between items-center w-full gap-3">
          <div className="w-[50%] space-y-1">
            <Title title="Backgound" />
            <BackGround />
          </div>
          <div className="w-[50%] space-y-1">
            <Title title="Button Color" />
            <ButtonColors button={page?.button!!} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
