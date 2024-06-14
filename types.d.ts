import {
  Page,
  Button,
  Products,
  SmLinks,
  links,
  Templates,
  Icons,
  Position,
} from "@prisma/client";

type Links = {
  position: string;
  SmLinks: {
    id: string;
    iconsId: string | null;
    name: string;
    url: string;
  }[];
} | null;

export {
  Page,
  Button,
  Icons,
  Position,
  Products,
  SmLinks,
  Templates,
  links,
  Links,
};
