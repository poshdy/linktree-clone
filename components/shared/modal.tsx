import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import Title from "./title";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
type ModalProps = {
  children: React.ReactNode;
  title: string;
  trigger?: string;
  Icon?: LucideIcon;
  className?: string;
  btnStyle: string;
  contentClassName?: string;
};

const Modal = ({
  children,
  title,
  trigger,
  Icon,
  contentClassName,
  className,
  btnStyle,
}: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger className={cn(`${btnStyle}`, className)}>
        {Icon ? <Icon className="w-5 h-5 p-0" /> : trigger}
      </DialogTrigger>
      <DialogContent
        className={cn(
          "px-6 bg-neutral-800 border-0 outline-0  rounded-3xl max-h-[70vh] text-neutral-300",
          contentClassName
        )}
      >
        <DialogTitle>
          <Title title={title} className="text-lg" />
        </DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
