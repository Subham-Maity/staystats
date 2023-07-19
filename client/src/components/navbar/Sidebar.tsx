"use client";
import Link from "next/link";
import React, { useDeferredValue, useEffect } from "react";
import { useState } from "react";
import { FaHome, FaRocket, FaBars } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { RiMailFill, RiSettings5Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(isSidebarOpen);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setIsNavOpen(isSidebarOpen);
  }, [isSidebarOpen]);

  const navHoverEffect = () => {
    if(isSidebarOpen){
      return;
    }
    setHover(!hover);
  };
  return (
    <header
    className={`lg:block h-screen text-slate-700 max-w-[300px] z-50 ${
      isSidebarOpen ? "md:fixed sm:fixed lg:block" : "hidden"
    }`}
  >
    {isSidebarOpen && (
      <div
        className="fixed lg:hidden inset-0 bg-black opacity-50 z-40"
        onClick={toggleSidebar}
      />
    )}
    <nav
      onMouseEnter={navHoverEffect}
      onMouseLeave={navHoverEffect}
      className={`fixed w-auto h-screen dark:bg-inherit bg-slate-100 z-50 ${
        !isNavOpen && !hover
          ? "hover:w-[300px] transition-width ease-in-out duration-300 hover:shadow-xl"
          : "min-w-[300px] hover:shadow-lg"
      }`}>
        <div className="w-full flex items-center justify-between my-4 p-4 gap-2 font-semibold h-16">
          <span className={`${!isNavOpen && !hover && "hidden"} text-xl font-bold`}>Stay Stats</span>
          <span
            className="cursor-pointer"
            onClick={() => {
              console.log("toggle sidebar");
              toggleSidebar();
            }}
          >
            <FaBars size={20} />
          </span>
        </div>
        <div className="flex flex-col items-center justify-between h-screen w-full">
          <ul className=" w-full px-2 flex flex-col gap-4 font-semibold">
            <Link href="/">
            <li
              className={`flex items-center justify-start gap-2 p-2 hover:cursor-pointer  ${
                pathname === "/"
                  ? "bg-slate-300 text-primary hover:none"
                  : "hover:bg-slate-300"
              } rounded-xl`}
            >
              <FaHome size={20} />{" "}
              <p className={`text-sm ${!isNavOpen && !hover && "hidden"}`}>
                Home
              </p>
            </li>
            </Link>
            <Link href="/users">
            <li

              className={`flex items-center justify-start gap-2 p-2 hover:cursor-pointer ${
                pathname === "/users"
                  ? "bg-slate-300 text-primary"
                  : "hover:bg-slate-300"
              } rounded-xl`}
            >
              <HiUserGroup size={20} />{" "}
              <p className={`text-sm ${!isNavOpen && !hover && "hidden"}`}>
                Users
              </p>
            </li>
            </Link>
            <Link href="/hotels">
            <li

              className={`flex items-center justify-start gap-2 p-2 hover:cursor-pointer ${
                pathname === "/hotels"
                  ? "bg-slate-300 text-primary"
                  : "hover:bg-slate-300"
              } rounded-xl`}
            >
              <FaHome size={20} />{" "}
              <p className={`text-sm ${!isNavOpen && !hover && "hidden"}`}>
                Hotels
              </p>
            </li>
            </Link>
            <Link href="/bookings">
            <li

              className={`flex text-center items-center justify-start gap-2 p-2 hover:cursor-pointer ${
                pathname === "/bookings"
                  ? "bg-slate-300 text-primary"
                  : "hover:bg-slate-300"
              } rounded-xl`}
            >
              <RiMailFill size={20} />{" "}
              <p className={`text-sm ${!isNavOpen && !hover && "hidden"}`}>
                Bookings
              </p>
            </li>
            </Link>
          </ul>
          <div className="absolute bottom-10 w-full px-2 font-semibold">
            <li

              className={`flex  items-center justify-start gap-2 p-2 hover:cursor-pointer ${
                pathname === "settings"
                  ? "bg-white text-primary"
                  : "hover:bg-slate-300"
              } rounded-xl`}
            >
              <RiSettings5Fill size={20} />{" "}
              <p className={`text-sm ${!isNavOpen && !hover && "hidden"}`}>
                Settings
              </p>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Sidebar;