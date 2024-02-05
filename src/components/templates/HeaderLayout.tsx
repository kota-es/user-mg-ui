import { memo, FC } from "react";
import { Header } from "../organisms/layout/Header";
import { Outlet } from "react-router-dom";

type Props = {};

export const HeaderLayout: FC<Props> = memo((props) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
});
