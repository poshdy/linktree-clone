"use client";
import React from "react";
import Logo from "@/components/shared/logo";
import { NavItems } from "@/constants";
import NavItem from "./nav-items";

const SideBar = () => {
  return (
    <aside className="hidden border-r w-full bg-neutral-800 md:block space-y-4 relative">
      <div className="flex h-full max-h-screen flex-col gap-2 fixed  w-[280px]">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Logo />
        </div>
        <div className="flex-1 pt-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-5">
            {NavItems?.map((item) => (
              <NavItem key={item?.href} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
