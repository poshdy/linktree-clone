import { deleteproduct } from "@/actions/product";
import { Input, Button } from "@/components/shared/forms";
import { Trash } from "lucide-react";
import React from "react";

type Props = {
  prodId: string;
};

const DeleteProduct = ({ prodId }: Props) => {
  return (
    <form action={deleteproduct}>
      <Button type="submit" className="bg-transparent hover:bg-transparent p-1">
        <Trash className="w-5 h-5 cursor-pointer text-red-500" />
      </Button>
      <Input
        name="prodId"
        type="hidden"
        className="hidden"
        readOnly
        value={prodId}
      />
    </form>
  );
};

export default DeleteProduct;
