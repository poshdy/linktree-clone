import Container from "@/components/shared/Container";
import React from "react";
import Link from "next/link";
type Props = {};

const NavBar = (props: Props) => {
  return (
    <header className="mt-6 mx-auto w-[90%]">
      <nav className="flex items-center justify-between shadow-xl text-black bg-white rounded-full p-6 ">
        <Link
          className="leading-tight tracking-tighter font-bold text-2xl md:text-3xl"
          href={"/"}
        >
          Reach me!
        </Link>
        <div className="flex items-center gap-x-2">
          <Link
            className="text-md rounded-2xl p-3 md:p-5 text-sm hover:bg-gray-400 duration-300 ease-in-out bg-gray-300 text-black"
            href={"auth"}
          >
            Login
          </Link>
          <Link
            className="text-md rounded-2xl p-3 md:p-5 text-sm hover:bg-dark duration-300 ease-in-out  bg-blue text-white"
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
