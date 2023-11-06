"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import {
  fetchAllBookingsAsync,
  selectAllbookings,
} from "@/lib/features/bookingSlice";

import Checkin from "@/components/dash/Templates/TopBox/Checkin";
import Checkout from "@/components/dash/Templates/TopBox/Checkout";
import TodaysBooking from "@/components/dash/Templates/TopBox/TodaysBooking";
import TodaysModifiedBooking from "@/components/dash/Templates/TopBox/TodaysModifiedBooking";
import TotalUsers from "@/components/dash/Templates/TopBox/TotalUsers";
import TotalDue from "@/components/dash/Templates/TopBox/TotalDue";
import TotalHotels from "@/components/dash/Templates/TopBox/TotalHotels";
import RevenueChart from "@/components/dash/Templates/MiddleBox/AreaChartRevBookDate";
import { BookingData } from "@/lib/Types/Dashboard/types";
import RevenueCheckinAreaChart from "@/components/dash/Templates/MiddleBox/AreaChartRevCheckinDate";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import AreaChartBookingBookingDate from "@/components/dash/Templates/MiddleBox/AreaChartBookingBookingDate";
import AreaChartBookingCheckinDate from "@/components/dash/Templates/MiddleBox/AreaChartBookingCheckinDate";
import { subDays } from "date-fns";
import RevenueBarChartRBT from "@/components/dash/Templates/BottomBox/OtaPerformance/RevenueTime/BarChartBAT";
import RevenueBarChartBATW from "@/components/dash/Templates/BottomBox/OtaPerformance/RevenueTime/BarChartBATW";
import RevenueBarChartBATLW from "@/components/dash/Templates/BottomBox/OtaPerformance/RevenueTime/BarChartBATLW";
import RevenueBarChartBATM from "@/components/dash/Templates/BottomBox/OtaPerformance/RevenueTime/BarChartBATM";
import RevenueBarChartBATY from "@/components/dash/Templates/BottomBox/OtaPerformance/RevenueTime/BarChartBATY";
import RevenueBarChartBATLY from "@/components/dash/Templates/BottomBox/OtaPerformance/RevenueTime/BarChartBATLY";
import BookingCountBarChartBCT from "@/components/dash/Templates/BottomBox/OtaPerformance/BookingTime/BarChartBCT";
import BookingCountBarChartBCTW from "@/components/dash/Templates/BottomBox/OtaPerformance/BookingTime/BarChartBCTW";
import BookingCountBarChartBCTLW from "@/components/dash/Templates/BottomBox/OtaPerformance/BookingTime/BarChartBCTLW";
import BookingCountBarChartBCTM from "@/components/dash/Templates/BottomBox/OtaPerformance/BookingTime/BarChartBCTM";
import BookingCountBarChartBCTLM from "@/components/dash/Templates/BottomBox/OtaPerformance/BookingTime/BarChartBCTLM";
import BookingCountBarChartBCTLY from "@/components/dash/Templates/BottomBox/OtaPerformance/BookingTime/BarChartBCTLY";
import BookingCountBarChartBCTY from "@/components/dash/Templates/BottomBox/OtaPerformance/BookingTime/BarChartBCTY";
import RevenueBarChartBATLM from "@/components/dash/Templates/BottomBox/OtaPerformance/RevenueTime/BarChartBATLM";

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();
  const [totalRevenuerbcd, setTotalRevenuerbcd] = useState(0);
  const [totalRevenuerbdb, setTotalRevenuerbdb] = useState(0);
  const [totalRevenuebbbd, setTotalRevenuebbbd] = useState(0);
  const [totalRevenuebbcd, setTotalRevenuebbcd] = useState(0);

  const [area, setArea] = useState("Revenue");
  const [date, setDate] = useState("byBookingDate");
  const [BookingOrRevenue, setBookingOrRevenue] = useState("Revenue");
  const [day, setDay] = useState("0");

  useEffect(() => {
    dispatch(fetchAllBookingsAsync())
      .then(() => {
        console.log("fetchAllProductsAsync dispatched successfully");
      })
      .catch((error: any) => {
        console.error("Error dispatching fetchAllProductsAsync:", error);
      });
  }, []);
  const bookingData: BookingData[] = useSelector(selectAllbookings);

  //Revenue and Booking
  const createdAt = bookingData.map((item: any) => item.createdAt);
  const advanceAmount = bookingData.map((item: any) => item.advanceAmount);

  //Revenue and Checkin
  const checkInDate = bookingData.map((item: any) => item.checkInDate);
  const bookingAmount = bookingData.map((item: any) => item.bookingAmount);
  //Booking and Booking
  const bookingCount = bookingData.map(
    (item: any) => item.bookingAmount.length,
  );
  const bookingDate = bookingData.map((item: any) => item.createdAt);
  const revenueAndBooking = createdAt.map((item: any, i: any) => ({
    createdAt: createdAt[i],
    advanceAmount: advanceAmount[i],
  }));

  const revenueAndCheckin = advanceAmount.map((item: any, i: any) => ({
    checkInDate: checkInDate[i],
    bookingAmount: bookingAmount[i],
  }));

  const bookingAndBooking = bookingCount.map((item: any, i: any) => ({
    createdAt: bookingDate[i],
    bookingAmount: bookingCount[i],
  }));

  const bookingAndCheckin = bookingCount.map((item: any, i: any) => ({
    checkInDate: checkInDate[i],
    bookingAmount: bookingCount[i],
  }));

  //✅ Bottom-> Ota Performance
  //❗Booking , Booking Count, Amount -> (Today , This Week , Previous Week , This Month , Previous Month , This Year , Previous Year)
  const bookingSource = bookingData.map((item: any) => item.bookingSource);

  const bookingAmountBar = bookingData.map((item: any) => item.bookingAmount);

  const createdDate = bookingData.map((item: any) => item.createdAt);

  const totalBookingCount = bookingAmountBar.reduce(
    (a: any, b: any) => a + b,
    0,
  );

  //✔️ Combine

  const bookingAndAmountToday = bookingSource.map((item: any, i: any) => ({
    bookingSource: bookingSource[i],
    bookingAmount: bookingAmountBar[i],
    createdAt: createdDate[i],
  }));

  //❗Booking , Amount , This Week

  const handleAreaChange = (newArea: any) => {
    setArea(newArea);
  };

  const handleDateChange = (newDate: any) => {
    setDate(newDate);
  };

  const handleDayChange = (newDay: any) => {
    setDay(newDay);
  };

  useEffect(() => {
    const thirtyDaysAgo = subDays(new Date(), 30);
    const last30DaysRevenueData = revenueAndBooking.filter(
      (dataPoint) => new Date(dataPoint.createdAt) >= thirtyDaysAgo,
    );
    const totalRevenueLast30Days: number = last30DaysRevenueData.reduce(
      (total, dataPoint) => {
        return total + parseFloat(dataPoint.advanceAmount);
      },
      0,
    );

    const averageRevenue =
      totalRevenueLast30Days / last30DaysRevenueData.length;

    setTotalRevenuerbcd(totalRevenueLast30Days);
  });

  useEffect(() => {
    const thirtyDaysAgo = subDays(new Date(), 30);

    const revenueAndBooking = bookingData.map((item: any, i: any) => ({
      checkInDate: item.checkInDate,
      advanceAmount: item.advanceAmount,
    }));
    console.log(revenueAndBooking, "revenueAndBooking");
    const last30DaysRevenueData = revenueAndBooking.filter(
      (dataPoint) => new Date(dataPoint.checkInDate) >= thirtyDaysAgo,
    );
    console.log(last30DaysRevenueData, "last30DaysRevenueData");

    const totalRevenueLast30Days: number = last30DaysRevenueData.reduce(
      (total, dataPoint) => {
        return total + parseFloat(dataPoint.advanceAmount);
      },
      0,
    );

    const averageRevenue =
      totalRevenueLast30Days / last30DaysRevenueData.length;

    setTotalRevenuerbdb(totalRevenueLast30Days);
  });

  useEffect(() => {
    const thirtyDaysAgo = subDays(new Date(), 30);

    // Filter bookings based on check-in date (checkInDate)
    const last30DaysRevenueDataBBBD = bookingData.filter(
      (booking: BookingData) => new Date(booking.checkInDate) >= thirtyDaysAgo,
    );

    // Calculate total revenue based on booking amount
    const totalRevenuebbbd = last30DaysRevenueDataBBBD.reduce(
      (total, booking) => total + booking.bookingAmount,
      0,
    );

    setTotalRevenuebbbd(totalRevenuebbbd);
  }, [bookingData]);

  useEffect(() => {
    const thirtyDaysAgo = subDays(new Date(), 30);

    // Filter bookings based on booking date (createdAt)
    const last30DaysRevenueDataBBCD = bookingData.filter(
      (booking) => new Date(booking.createdAt) >= thirtyDaysAgo,
    );

    // Calculate total revenue based on booking amount
    const totalRevenuebbcd = last30DaysRevenueDataBBCD.reduce(
      (total, booking) => total + booking.bookingAmount,
      0,
    );

    setTotalRevenuebbcd(totalRevenuebbcd);
  }, [bookingData]);

  const dummyData = [
    {
      bookingSource: "Source A",
      bookingAmount: 100,
      createdAt: "2023-08-27T00:00:00.000Z",
    },
    {
      bookingSource: "Source B",
      bookingAmount: 150,
      createdAt: "2023-08-27T00:00:00.000Z",
    },
    {
      bookingSource: "Source B",
      bookingAmount: 120,
      createdAt: "2023-11-02T00:00:00.000+00:00",
    },
    {
      bookingSource: "Source B",
      bookingAmount: 130,
      createdAt: "2023-11-02T00:00:00.000+00:00",
    },
  ];

  return (
    <>
      <div>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          <Checkin />
          <Checkout />
          <TodaysBooking />
          <TodaysModifiedBooking />
          <TotalUsers />
          {/*<TodaysCancelledBooking/>*/}
          {/*<TotalRevenue/>*/}
          <TotalDue />
          <TotalHotels />
        </div>

        <TailwindWrapper className="h-50 mt-5">
          {/*// Select // Arachart //calculation*/}
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 md:text-left text-center">
            Last 30 days
          </h1>
          <div className="flex gap-5 justify-center sm:justify-start">
            <select
              id="booking"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => handleAreaChange(e.target.value)}
              value={area}
            >
              <option selected={true} value="Revenue">
                Revenue
              </option>
              <option value="Booking">Booking</option>
            </select>
            <select
              id="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => handleDateChange(e.target.value)}
              value={date}
            >
              <option selected={true} value="byBookingDate">
                By Booking Date
              </option>
              <option value="byCheckinDate">By Checkin Date</option>
            </select>
          </div>
          <div className="flex justify-center sm:justify-end w-50">
            <p className="flex items-center mb-2 mr-4">
              <span className="w-2 h-2 mr-2 bg-blue-500 rounded-full"></span>
              <span>Last 30 days</span>
            </p>
            <p className="flex items-center mb-2">
              <span className="w-2 h-2 mr-2 bg-red-500 rounded-full"></span>
              <span>Last Year</span>
            </p>
          </div>

          {area === "Revenue" && date === "byCheckinDate" && (
            <>
              <RevenueCheckinAreaChart data={revenueAndCheckin} />
              <div className="flex justify-evenly">
                <div className="text-center">
                  <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                    ₹{totalRevenuerbcd.toFixed(2)}
                  </h1>
                  Total Revenue
                </div>

                <div className="text-center">
                  <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                    ₹{(totalRevenuerbcd / 30).toFixed(2)}
                  </h1>
                  Average Revenue Per Day
                </div>
              </div>
            </>
          )}
          {area === "Revenue" && date === "byBookingDate" && (
            <>
              <RevenueChart data={revenueAndBooking} />
              <div className="flex justify-evenly">
                <div className="text-center">
                  <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                    ₹{totalRevenuerbdb.toFixed(2)}
                  </h1>
                  Total Revenue
                </div>

                <div className="text-center">
                  <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                    ₹{(totalRevenuerbdb / 30).toFixed(2)}
                  </h1>
                  Average Revenue Per Day
                </div>
              </div>
            </>
          )}

          {area === "Booking" && date === "byBookingDate" && (
            <>
              <AreaChartBookingBookingDate data={bookingAndBooking} />
              <div className="flex justify-evenly">
                <div className="text-center">
                  <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                    ₹{totalRevenuebbbd.toFixed(2)}
                  </h1>
                  Total Booking
                </div>

                <div className="text-center">
                  <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                    ₹{(totalRevenuebbbd / 30).toFixed(2)}
                  </h1>
                  Average Booking Per Day
                </div>
              </div>
            </>
          )}

          {area === "Booking" && date === "byCheckinDate" && (
            <>
              <AreaChartBookingCheckinDate data={bookingAndCheckin} />
              <div className="flex justify-evenly">
                <div className="text-center">
                  <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                    ₹{totalRevenuebbcd.toFixed(2)}
                  </h1>
                  Total Booking
                </div>

                <div className="text-center">
                  <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                    ₹{(totalRevenuebbcd / 30).toFixed(2)}
                  </h1>
                  Average Booking Per Day
                </div>
              </div>
            </>
          )}
        </TailwindWrapper>

        <TailwindWrapper className="h-50 mt-5">
          <div className="flex justify-between">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 md:text-left text-center">
              OTA Performance
            </h1>
            <div className="flex gap-5 justify-center sm:justify-start">
              <select
                id="booking"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setBookingOrRevenue(e.target.value)}
                value={BookingOrRevenue}
              >
                <option selected={true} value={"Booking"}>
                  Booking
                </option>
                <option value={"Revenue"}>Revenue</option>
              </select>
              <select
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setDay(e.target.value)}
                value={day}
              >
                <option selected={true} value="0">
                  Today
                </option>
                <option value="7">This Week</option>
                <option value="-7">Last Week</option>
                <option value="30">This Month</option>
                <option value="-30">Last Month</option>
                <option value="365">This Year</option>
                <option value="-365">Last Year</option>
              </select>
            </div>
          </div>
          <>
            {BookingOrRevenue === "Revenue" && day === "0" && (
              <RevenueBarChartRBT data={bookingAndAmountToday} />
            )}
            {BookingOrRevenue === "Revenue" && day === "7" && (
              <RevenueBarChartBATW data={bookingAndAmountToday} />
            )}
            {BookingOrRevenue === "Revenue" && day === "-7" && (
              <RevenueBarChartBATLW data={bookingAndAmountToday} />
            )}
            {BookingOrRevenue === "Revenue" && day === "30" && (
              <RevenueBarChartBATM data={bookingAndAmountToday} />
            )}
            {BookingOrRevenue === "Revenue" && day === "-30" && (
              <RevenueBarChartBATLM data={bookingAndAmountToday} />
            )}
            {BookingOrRevenue === "Revenue" && day === "365" && (
              <RevenueBarChartBATY data={bookingAndAmountToday} />
            )}
            {BookingOrRevenue === "Revenue" && day === "-365" && (
              <RevenueBarChartBATLY data={bookingAndAmountToday} />
            )}

            {BookingOrRevenue === "Booking" && day === "0" && (
              <BookingCountBarChartBCT data={bookingAndAmountToday} />
            )}
            {BookingOrRevenue === "Booking" && day === "7" && (
              <BookingCountBarChartBCTW data={bookingAndAmountToday} />
            )}
            {BookingOrRevenue === "Booking" && day === "-7" && (
              <BookingCountBarChartBCTLW data={bookingAndAmountToday} />
            )}
            {BookingOrRevenue === "Booking" && day === "30" && (
              <BookingCountBarChartBCTM data={bookingAndAmountToday} />
            )}
            {BookingOrRevenue === "Booking" && day === "-30" && (
              <BookingCountBarChartBCTLM data={bookingAndAmountToday} />
            )}
            {BookingOrRevenue === "Booking" && day === "365" && (
              <BookingCountBarChartBCTY data={bookingAndAmountToday} />
            )}
            {BookingOrRevenue === "Booking" && day === "-365" && (
              <BookingCountBarChartBCTLY data={bookingAndAmountToday} />
            )}
          </>
        </TailwindWrapper>
      </div>
    </>
  );
};

export default Dashboard;
