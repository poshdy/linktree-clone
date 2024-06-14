"use client";
import React from "react";
import { Button } from "./forms";
import { IconType } from "react-icons/lib";
import { CheckCircle2, LucideIcon, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { HookActionStatus } from "next-safe-action/hooks";
type ButtonProps = {
  title?: string;
  Icon?: IconType | LucideIcon;
  className?: string;
  type?: "update" | "create";
  status?: HookActionStatus;
  variant?:
    | "default"
    | "destructive"
    | "action"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
};

const SubmitButton = ({
  Icon,
  title,
  className,
  type,
  status,
  variant = "default",
}: ButtonProps) => {
  return (
    <Button className={cn("", className)} type="submit" variant={variant}>
      {status == "executing" ? <LoadingSpinner /> : <Display Icon={Icon} title={title} />}
    </Button>
  );
};

export default SubmitButton;

export const LoadingSpinner = () => {
  return (
    <div
      className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    ></div>
  );
};

const Display = ({ title, type }: ButtonProps) => {
  let content = title ? (
    title
  ) : type == "create" ? (
    <Plus className={"w-5 h-5"} />
  ) : (
    <CheckCircle2 className={"w-5 h-5"} />
  );
  return <>{content}</>;
};
