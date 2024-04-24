import Title from "@/components/shared/title";
import Link from "next/link";
import React from "react";
import Profile from "./profile";
import { LiaLinkSolid } from "react-icons/lia";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { IoIosAnalytics } from "react-icons/io";
import { PiShootingStarFill } from "react-icons/pi";
import { TbTopologyStar3 } from "react-icons/tb";
import { LineChart } from "lucide-react";
import { LuUnlink } from "react-icons/lu";
type Props = {
  user: string;
};

const SideBar = ({ user }: Props) => {
  return (
    <aside className="hidden col-span-1 border-r bg-white md:block rounded-xl">
      <div className="flex h-full max-h-screen flex-col gap-2 px-2 py-3">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <PiShootingStarFill className="h-7 w-7" />
            <Title className="text-base font-bold" title="Reach me!" />
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm text-gray-600 font-bold lg:px-4">
            <Link
              href="/dashboard/links"
              className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-dark"
            >
              <LuUnlink className="h-5 w-5" />
              Links
            </Link>
            <Link
              href="/dashboard/layout"
              className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary"
            >
              <TfiLayoutMediaCenterAlt className="h-5 w-5" />
              Layout
            </Link>
            <Link
              href="/dashboard/analytics"
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
            >
              <LineChart className="h-5 w-5" />
              Analytics
            </Link>
          </nav>
        </div>
        {/* <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div> */}
        <Profile user={user} />
      </div>
    </aside>
  );
};

export default SideBar;

{
  /* <aside className="border border-green-500 flex-1 flex flex-col justify-between items-start text-dark bg-white rounded-lg px-4 py-6">
<section className="space-y-4">
  <PiShootingStarFill className="w-7 h-7" />

  <div className="flex flex-col gap-2 text-lg font-semibold">
    <Link
      className="flex items-center text-sm font-semibold"
      href={"/dashboard/links"}
    >
      <LiaLinkSolid className="w-6 h-6 mr-4 " /> Links
    </Link>
    <Link href={"/dashboard/layout"}>layout</Link>
    <Link href={"/dashboard/analytics"}>Analytics</Link>
  </div>
</section>

</aside> */
}
