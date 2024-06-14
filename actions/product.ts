"use server";
import db from "@/db";
import { getCurrentUser, uploadImage } from "./shared";
import { revalidatePath } from "next/cache";
import { action } from "@/lib/action-client";
import { ProductSchema } from "@/lib/schema";

export const createStore = async () => {
  const { user } = await getCurrentUser();
  await db.store.create({
    data: {
      pageUsername: user?.username,
    },
  });
  revalidatePath("/dashboard");
};

export const addProduct = action(
  ProductSchema,
  async ({ image, price, productName, productUrl }, { user }) => {
    await db.products.create({
      data: {
        productImageUrl: image,
        productName,
        productUrl,
        price,
        store: {
          connect: {
            pageUsername: user.username,
          },
        },
      },
    });
    revalidatePath("/dashboard");
  }
);
export const updateProduct = action(
  ProductSchema,
  async ({ image, price, productName, productUrl, id }, { user }) => {
    await db.products.update({
      data: {
        productImageUrl: image,
        productName,
        productUrl,
        price,
      },
      where: {
        id,
        store: {
          pageUsername: user?.username,
        },
      },
    });
    revalidatePath("/dashboard");
  }
);

export const updateProductt = async (formData: FormData) => {
  // const image = formData.get("image") as File;
  // const defaultImg = formData.get("defaultImage") as File;
  // const prodId = formData.get("prodId");

  // let URL;
  // if (image.size == 0) {
  //   URL = defaultImg;
  // } else {
  //   const ImageUrl = await uploadImage(image);
  //   URL = ImageUrl;
  // }

  // await db.products.update({
  //   where: {
  //     id: prodId as string,
  //   },
  //   data: {
  //     productImageUrl: URL,
  //     productName: formData.get("name") as string,
  //     productUrl: formData.get("url") as string,
  //     price: formData.get("price") as string,
  //   },
  // });

  revalidatePath("/dashboard");
};

export const deleteproduct = async (formData: FormData) => {
  const prodId = formData.get("prodId");
  await db.products.delete({
    where: {
      id: prodId as string,
    },
  });
  revalidatePath("/dashboard");
};
