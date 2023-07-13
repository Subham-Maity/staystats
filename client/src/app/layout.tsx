"use client"

import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/navbar/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Providers from "@/app/providers";
import ThemeSwitcher from "@/components/mode/Switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stay Stats",
  description: "Store Your Internal Data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
  );
}
