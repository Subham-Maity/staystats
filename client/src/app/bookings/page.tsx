"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BookingTable from "@/components/Table/BookingTable";
import axios from "@/utils/axios";
import { ToastContainer, toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import InputBooking from "@/components/card/inputBooking";
import { fetchOwner } from "@/utils";

const Bookings = () => {
  let router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [bookingData, setBookingData] = useState<any>([]);
  const [user, setUser] = useState<any>({});
  const [accountType, setAccountType] = useState<string>("");

  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem("user") || "{}")?._id;
    let updateUser = async () => {
      const user = await fetchOwner(userId);
      if (user && user._id) {
        setUser(user);
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
    const getBookings = async () => {
      try {
        const { data } = await axios.get("/booking/get-all-bookings");
        console.log(data);
        if (!data.error) {
          setBookingData(data.bookings);
        } else {
          toast.error(data.error);
        }
      } catch (error: any) {
        toast.error(error.message);
        console.log(error);
      }
    };
    getBookings();
  }, []);

  return (
    <div className="flex w-full flex-col justify-center gap-4 items-center">
      <div className="flex w-full justify-between mt-6">
        <h1 className="text-2xl font-bold">Booking Details</h1>
        <button
          onClick={() => setShowModal(true)}
          type="submit"
          className="flex gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FaPlus size={20} />
          <p>Add Booking</p>
        </button>
      </div>
      <div className="flex w-full">
        <BookingTable bookingData={bookingData} />
      </div>
      <ToastContainer theme="dark" position="bottom-center" autoClose={10000} />
      {showModal && (
        <div className="w-screen bg-black/50 h-screen absolute top-0 left-0 flex justify-center items-center overflow-hidden">
          {(accountType === "ADMIN" || accountType === "SUBADMIN" ) && (
            <InputBooking
              user={user}
              setBookingData={setBookingData}
              onClose={(value) => setShowModal(value)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Bookings;
