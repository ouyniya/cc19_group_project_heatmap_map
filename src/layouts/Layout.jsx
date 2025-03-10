import React from "react";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <div className="w-[700px] h-[700px]">
        <Outlet />
        <h1>lorem</h1>
      </div>
    </>
  );
}

export default Layout;
