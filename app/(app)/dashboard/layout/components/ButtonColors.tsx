import { applyButtonStyle } from "@/actions/page";
import Title from "@/components/shared/title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Button as button } from "@prisma/client";
import React from "react";

type Props = {
  button: button;
};

const InputStyle = "w-14 h-14 md:w-20 md:h-20 border-none bg-transparent p-0";
const ButtonColors = async ({ button }: Props) => {
  const applyColors = applyButtonStyle.bind(null, button?.id, button?.type);
  return (
    <form
      className="space-y-3 p-5 bg-neutral-800  rounded-2xl"
      action={applyColors}
    >
      {button?.type == "Outline" && (
        <div className="flex items-center gap-3 ">
          <ButtonText button={button!!} />
          <ButtonBorderColor button={button!!} />
        </div>
      )}
      {button?.type == "Fill" && (
        <div className="flex items-center gap-3">
          <ButtonText button={button!!} />
          <ButtonBackGround button={button!!} />
        </div>
      )}
      {button?.type == "Shadow" && (
        <div className="flex items-center gap-3">
          <ButtonText button={button!!} />
          <ButtonBackGround button={button!!} />
          <ButtonShadowColor button={button!!} />
        </div>
      )}

      <Button variant={"action"} className="w-full" type="submit">
        Save
      </Button>
    </form>
  );
};

export default ButtonColors;

const ButtonText = ({ button }: Props) => {
  return (
    <div className="flex items-start flex-col">
      <Title className="text-xs font-normal" title="text" />
      <Input
        defaultValue={button?.textColor!!}
        className={InputStyle}
        type="color"
        name="textColor"
      />
    </div>
  );
};
const ButtonBackGround = ({ button }: Props) => {
  return (
    <div className="flex items-start flex-col">
      <Title className="text-xs font-normal" title="background" />
      <Input
        defaultValue={button?.color!!}
        className={InputStyle}
        type="color"
        name="BgbtnColor"
      />
    </div>
  );
};
const ButtonShadowColor = ({ button }: Props) => {
  return (
    <div className="flex items-start flex-col">
      <Title className="text-xs font-normal" title="shadow" />
      <Input
        defaultValue={button?.shadowColor!!}
        className={InputStyle}
        type="color"
        name="shadowColor"
      />
    </div>
  );
};
const ButtonBorderColor = ({ button }: Props) => {
  return (
    <div className="flex items-start flex-col space-y-3">
      <Title className="text-xs font-normal" title="border" />

      <Input
        defaultValue={button?.shadowColor!!}
        className={InputStyle}
        type="color"
        name="borderColor"
      />
    </div>
  );
};
