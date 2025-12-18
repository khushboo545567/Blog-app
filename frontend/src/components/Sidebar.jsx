import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="
        fixed top-16 left-0
        w-64 h-[calc(100vh-4rem)]
        bg-green-500 dark:bg-gray-800
        text-white p-4
      "
    >
      <h2 className="text-lg font-semibold">Sidebar</h2>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Sidebar;
