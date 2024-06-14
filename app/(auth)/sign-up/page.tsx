import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Title from "@/components/shared/title";
import Link from "next/link";
import { FaStarOfLife } from "react-icons/fa";
import { Button } from "@/components/shared/forms";
import { SignIn } from "@/actions/auth";
import Logo from "@/components/shared/logo";
import { getCurrentUser } from "@/actions/shared";

const SignUpPage = async () => {
  return (
    <section className="flex space-y-5 items-center justify-start py-20 flex-col gap-3 w-full h-screen text-neutral-300">
      <FaStarOfLife className="w-32 h-32 text-blue" />
      <Title className="text-3xl " title={"Join Reach me! for free"} />
      <form className=" flex items-center gap-3" action={SignIn}>
        <Button
          name="google"
          value={"google"}
          type="submit"
          className="py-5 flex items-center gap-3 justify-center"
          variant={"outline"}
        >
          <FaGoogle className="w-5 h-5" /> Sign in with Google
        </Button>
        <Button
          type="submit"
          name="github"
          value={"github"}
          className="py-5 flex items-center gap-3 justify-center"
          variant={"outline"}
        >
          <FaGithub className="w-5 h-5" /> Sign in with Github
        </Button>
      </form>
    </section>
  );
};

export default SignUpPage;
