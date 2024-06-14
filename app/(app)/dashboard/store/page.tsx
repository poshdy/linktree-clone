import Title from "@/components/shared/title";
import React from "react";
import { getProducts } from "@/data-access/products";
import Products from "./components/products";
import { Button } from "@/components/ui/button";
import { createStore } from "@/actions/product";

const Store = async () => {
  const products = await getProducts();
  return (
    <section className="space-y-3">
      <Title className="text-2xl font-semibold" title="Store" />
      {!products.store!! ? (
        <div className="lg:py-10 flex items-center justify-center space-y-6 flex-col text-center">
          <Title
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            title="Streamline Your Links: Add Products Directly from Your Store"
          />
          <p className="font-normal mt-6 text-sm  text-neutral-300">
            Skip the manual work! Our new product linking lets you add items
            from your store straight to your Reach me!. Just choose your product
            and watch it appear - its that easy. Boost sales and save time with
            seamless product integration.
          </p>
          <form action={createStore}>
            <Button type="submit"> GetStarted</Button>
          </form>
        </div>
      ) : (
        <Products products={products?.products} />
      )}
    </section>
  );
};

export default Store;
