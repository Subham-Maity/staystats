"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/navbar/Sidebar";
import LoginForm from "@/components/login";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";

type Props = {};

const DefaultLayout = ({ children }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    console.log("toggle sidebar");
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // @ts-ignore

    let user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user);
    if (!user) {
    }
    if (user && user._id) {
      setUser(user);
      setLoading(false);
    }else{
      setLoading(false);
    }
  }, []);
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {/* @ts-ignore */}
      {user && user._id ? (
        <div className="flex">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          <div className="flex flex-col justify-start items-center w-full">
            <Navbar
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
            <div className="lg:w-[90%] w-[90%] 2xl:w-[65%]">{children}</div>
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default DefaultLayout;
