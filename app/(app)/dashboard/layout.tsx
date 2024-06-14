import SideBar from "./components/side-bar";
import Preview from "./components/preview/preview";
import { Poppins } from "next/font/google";
import { getCurrentUser } from "@/actions/shared";
import NavBar from "./components/nav-bar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Admin",
  description: "Generated by Next.js",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await getCurrentUser();
  return (
    <main
      className={`${poppins.className} grid min-h-screen w-full bg-dark overflow-hidden text-neutral-300 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]`}
    >
      <SideBar />
      <section className="flex flex-col">
        <NavBar user={user!!} />
        <div className="flex w-full md:w-[95%] mx-auto flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </div>
      </section>
      <section className="fixed right-3 bottom-3">
        <Preview />
      </section>
    </main>
  );
}
