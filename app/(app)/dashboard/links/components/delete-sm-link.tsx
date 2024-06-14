import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { deleteSocialLink } from "@/actions/links";
type Props = {
  link: any;
};

const DeleteSmIcon = ({ link }: Props) => {
  const DeleteAction = deleteSocialLink.bind(null, link?.id);
  return (
    <form action={DeleteAction}>
      <Button className="bg-transparent hover:bg-transparent p-1">
        <MdDeleteOutline className="text-red-600 hover:text-red-800 duration-300 ease-in-out w-6 h-6" />
      </Button>
    </form>
  );
};

export default DeleteSmIcon;
