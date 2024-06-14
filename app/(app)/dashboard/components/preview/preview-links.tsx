import React from "react";
import StyledButton from "../styled-button";
import { Templates, Button, links } from "@/types";
type LinksProps = {
  links: links[];
  button: Button;
  theme: Templates;
  type: string;
};
export const PreviewLinks = ({ links, type, theme, button }: LinksProps) => {
  return (
    <div className="flex flex-col items-center space-y-3 w-[80%] md:w-full text-center mx-auto">
      {links &&
        links.map((link) => (
          <StyledButton
            key={link.id}
            link={link!!}
            type={type!!}
            button={button!!}
            theme={theme!!}
          />
        ))}
    </div>
  );
};
