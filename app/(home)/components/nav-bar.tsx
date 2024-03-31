import Container from "@/components/shared/Container";
import React from "react";
import Link from "next/link";
type Props = {};

const NavBar = (props: Props) => {
  return (
    <header className="mt-6 mx-auto w-[90%]">
      <nav className="flex items-center justify-between text-black bg-white rounded-full p-6 shadow-md">
        <Link
          className="leading-tight tracking-tighter font-bold  text-3xl"
          href={"/"}
        >
          Reach me!
        </Link>
        <div className="flex items-center gap-x-2">
          <Link
            className="text-md rounded-2xl p-5 hover:bg-gray-400 duration-300 ease-in-out bg-gray-300 text-black"
            href={"auth"}
          >
            Login
          </Link>
          <Link
            className="text-md rounded-2xl p-5 hover:bg-violet-950 duration-300 ease-in-out  bg-violet-900 text-white"
            href={"auth"}
          >
            Sign up Free
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
