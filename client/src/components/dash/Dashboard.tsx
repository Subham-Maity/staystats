"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAllBookingsAsync,
  selectAllbookings,
} from "@/lib/features/bookingSlice";
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

import RevenueChart from "@/components/dash/Templates/AreaChart";
import { BookingData } from "@/lib/Types/Dashboard/types";
const Dashboard = () => {
  const dispatch = useDispatch();
  const totalRevenue = 26206;
  const AverageRevenue = 845;
  const [area, setArea] = useState("Revenue");
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
  const bookingData: BookingData[] = useSelector(selectAllbookings);
  const createdAt = bookingData.map((item: any) => item.createdAt);
  const advanceAmount = bookingData.map((item: any) => item.advanceAmount);
  const merged = createdAt.map((item: any, i: any) => ({
    createdAt: createdAt[i],
    advanceAmount: advanceAmount[i],
  }));

  const handleAreaDataChange = (newChart: any) => {
    setArea(newChart);
  };

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
          <div className="flex gap-5 justify-start">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
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
          <>
            <RevenueChart data={merged} />
          </>
          <div className="flex justify-evenly">
            <div>
              <h1 className="text-4xl font-semibold mb-2">
                INR {totalRevenue}
              </h1>
              Total Revenue
            </div>

            <div>
              <h1 className="text-4xl font-semibold mb-2">
                INR {AverageRevenue}
              </h1>
              Average Revenue Per Day
            </div>
          </div>
        </SimpleAreaChartWrapper>
      </div>
    </>
  );
};

export default Dashboard;
