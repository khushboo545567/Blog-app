import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar className="w-[30%] h-100vh h-100%" />
        <Outlet className="w-[90%]" />
      </div>
    </>
  );
}
