import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Authentiation",
  description: "Linktree clone (just for practicing purposes)",
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-dark`}>
        <h3 className=""></h3>
        {children}
      </body>
    </html>
  );
}
