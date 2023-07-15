"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/navbar/Sidebar";
import { useSession } from "next-auth/react";
import LoginForm from "@/components/login";

type Props = {};

const DefaultLayout = ({ children }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const session = useSession();

  const toggleSidebar = () => {
    console.log("toggle sidebar");
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (session.status === "unauthenticated") {
    return <LoginForm />;
  } else if (session.status === "authenticated") {
    return (
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col justify-start items-center w-full">
          <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="lg:w-[65%] w-[90%]">{children}</div>
        </div>
      </div>
    );
  }
};

export default DefaultLayout;
