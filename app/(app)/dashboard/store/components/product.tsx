import React from "react";
import { Products as product } from "@prisma/client";
import Image from "next/image";
import Title from "@/components/shared/title";
import { FormattedPrice } from "@/lib/utils";
import DeleteProduct from "./delete-product";
import ToggleVisability from "@/components/shared/toggle-visability";
import Modal from "@/components/shared/modal";
import { styles } from "@/styles";
import UpdateProduct from "@/components/forms/update-product";
import { Edit2 } from "lucide-react";
type Props = {
  product: product;
};

const Product = ({ product }: Props) => {
  return (
    <div className="bg-white w-fit rounded-3xl col-span-1 p-2 space-y-3 text-neutral-900">
      <div className="relative w-[180px] h-[180px]">
        <Image
          fill
          sizes="100vw,100vh"
          alt={product?.productName}
          className="rounded-3xl object-cover"
          src={product?.productImageUrl}
        />
      </div>
      <div className="px-2">
        <Title title={product?.productName} className="text-base font-medium" />
        <span className="text-sm text-neutral-400 font-normal">
          {FormattedPrice(+product?.price!!)}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center p-1 gap-1">
          <Modal
            contentClassName="overflow-y-scroll"
            Icon={Edit2}
            title={`Update ${product?.productName}`}
            btnStyle={styles.buttonIcon}
          >
            <UpdateProduct product={product} />
          </Modal>
          <DeleteProduct prodId={product?.id} />
        </div>
        <ToggleVisability
          IsVisiable={product?.visible}
          id={product?.id!!}
          name="product"
        />
      </div>
    </div>
  );
};

export default Product;
