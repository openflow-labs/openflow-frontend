import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  children: JSX.Element;
};

function ViewMoreDialog({ children }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Transaction proof:</DialogTitle>
          <DialogDescription>
            Here you will be able to check the tx proof.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col bg-red-600 w-full h-full"></div>
      </DialogContent>
    </Dialog>
  );
}

export default ViewMoreDialog;
