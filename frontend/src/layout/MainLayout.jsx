import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="flex ">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="ml-64 mt-16 w-full h-[calc(100vh-4rem)] overflow-y-auto p-4 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </>
  );
}
