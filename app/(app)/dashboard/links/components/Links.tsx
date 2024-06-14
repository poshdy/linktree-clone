"use client";
import Title from "@/components/shared/title";
import { links } from "@prisma/client";
import React from "react";
import { format } from "date-fns";
import { MdDeleteOutline } from "react-icons/md";
import { deleteLink } from "@/actions/links";
import ToggleVisability from "@/components/shared/toggle-visability";
import Modal from "@/components/shared/modal";
import UpdateLink from "@/components/forms/update-link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Edit2, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import LinkIcon from "./link-icon";
import { styles } from "@/styles";
type Props = {
  link: links;
};

const Link = ({ link }: Props) => {
  return (
    <Card
      className={cn(
        "w-full md:w-[350px] h-[40vh] col-span-1 text-neutral-200 bg-[#282828] "
      )}
    >
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-start gap-2">
            <LinkIcon url={link?.url} />
            <CardTitle className="md:text-xl text-base">
              {link?.title}
            </CardTitle>
          </div>

          <Modal btnStyle={styles.action} Icon={Edit2} title="Editing Link">
            <UpdateLink link={link} />
          </Modal>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Title className="text-xs font-normal md:text-sm" title={link.url} />

        <div className=" flex items-center space-x-4 rounded-2xl border p-4">
          <Eye />
          <div className="flex-1 space-y-1 ">
            <p className="text-sm font-medium leading-none">Visiablity</p>
            <p className="text-xs text-neutral-400">
              hide and show links without deleting them!
            </p>
          </div>
          <ToggleVisability
            IsVisiable={link?.visible}
            id={link?.id!!}
            name="link"
          />
        </div>
      </CardContent>
      <CardFooter className="w-full flex items-center justify-between">
        <span className="text-neutral-400 text-xs">
          Created at: {format(link?.createdAt, "PPP")}
        </span>
        <MdDeleteOutline
          className="w-6 h-6 text-red-500 hover:text-red-600 duration-300 cursor-pointer"
          onClick={() => deleteLink(link?.id)}
        />
      </CardFooter>
    </Card>
  );
};

export default Link;
