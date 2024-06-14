import React from "react";
import SubmitButton from "../shared/submit-button";
import { Input } from "@/components/shared/forms";
import { SmLinks } from "@/types";
import { icons } from "@/constants";
import Title from "../shared/title";
import { addSocialLink } from "@/actions/links";
type Props = {
  links: SmLinks[];
};

const CreateSocialIcon = ({ links }: Props) => {
  const linksList: any[] = links?.map((link) => {
    const name = icons.find(
      (icon) => icon?.name?.toLowerCase() == link?.name.toLowerCase()
    );
    return name?.name;
  });
  return (
    <>
      {icons.map((icon, index) => (
        <div className="flex items-center justify-between gap-4" key={index}>
          <icon.Icon className="w-7 h-7 text-neutral-300" />
          <Title
            title="Already Created"
            className={
              linksList?.includes(icon?.name)
                ? "text-sm font-normal text-blue"
                : "hidden"
            }
          />

          <form
            action={addSocialLink}
            className={
              linksList?.includes(icon?.name)
                ? "hidden"
                : "flex w-full items-center gap-4"
            }
          >
            <Input
              name="url"
              className="w-full"
              placeholder={`Please Enter ur ${icon.name} url`}
              type="text"
            />
            <SubmitButton type="create" className="w-fit" />
            <Input type="hidden" value={icon?.name} name="name" />
          </form>
        </div>
      ))}
    </>
  );
};

export default CreateSocialIcon;
