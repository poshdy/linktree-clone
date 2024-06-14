"use client";
import { applyButton } from "@/actions/page";
import { Input } from "@/components/shared/forms";
import Title from "@/components/shared/title";
import { Button as button } from "@/types";
import React, { useState } from "react";

type Props = {
  buttons: button[];
};

const Buttons = ({ buttons }: Props) => {
  const [btnId, setBtnId] = useState("");
  return (
    <section className="grid grid-cols-3 gap-3 justify-items-center  bg-neutral-800 py-5 rounded-2xl">
      {buttons?.map((button) => (
        <div className="flex flex-wrap" key={button?.id}>
          <Input
            defaultValue={button?.id}
            name="buttonId"
            hidden
            readOnly
            className="hidden"
          />
          <div
            onClick={() => {
              setBtnId(button?.id);
              applyButton(button?.id);
            }}
            className={`${
              btnId == button?.id && "scale-90 outline-dashed outline-blue "
            } col-span-1 w-[180px] h-10 duration-300 ease-out `}
            style={{
              backgroundColor:
                button?.type == "Outline"
                  ? "#0000000"
                  : button?.type == "Shadow"
                  ? "#fff"
                  : "#000",
              color: button?.textColor!!,
              borderWidth: button?.type == "Fill" ? 0 : 2,
              boxShadow: button?.type == "Shadow" ? `5px 5px #00e` : "none",
              borderColor: button?.type == "Fill" ? "transparent" : "#fff",

              borderRadius:
                button?.style == "fullyRounded"
                  ? 999
                  : button?.style == "Rectangle"
                  ? 0
                  : 10,
            }}
          />
        </div>
      ))}
    </section>
  );
};

export default Buttons;
