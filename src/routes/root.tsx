import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/header.tsx";

export const Root: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
