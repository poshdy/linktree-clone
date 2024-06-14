"use client";
import React from "react";
import { IconType } from "react-icons/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
type NavProps = {
  item: {
    name: string;
    href: string;
    icon: IconType;
  };
};

const NavItem = ({ item }: NavProps) => {
  const pathname = usePathname();

  return (
    <Link
      className={`flex md:flex-row flex-col w-full px-4 py-2 items-center hover:border-l-4 hover:border-l-blue hover:text-blue duration-200 ease-in-out gap-4 text-sm font-semibold  ${
        pathname.includes(item?.href)
          ? "text-blue bg-gray-300 rounded-lg  border-l-4  border-l-blue "
          : "text-neutral-400-500"
      }`}
      key={item?.href}
      href={item?.href}
    >
      {item?.icon && <item.icon className="w-4 h-4" />}

      {item.name}
    </Link>
  );
};

export default NavItem;
