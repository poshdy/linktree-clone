import Container from "@/components/shared/Container";
import React from "react";
import Link from "next/link";
import { auth } from "@/auth";
import { Session } from "next-auth";
type Props = {};

const NavBar = async (props: Props) => {
  const session: Session | null = await auth();
  return (
    <header className="container pt-4 pb-6">
      <nav className="flex items-center justify-between  text-gray-400 p-2 text-lg md:text-xl ">
        <Link className="leading-tight tracking-tighter font-bold" href={"/"}>
          Reach <span className="text-white">me!</span>
        </Link>
        <div className="flex items-center text-gray-200 gap-x-2 uppercase font-bold text-xs">
          <Link
            className="px-8 py-4 rounded-full bg-blue"
            href={session?.user ? "dashboard" : "sign-up"}
          >
            {session?.user ? "dashboard" : "Create account"}
          </Link>
          <Link
            className=" rounded-3xl
            border-2
            border-dashed
            border-blue 
            px-6 py-4
            duration-300
            hover:rounded-md 
            font-bold 
            uppercase
            transition-all
            ease-in-out"
            href={"login"}
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
