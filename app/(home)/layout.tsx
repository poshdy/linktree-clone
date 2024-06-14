import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Reach me!",
  description: "Linktree clone (just for practicing purposes)",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen relative bg-dark`}>
        {children}
      </body>
    </html>
  );
}
