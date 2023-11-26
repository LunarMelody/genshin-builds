import { FC, ReactNode } from "react";
import { cn } from "@/utils/cn.ts";

interface ContentProps {
  className?: string;
  children?: ReactNode | undefined;
}

export const Content: FC<ContentProps> = ({ children, className }) => {
  const classes = cn(className, "flex flex-col px-2 py-2 md:p-4 mx-auto max-w-[1300px] w-full");

  return <div className={classes}>{children}</div>;
};
