import React from "react";
import { Products as products } from "@prisma/client";
import Product from "./product";
import StoreAnalytics from "./store-analytics";
import Modal from "@/components/shared/modal";
import CreateProduct from "@/components/forms/create-product";
import { styles } from "@/styles";

type Props = {
  products: products[];
};

const Products = ({ products }: Props) => {
  return (
    <section className="space-y-10 min-h-screen">
      <StoreAnalytics />
      <Modal
        contentClassName="overflow-y-scroll"
        trigger="Add Product"
        title="Add a Product"
        btnStyle={styles.button}
      >
        <CreateProduct />
      </Modal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {products?.map((pro) => (
          <Product product={pro} key={pro?.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
