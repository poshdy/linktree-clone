import Title from "@/components/shared/title";
import { FormattedPrice } from "@/lib/utils";
import { Products } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  product: Products;
};

const StorePreview = ({ product }: Props) => {
  return (
    <section className="bg-white rounded-3xl col-span-1 p-2 space-y-3 text-neutral-900">
      <div className="relative w-[120px] h-[120px] md:w-[180px] md:h-[180px]">
        <Image
          fill
          sizes="100vw,100vh"
          alt={product?.productName}
          className="rounded-3xl object-cover"
          src={product?.productImageUrl!!}
        />
      </div>
      <div className="px-2">
        <Title title={product?.productName} className="text-xs md:text-base font-medium truncate max-w-24 md:max-w-32 " />
        <span className="text-sm text-neutral-400 font-normal">
          {FormattedPrice(+product?.price!!)}
        </span>
      </div>
    </section>
  );
};

export default StorePreview;
