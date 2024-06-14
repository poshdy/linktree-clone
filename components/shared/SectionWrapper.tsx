import { cn } from "@/lib/utils";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
const SectionWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <Card className={cn("text-neutral-200 p-4 rounded-2xl bg-[#282828]",className)}>
      {children}
    </Card>
  );
};

export default SectionWrapper;
