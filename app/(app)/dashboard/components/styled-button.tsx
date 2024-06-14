"use client";
import { incrementLink } from "@/actions/analytics";
import { Button, Templates, links } from "@/types";
import Link from "next/link";
import React from "react";

type Props = {
  link: links;
  type: string;
  theme: Templates;
  button: Button;
};

const StyledButton = ({ link, type, theme, button }: Props) => {
  return (
    <div
      onClick={async () => await incrementLink(link?.id)}
      style={{
        backgroundColor:
          type === "Theme" ? theme?.buttonColor : button?.color!!,
        borderWidth: button?.type == "Fill" ? 0 : 2,
        boxShadow:
          button?.type == "Shadow" ? `4px 4px  ${button?.shadowColor}` : "none",
        borderColor:
          button?.type == "Fill" ? "transparent" : button?.borderColor!!,

        borderRadius:
          button?.style == "fullyRounded"
            ? 999
            : button?.style == "Rectangle"
            ? 0
            : 10,
      }}
      className="w-full  p-4 rounded-full"
      key={link?.id}
    >
      <Link
        href={link?.url}
        style={{
          color: type === "Theme" ? theme?.textColor : button?.textColor!!,
        }}
        className="text-sm"
      >
        {link?.title}
      </Link>
    </div>
  );
};

export default StyledButton;
