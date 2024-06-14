"use server";
import { signIn, signOut } from "@/auth";
import db from "@/db";
import { RedirectType, redirect } from "next/navigation";

export const HeroSignUp = async (formData: FormData) => {
  const username = formData.get("username");
  console.log(username);
  redirect(`sign-up?username=${username}`, RedirectType.push);
};

export const SignIn = async (formData: FormData) => {
  const provider = formData.get("google") || formData.get("github");

  await signIn(provider as string, {
    redirectTo: "/page",
  });
};

export const SignOut = async () => {
  try {
    await signOut();
  } catch (error) {
    console.log(error);
  }
};
