"use server";

import { signIn } from "@/auth";
import  db  from "@/db";
import { Session } from "next-auth";
import { auth } from "@/auth";
import { RedirectType, notFound, redirect } from "next/navigation";

export const HeroSignUp = async (formData: FormData) => {
  const username = formData.get("username");
  console.log(username);
  redirect(`sign-up?username=${username}`, RedirectType.push);
};

export const SignIn = async (formData: FormData) => {
  const provider = formData.get("google") || formData.get("github");
  console.log(provider);
  await signIn(provider as string, {
    redirectTo: "/dashboard",
    redirect: true,
  });
};

export const CreatePage = async (formData: FormData, message: string) => {
  try {
    const session: Session | null = await auth();
    const username = formData.get("username");
    const profileTitle = formData.get("title");
    const bio = formData.get("bio");

    const isUnique = await db.page.findFirst({
      where: {
        username: username as string,
      },
    });
    if (isUnique) {
      message = "Already Exists Try another one!";
    }

    await db.page.create({
      data: {
        username: username as string,
        bio: bio as string,
        title: profileTitle as string,
        user: { connect: { id: session?.user?.id } },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const findByUsername = async (username: string) => {
  const user = await db.page.findUnique({
    where: {
      username,
    },
    include: {
      user: true,
    },
  });
  if (!user) {
    notFound();
  }
  return user;
};
