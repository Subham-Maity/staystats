"use client";
import React, { useState, useEffect } from "react";
import Table from "@/components/Table/Table";
import InputEmp from "@/components/card/InputEmp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "@/utils/axios";

const Users = () => {
  const [user, setUser] = useState<any>({});
  const [accountType, setAccountType] = useState<string>("");
  const [userData, setUserData] = useState<any>([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(user);
    setAccountType(user?.role);
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get("/user/get-users");
        console.log(data);
        if (!data.error) {
          setUserData(data.users);
        } else {
          toast.error(data.error);
        }
      } catch (error: any) {
        toast.error(error.message);
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="flex w-full flex-col justify-center gap-4 items-center">
      <h1 className="text-2xl font-bold">User Details</h1>
      <div className="flex w-full">
        <Table userData={userData} />
      </div>
      {accountType === "ADMIN" && <InputEmp setUserData={setUserData} />}
      <ToastContainer theme="dark" position="bottom-center" autoClose={10000} />
    </div>
  );
};

export default Users;
