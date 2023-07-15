"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { BsBell, BsBarChart, BsDot, BsHouseCheck } from "react-icons/bs";
import { MdOutlineTipsAndUpdates, MdLogout } from "react-icons/md";
import Image from "next/image";
import Switcher from "../mode/Switcher";
// import Breadcrumbs from "./Breadcrumbs";
import profileImage from "../../../public/assets/avatar01.png";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar, isSidebarOpen }: NavbarProps) => {
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
  const [pathName, setPathName] = useState("");

  const profileDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  };

  const logoutHandler = () => {
    // signOut();
    console.log("logout");
  };

  const pathname = usePathname();

  useEffect(() => {
    setPathName(pathname);
  }, [setPathName, pathname]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        profileDropdownRef.current &&
        // @ts-ignore
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropDownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex flex-col gap-2 cursor-pointer mt-4 text-gray-600 lg:w-[65%] w-[90%]">
      <div className="navbar flex justify-between items-center px-4 py-2 bg-white border border-sm rounded-lg">
        <div className="flex items-center justify-around gap-6">
          <RiMenuUnfoldFill
            size={18}
            onClick={() => {
              toggleSidebar();
            }}
            className={`block lg:hidden`}
          />
          <Switcher />
        </div>
        <div className="flex items-center justify-around gap-6">
          <BsHouseCheck size={18} />
          <BsBarChart size={18} />
          <div className="relative">
            <span className="absolute rounded-full h-3 w-3 bg-blue-500 border-2 border-white -top-2 -right-1"></span>
            <BsBell size={18} />
          </div>
          <div className="relative" ref={profileDropdownRef}>
            <span className="absolute rounded-full h-3 w-3 bg-green-500 border-2 border-white right-0 bottom-0"></span>
            <Image
              src={profileImage}
              height={35}
              width={35}
              alt="Image"
              className="rounded-full cursor-pointer"
              onClick={() => {
                toggleDropdown();
              }}
            />
            {isProfileDropDownOpen && (
              <motion.div
                initial={{ x: 20, y: -10, scale: 0.8 }}
                animate={{ x: 0, y: 0, scale: 1 }}
                transition={{
                  duration: 0.4,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg py-2 w-[200px]"
              >
                <div className="flex items-center gap-4 px-4 py-2">
                  <Image
                    src={profileImage}
                    height={35}
                    width={35}
                    alt="Image"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm">John Doe</p>
                    <p className="text-gray-500 text-xs">Software Engineer</p>
                  </div>
                </div>
                <hr className="border-gray-300" />
                <div
                  onClick={logoutHandler}
                  className="px-4 py-2 text-sm hover:text-red-700 flex items-center gap-2 text-gray-600"
                >
                  <MdLogout size={20} className="inline-block mr-2" />
                  Logout
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
