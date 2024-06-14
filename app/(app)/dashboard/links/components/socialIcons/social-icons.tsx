import React from "react";
import Title from "@/components/shared/title";
import DeleteSmIcon from "../delete-sm-link";
import ToggleVisability from "@/components/shared/toggle-visability";
import UpdateSocialLink from "@/components/forms/update-social-link";
import Modal from "@/components/shared/modal";
import { Edit2 } from "lucide-react";
import { styles } from "@/styles";
import IconsPosition from "./icons-position";

type Props = {
  IconsList: any[];
  position: string;
};

const SocialIcons = ({ IconsList, position }: Props) => {
  return (
    <section className="flex items-start flex-col gap-8 w-full text-neutral-300">
      {IconsList?.map((link, idx: number) => (
        <div className="flex justify-between items-center w-full" key={idx}>
          <div className="flex items-center gap-3">
            <ToggleVisability
              IsVisiable={link?.visible}
              name="smLink"
              id={link?.id}
            />
            {link?.icon && <link.icon className="w-7 h-7" />}
            <Title title={link?.name!!} className="font-normal text-base" />
          </div>
          <div className={"flex items-center gap-3"}>
            <Modal
              btnStyle={styles.action}
              Icon={Edit2}
              title={`Editing ${link?.name}`}
            >
              <UpdateSocialLink link={link} />
            </Modal>
            <DeleteSmIcon link={link!!} />
          </div>
        </div>
      ))}

      <IconsPosition position={position} />
    </section>
  );
};

export default SocialIcons;
