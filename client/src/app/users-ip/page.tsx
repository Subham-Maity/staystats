"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import Table from "@/components/Table/Table";
import InputEmp from "@/components/card/InputEmp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "@/utils/axios";
import { FaPlus, FaTimes } from "react-icons/fa";
import { fetchOwner } from "@/utils";
import ViewUser from "@/components/card/ViewUsers";
import { BiLink, BiSearch } from "react-icons/bi";
import { FcNext, FcPrevious } from "react-icons/fc";
import { CiSquareRemove } from "react-icons/ci";
import { SiMicrosoftexcel } from "react-icons/si";
import { utils, writeFile } from "xlsx";
import { FRONTEND_URL } from "@/constants/constant";
import EditUser from "@/components/card/EditUser";
import ActivityTable from "@/components/Table/ActivityTable";

const Activities = () => {
  let router = useRouter(); // {users: [], usersCount: 0}
  const [owner, setOwner] = useState<any>({});
  const [accountType, setAccountType] = useState<string>("");
  const [activityData, setActivityData] = useState<any>([]);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem("user") || "{}")?._id;
    let updateUser = async () => {
      const user = await fetchOwner(userId);

      if (user.role !== "ADMIN") {
        window.location.href = "/bookings";
      }
      if (user && user._id && user.isActive) {
        setOwner(user);
        localStorage.setItem("user", JSON.stringify(user));
        setAccountType(user?.role);
      } else {
        toast.error("You are not authorized to view this page");
        localStorage.removeItem("user");
        window.open(`${FRONTEND_URL}/login`, "_self");
      }
    };
    updateUser();
  }, []);

  useEffect(() => {
    const getActivities = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/get-all-activities`);
        // console.log(data);
        if (!data.error) {
          setActivityData(data.activities);
        } else {
          toast.error(data.error);
        }
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        toast.error(error.message);
        console.log(error);
      }
    };

    getActivities();
  }, []);

  return (
    <>
      <div className="flex w-full flex-col justify-center gap-4 items-center overflow-hidden">
        <div className="flex w-full">
          <ActivityTable
            activityData={activityData}
            owner={owner}
            loading={loading}
          />
        </div>
        <ToastContainer
          theme="dark"
          position="bottom-center"
          autoClose={10000}
        />
      </div>
    </>
  );
};

export default Activities;
