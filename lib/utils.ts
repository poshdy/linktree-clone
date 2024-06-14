import { Decimal } from "@prisma/client/runtime/library";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FormattedPrice = (price: number) => {
  const number = Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(price);
  return number;
};
