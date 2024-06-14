"use client";
import React, { useState } from "react";
import {
  Input,
  Form,
  FormControl,
  FormField,
  toast,
  FormItem,
  FormLabel,
  FormMessage,
  zodResolver,
  z,
  Button,
} from "@/components/shared/forms";
import { useForm } from "react-hook-form";
import { ProductSchema, ProductFromValues } from "@/lib/schema";
import { LoadingSpinner } from "../shared/submit-button";
import { addProduct } from "@/actions/product";
import ImageUpload from "../shared/drop-zone";
import { useAction } from "next-safe-action/hooks";
const CreateProduct = () => {
  const { execute } = useAction(addProduct, {
    onError(err) {
      toast.error("Something went wrong");
    },
    onSuccess() {
      toast.success("Product Created");
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<ProductFromValues>({
    resolver: zodResolver(ProductSchema),
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
          {loading ? <LoadingSpinner /> : "Create"}
        </Button>
      </form>
    </Form>
  );
};
export default CreateProduct;
