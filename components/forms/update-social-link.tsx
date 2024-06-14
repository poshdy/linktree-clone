import React from "react";
import { Input } from "@/components/shared/forms";
import SubmitButton from "../shared/submit-button";
import { updateSocialLink } from "@/actions/links";
import { SmLinks } from "@/types";
type Props = {
  link: SmLinks;
};

const UpdateSocialLink = ({ link }: Props) => {
  const UpdateSmAction = updateSocialLink.bind(null, link?.id);
  return (
    <form action={UpdateSmAction} className="flex items-center gap-3 w-full">
      <Input
        name="url"
        className="w-full"
        defaultValue={link?.url}
        type="text"
      />
      <SubmitButton />
    </form>
  );
};

export default UpdateSocialLink;
