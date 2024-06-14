"use client";
import { SignOut } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { styles } from "@/styles";
import { Session } from "next-auth";
import Link from "next/link";
import React from "react";

type Props = {
  session: Session | null;
};

const CallToAction = ({ session }: Props) => {
  return (
    <div className="flex items-center text-sm md:text-base text-gray-200 gap-x-1  font-bold ">
      <Link
        className={styles?.Link}
        href={session?.user ? "/dashboard/links" : "/sign-up"}
      >
        {session?.user ? "Dashboard" : "Start now for free!"}
      </Link>

      {session && <Button onClick={() => SignOut()}>Logout </Button>}
    </div>
  );
};

export default CallToAction;
