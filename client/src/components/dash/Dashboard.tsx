"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAllBookingsAsync } from "@/lib/features/bookingSlice";
import { fetchAllUsersAsync } from "@/lib/features/userSlice";
import { fetchAllHotelsAsync } from "@/lib/features/hotelSlice";

import Checkin from "@/components/dash/Templates/Checkin";
import Checkout from "@/components/dash/Templates/Checkout";
import TodaysBooking from "@/components/dash/Templates/TodaysBooking";
import TodaysModifiedBooking from "@/components/dash/Templates/TodaysModifiedBooking";
import TodaysCancelledBooking from "@/components/dash/Templates/TodaysCancelledBooking";
import TotalUsers from "@/components/dash/Templates/TotalUsers";
import TotalRevenue from "@/components/dash/Templates/TotalRevenue";
import TotalDue from "@/components/dash/Templates/TotalDue";
import TotalHotels from "@/components/dash/Templates/TotalHotels";
import SimpleAreaChartWrapper from "@/components/dash/Components/Wrapper/SimpleAreaChartWrapper";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchAllBookingsAsync())
      .then(() => {
        console.log("fetchAllProductsAsync dispatched successfully");
      })
      .catch((error: any) => {
        console.error("Error dispatching fetchAllProductsAsync:", error);
      });
  }, []);

  return (
    <>
      <div>
        <div className="grid p-2 space-x-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          <Checkin />
          <Checkout />
          <TodaysBooking />
          <TodaysModifiedBooking />
          {/*<TodaysCancelledBooking/>*/}
          {/*<TotalUsers/>*/}
          {/*<TotalRevenue/>*/}
          {/*<TotalDue/>*/}
          {/*<TotalHotels/>*/}
        </div>

        <SimpleAreaChartWrapper>
          // Select // Arachart //calculation
        </SimpleAreaChartWrapper>
      </div>
    </>
  );
};

export default Dashboard;
