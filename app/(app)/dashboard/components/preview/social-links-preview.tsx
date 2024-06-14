import { incrementSocialIcon } from "@/actions/analytics";
import { Page } from "@/types";
import React from "react";
import SocialIcon from "./social-icon";
import Link from "next/link";
type Props = {
  position: string;
  LinksPosition: string;
  page: Page;
  IconsList: any[];
};

const SocialLinksPreview = ({
  position,
  LinksPosition,
  page,
  IconsList,
}: Props) => {
  return (
    <>
      {LinksPosition == position ? (
        <div
          style={{ color: page?.textColor!! }}
          className="flex items-center gap-3"
        >
          {IconsList?.map((link: any) => (
            <Link
              // onClick={async () => {
              //   await incrementSocialIcon(link?.id);
              // }}
              href={link?.url}
              key={link?.name}
            >
              <link.icon className="w-8 h-8 hover:scale-105 duration-100 ease-in-out" />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default SocialLinksPreview;
// onClick={async ()=>await incrementSocialIcon()}
