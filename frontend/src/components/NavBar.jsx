import React from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
import useTheme from "../context/ThemeContext";

const Navbar = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  return (
    <nav
      className="fixed top-0 left-0 w-full h-16 
      bg-blue-600 dark:bg-gray-900 
      text-white flex items-center justify-between px-4 z-50"
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <i className="ri-menu-line text-3xl cursor-pointer"></i>
        <Link to="/">
          <i className="ri-remix-fill text-3xl"></i>
        </Link>

        <div className="flex items-center bg-white text-black rounded-md px-3 py-1">
          <i className="ri-search-line text-gray-500"></i>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-2 text-sm"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* THEME TOGGLE */}
        <button
          onClick={themeMode === "light" ? darkTheme : lightTheme}
          className="text-3xl"
        >
          {themeMode === "light" ? (
            <i className="ri-moon-fill"></i>
          ) : (
            <i className="ri-sun-fill"></i>
          )}
        </button>

        <button className="bg-blue-500 px-3 py-1 text-xl rounded-md hover:bg-blue-700">
          <Link to="/login">Login</Link>
        </button>
        <button className="bg-blue-500 px-3 py-1 text-xl rounded-md hover:bg-blue-700">
          <Link to="/register">Signup</Link>
        </button>
        <button className="bg-amber-500 px-3 py-1 text-xl rounded-md hover:bg-amber-600 text-black">
          <Link to="/post">Post</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
