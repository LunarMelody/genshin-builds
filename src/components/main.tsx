import { FC, ReactNode } from "react";
import { cn } from "@/utils/cn.ts";

interface MainProps {
  className?: string;
  children?: ReactNode | undefined;
}

export const Main: FC<MainProps> = ({ children, className }) => {
  const classes = cn(className, "grid-area-[main] flex flex-col");

  return <main className={classes}>{children}</main>;
};
