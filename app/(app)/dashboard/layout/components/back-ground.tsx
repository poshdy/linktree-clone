import { Input } from "@/components/shared/forms";
import React from "react";
import { getPage } from "@/data-access/page";
import Title from "@/components/shared/title";
import { applyBackGround } from "@/actions/page";
import SubmitButton from "@/components/shared/submit-button";

const BackGround = async () => {
  const bgColor = await getPage();
  return (
    <form
      className="space-y-3 p-5 bg-neutral-800  rounded-2xl"
      action={applyBackGround}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-start flex-col space-y-1">
          <Title className="text-xs font-normal" title="backgound" />
          <Input
            className="w-20 h-20 border-none bg-transparent p-0"
            type="color"
            defaultValue={bgColor?.bgColor!!}
            name="bgColor"
          />
        </div>
        <div className="flex items-start flex-col space-y-1 w-full">
          <Title className="text-xs font-normal" title="text" />

          <Input
            className="w-20 h-20  border-none bg-transparent p-0"
            type="color"
            defaultValue={bgColor?.textColor!!}
            name="textColor"
          />
        </div>
      </div>
      <SubmitButton className="w-full" variant={"action"} title="Save" />
    </form>
  );
};

export default BackGround;
