'use client'

import React, { useState } from 'react'
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/navbar/Sidebar";

type Props = {}

const DefaultLayout = ({children}: any) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      console.log("toggle sidebar");
      setIsSidebarOpen(!isSidebarOpen);
    };
  
  return (
    <div className="flex">
    <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <div className="flex flex-col justify-start items-center w-full">
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="w-[90%]">{children}</div>
    </div>
  </div>
  )
}

export default DefaultLayout