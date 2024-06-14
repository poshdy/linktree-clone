"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormItem,
  FormField,
  Input,
  FormMessage,
  FormLabel,
  zodResolver,
  Button,
  toast,
} from "@/components/shared/forms";
import { useForm } from "react-hook-form";
import { ProductFromValues, ProductSchema } from "@/lib/schema";
import { Products } from "@prisma/client";
import ImageUpload from "../shared/drop-zone";
import { LoadingSpinner } from "../shared/submit-button";
import { useAction } from "next-safe-action/hooks";
import { updateProduct } from "@/actions/product";
type Props = {
  product: Products;
};

const UpdateProduct = ({ product }: Props) => {
  const { execute } = useAction(updateProduct, {
    onError(error) {
      console.log(error);
      toast.error("Something went Wrong");
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<ProductFromValues>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      image: product.productImageUrl,
      productName: product.productName,
      price: product?.price,
      productUrl: product.productUrl,
      id: product?.id,
    },
  });

  const onSubmit = async (values: ProductFromValues) => {
    execute(values);
  };
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <ImageUpload
                  setLoading={setLoading}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>title</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="productUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>url</FormLabel>
              <FormControl>
                <Input placeholder="https://" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="100" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={loading} type="submit">
          {loading ? <LoadingSpinner /> : "Update"}
        </Button>
      </form>
    </Form>
  );
};

export default UpdateProduct;
