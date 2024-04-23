import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Title from "@/components/shared/title";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignIn } from "@/actions";

const SignUpPage = () => {
  return (
    <section className="w-full lg:grid h-screen lg:grid-cols-3 content-center justify-center text-gray-200">
      <div className="flex items-center justify-center py-12 col-span-2">
        <div className="mx-auto grid w-[400px] gap-6">
          <div className="grid gap-2 text-center">
            <Title title="Join Reach me!" className="text-4xl " />
            <p className="text-balance text-muted-foreground">Join for free</p>
          </div>

          <form className="grid gap-4" action={SignIn}>
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

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-1 hidden lg:flex w-full h-screen bg-gradient-to-br from-blue via-purple-800 to-violet-900  items-center justify-center">
        <Title title="Reach me!" className="text-6xl text-gray-200 p-4" />
      </div>
    </section>
  );
};

export default SignUpPage;
