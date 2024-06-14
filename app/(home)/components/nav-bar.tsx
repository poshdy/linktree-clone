import React from "react";
import Link from "next/link";
import { Session } from "next-auth";
import Logo from "@/components/shared/logo";
import CallToAction from "./call-to-action";
import { usePathname } from "next/navigation";

const NavBar = ({ session }: { session: Session | null }) => {
  return (
    <header className={"w-full pt-4 pb-6 fixed top-0 bg-transparent z-50"}>
      <nav className="w-[40%] mx-auto flex items-center justify-between rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-500 text-gray-400 p-2  ">
        <Logo />
        <div className="flex items-center gap-2">
          <Link
            className="text-sm hover:bg-black px-3 py-1 rounded-full duration-300 ease-in-out"
            href={"/"}
          >
            home
          </Link>
          <Link
            className="text-sm hover:bg-black px-3 py-1 rounded-full duration-300 ease-in-out"
            href={"/"}
          >
            pricing
          </Link>
        </div>
        <CallToAction session={session} />
      </nav>
    </header>
  );
};

export default NavBar;
