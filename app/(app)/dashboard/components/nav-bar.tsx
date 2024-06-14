"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Uri from "./uri";
import NavItem from "./nav-items";
import { NavItems } from "@/constants";
import { Menu } from "lucide-react";
import Logo from "@/components/shared/logo";
import { AnimatedButton } from "@/components/shared/animated-button";
import Profile from "./profile";
import { Page } from "@/types";

const NavBar = ({ user }: { user: Page }) => {
  return (
    <header className="flex h-20 items-center gap-4 border-b bg-neutral-800 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="h-7 w-7 text-white md:hidden block" />
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium space-y-5">
            <Logo />
            <div>
              {NavItems?.map((item) => (
                <NavItem key={item?.href} item={item} />
              ))}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
      <AnimatedButton
        containerClassName="flex items-center justify-center w-full"
        className=""
      >
        <Uri username={user.username} />
      </AnimatedButton>

      <Profile user={user} />
    </header>
  );
};

export default NavBar;
