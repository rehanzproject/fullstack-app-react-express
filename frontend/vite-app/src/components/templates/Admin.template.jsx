import React from "react";
import SideBarAdmin from "../organism/SideBarAdmin/SideBarAdmin.organism";
import TopBarAdmin from "../organism/TopBarAdmin/TopBarAdmin.organism";
import { Outlet } from "react-router-dom";

function AdminTemplate() {
  return (
    <div className="flex">
      <SideBarAdmin />
      <div className="flex flex-col w-full">
        <TopBarAdmin />
        <div className="bg-gray-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminTemplate;
