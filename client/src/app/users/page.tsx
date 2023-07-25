"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Table from "@/components/Table/Table";
import InputEmp from "@/components/card/InputEmp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "@/utils/axios";
import { FaPlus } from "react-icons/fa";
import { fetchOwner } from "@/utils";

const Users = () => {
  let router = useRouter();
  const [owner, setOwner] = useState<any>({});
  const [accountType, setAccountType] = useState<string>("");
  const [userData, setUserData] = useState<any>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem("user") || "{}")?._id;
    let updateUser = async () => {
      const user = await fetchOwner(userId);
      if (user && user._id) {
        setOwner(user);
        localStorage.setItem("user", JSON.stringify(user));
        setAccountType(user?.role);
      } else {
        toast.error("You are not authorized to view this page");
        localStorage.removeItem("user");
        router.replace("/login");
      }
    };
    updateUser();
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

  const deleteUserHandler = async (id: string) => {
    try {
      const { data } = await axios.post(`/user/delete-user`, {
        id,
      });
      if (!data.error) {
        toast.success(data.message);
        const { data: users } = await axios.get("/user/get-users");
        if (!data.error) {
          setUserData(users.users);
        } else {
          toast.error(data.error);
        }
      } else {
        toast.error(data.error);
      }
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex w-full flex-col justify-center gap-4 items-center overflow-hidden">
        <div className="flex w-full justify-between mt-6">
          <h1 className="text-2xl font-bold">User Details</h1>
          <button
            onClick={() => setShowModal(true)}
            type="submit"
            className=" flex  gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaPlus size={20} />
            <p>Add User</p>
          </button>
        </div>
        <div className="flex w-full">
          <Table userData={userData} setUserData={setUserData} deleteUserHandler={deleteUserHandler} owner={owner} />
        </div>
        <ToastContainer
          theme="dark"
          position="bottom-center"
          autoClose={10000}
        />
      </div>
      {showModal && (
        <div className="w-screen bg-black/50 h-screen absolute top-0 left-0 flex justify-center items-center overflow-hidden">
          {accountType === "ADMIN" && (
            <InputEmp
              onClose={(value) => setShowModal(value)}
              setUserData={setUserData}
            />
          )}
        </div>
      )}

    </>
  );
};

export default Users;
