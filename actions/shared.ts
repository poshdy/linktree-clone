"use server";
import db from "@/db";
import { Session } from "next-auth";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
import { SignApiOptions, v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

const config = cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_MY_KEY as string,
  secure: true,
});

export const getCurrentUser = async () => {
  const session: Session | null = await auth();
  const user = await db.page.findUnique({
    where: { userId: session?.user?.id },
    include: {
      user: true,
    },
  });
  return {
    user,
    session,
  };
};
export const getUserByUsername = async (username: string) => {
  try {
    const user = await db.page.findUnique({
      where: {
        username,
      },
      include: {
        user: true,
        button: true,
        theme: true,
        links: true,
        Icons: true,
      },
    });

    if (!user) {
      notFound();
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const uploadImage = async (image: any) => {
  const buffer = Buffer.from(image);
};

export const updatevisibility = async (
  name: string,
  value: boolean,
  id: string
) => {
  if (name == "link") {
    await db.links.update({
      where: {
        id: id as string,
      },
      data: {
        visible: value,
      },
    });
  }
  if (name == "smLink") {
    await db.smLinks.update({
      where: {
        id: id as string,
      },
      data: {
        visible: value,
      },
    });
  }
  if (name == "product") {
    await db.products.update({
      where: {
        id: id as string,
      },
      data: {
        visible: value,
      },
    });
  }
  revalidatePath("/dashboard");
};

export const getSignUrl = async () => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: "reach_me" },
    process.env.CLOUDINARY_MY_KEY as string
  );

  return { timestamp, signature };
};
