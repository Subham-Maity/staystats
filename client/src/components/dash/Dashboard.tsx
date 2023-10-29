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
import ChartSelector from "@/components/dash/Templates/ChartSelector";

const Dashboard = () => {
  const dispatch = useDispatch();
  const totalRevenue = 26206;
  const AverageRevenue = 845;

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

        <SimpleAreaChartWrapper className="h-50">
          {/*// Select // Arachart //calculation*/}
          <h1 className="text-4xl font-semibold mb-4">Last 30 days</h1>
          <ChartSelector/>


          <div className="flex justify-end w-50">
            <p className="flex items-center mb-2 mr-4">
              <span className="w-2 h-2 mr-2 bg-blue-500 rounded-full"></span>
              <span>Last 30 days</span>
            </p>
            <p className="flex items-center mb-2">
              <span className="w-2 h-2 mr-2 bg-red-500 rounded-full"></span>
              <span>Last Year</span>
            </p>
          </div>

          //chart
          <>


          </>


          <div className="flex justify-evenly">
            <div>
              <h1 className="text-4xl font-semibold mb-2">INR {totalRevenue}</h1>
              Total Revenue
            </div>

            <div>
              <h1 className="text-4xl font-semibold mb-2">INR {AverageRevenue}</h1>
              Average Revenue Per Day
            </div>
          </div>




        </SimpleAreaChartWrapper>
      </div>
    </>
  );
};

export default Dashboard;
