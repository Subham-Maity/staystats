"use client";

//✅ React Imports
import React, {useEffect, useState} from "react";

//✅ Redux Imports
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/lib/redux/store";
import {
    fetchAllBookingsAsync,
    selectAllbookings,
} from "@/lib/features/bookingSlice";

//✅ Widget
import {subDays} from "date-fns";

//✅ Wrapper
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";

//✅ Types
import {BookingData} from "@/lib/Types/Dashboard/types";
//✅ Top Box Import
import TodaysCancelledBooking from "@/components/dash/Templates/TopBox/TodaysCancelledBooking";
import TotalRevenue from "@/components/dash/Templates/TopBox/TotalRevenue";
import Checkin from "@/components/dash/Templates/TopBox/Checkin";
import Checkout from "@/components/dash/Templates/TopBox/Checkout";
import TodaysBooking from "@/components/dash/Templates/TopBox/TodaysBooking";
import TodaysModifiedBooking from "@/components/dash/Templates/TopBox/TodaysModifiedBooking";
import TotalUsers from "@/components/dash/Templates/TopBox/TotalUsers";
import TotalDue from "@/components/dash/Templates/TopBox/TotalDue";
import TotalHotels from "@/components/dash/Templates/TopBox/TotalHotels";

//✅ Middle Box Import
import RevenueChart from "@/components/dash/Templates/MiddleBox/AreaChartRevBookDate";
import RevenueCheckinAreaChart from "@/components/dash/Templates/MiddleBox/AreaChartRevCheckinDate";
import AreaChartBookingBookingDate from "@/components/dash/Templates/MiddleBox/AreaChartBookingBookingDate";
import AreaChartBookingCheckinDate from "@/components/dash/Templates/MiddleBox/AreaChartBookingCheckinDate";

//✅ Bottom Box Import
//❗ OTT Performance
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

//❗ Hotel Wise
import HotelWiseRevenueBarChartRBT
    from "@/components/dash/Templates/BottomBox/HotelPerformance/RevenueTime/BarChartBAT";
import HotelWiseRevenueBarChartBATW
    from "@/components/dash/Templates/BottomBox/HotelPerformance/RevenueTime/BarChartBATW";
import HotelWiseRevenueBarChartBATLW
    from "@/components/dash/Templates/BottomBox/HotelPerformance/RevenueTime/BarChartBATLW";
import HotelWiseRevenueBarChartBATM
    from "@/components/dash/Templates/BottomBox/HotelPerformance/RevenueTime/BarChartBATM";
import HotelWiseRevenueBarChartBATY
    from "@/components/dash/Templates/BottomBox/HotelPerformance/RevenueTime/BarChartBATY";
import HotelWiseRevenueBarChartBATLY
    from "@/components/dash/Templates/BottomBox/HotelPerformance/RevenueTime/BarChartBATLY";
import HotelWiseRevenueBarChartBATLM
    from "@/components/dash/Templates/BottomBox/HotelPerformance/RevenueTime/BarChartBATLM";
import HotelWiseBookingCountBarChartBCT
    from "@/components/dash/Templates/BottomBox/HotelPerformance/BookingTime/BarChartBCT";
import HotelWiseBookingCountBarChartBCTW
    from "@/components/dash/Templates/BottomBox/HotelPerformance/BookingTime/BarChartBCTW";
import HotelWiseBookingCountBarChartBCTLW
    from "@/components/dash/Templates/BottomBox/HotelPerformance/BookingTime/BarChartBCTLW";
import HotelWiseBookingCountBarChartBCTM
    from "@/components/dash/Templates/BottomBox/HotelPerformance/BookingTime/BarChartBCTM";
import HotelWiseBookingCountBarChartBCTLM
    from "@/components/dash/Templates/BottomBox/HotelPerformance/BookingTime/BarChartBCTLM";
import HotelWiseBookingCountBarChartBCTLY
    from "@/components/dash/Templates/BottomBox/HotelPerformance/BookingTime/BarChartBCTLY";
import HotelWiseBookingCountBarChartBCTY
    from "@/components/dash/Templates/BottomBox/HotelPerformance/BookingTime/BarChartBCTY";


//❗ User Wise
import UserWiseRevenueBarChartRBT from "@/components/dash/Templates/BottomBox/UserPerformance/RevenueTime/BarChartBAT";
import UserWiseRevenueBarChartBATW
    from "@/components/dash/Templates/BottomBox/UserPerformance/RevenueTime/BarChartBATW";
import UserWiseRevenueBarChartBATLW
    from "@/components/dash/Templates/BottomBox/UserPerformance/RevenueTime/BarChartBATLW";
import UserWiseRevenueBarChartBATM
    from "@/components/dash/Templates/BottomBox/UserPerformance/RevenueTime/BarChartBATM";
import UserWiseRevenueBarChartBATY
    from "@/components/dash/Templates/BottomBox/UserPerformance/RevenueTime/BarChartBATY";
import UserWiseRevenueBarChartBATLY
    from "@/components/dash/Templates/BottomBox/UserPerformance/RevenueTime/BarChartBATLY";
import UserWiseBookingCountBarChartBCT
    from "@/components/dash/Templates/BottomBox/UserPerformance/BookingTime/BarChartBCT";
import UserWiseRevenueBarChartBATLM
    from "@/components/dash/Templates/BottomBox/UserPerformance/RevenueTime/BarChartBATLM";
import UserWiseBookingCountBarChartBCTW
    from "@/components/dash/Templates/BottomBox/UserPerformance/BookingTime/BarChartBCTW";
import UserWiseBookingCountBarChartBCTLW
    from "@/components/dash/Templates/BottomBox/UserPerformance/BookingTime/BarChartBCTLW";
import UserWiseBookingCountBarChartBCTM
    from "@/components/dash/Templates/BottomBox/UserPerformance/BookingTime/BarChartBCTM";
import UserWiseBookingCountBarChartBCTLM
    from "@/components/dash/Templates/BottomBox/UserPerformance/BookingTime/BarChartBCTLM";
import UserWiseBookingCountBarChartBCTLY
    from "@/components/dash/Templates/BottomBox/UserPerformance/BookingTime/BarChartBCTLY";
import UserWiseBookingCountBarChartBCTY
    from "@/components/dash/Templates/BottomBox/UserPerformance/BookingTime/BarChartBCTY";

//❗ Location Wise
import LocationWiseRevenueBarChartRBT
    from "@/components/dash/Templates/BottomBox/LocationPerformance/RevenueTime/BarChartBAT";
import LocationWiseRevenueBarChartBATW
    from "@/components/dash/Templates/BottomBox/LocationPerformance/RevenueTime/BarChartBATW";
import LocationWiseRevenueBarChartBATLW
    from "@/components/dash/Templates/BottomBox/LocationPerformance/RevenueTime/BarChartBATLW";
import LocationWiseRevenueBarChartBATM
    from "@/components/dash/Templates/BottomBox/LocationPerformance/RevenueTime/BarChartBATM";
import LocationWiseRevenueBarChartBATY
    from "@/components/dash/Templates/BottomBox/LocationPerformance/RevenueTime/BarChartBATY";
import LocationWiseRevenueBarChartBATLY
    from "@/components/dash/Templates/BottomBox/LocationPerformance/RevenueTime/BarChartBATLY";
import LocationWiseBookingCountBarChartBCT
    from "@/components/dash/Templates/BottomBox/LocationPerformance/BookingTime/BarChartBCT";
import LocationWiseRevenueBarChartBATLM
    from "@/components/dash/Templates/BottomBox/LocationPerformance/RevenueTime/BarChartBATLM";
import LocationWiseBookingCountBarChartBCTW
    from "@/components/dash/Templates/BottomBox/LocationPerformance/BookingTime/BarChartBCTW";
import LocationWiseBookingCountBarChartBCTLW
    from "@/components/dash/Templates/BottomBox/LocationPerformance/BookingTime/BarChartBCTLW";
import LocationWiseBookingCountBarChartBCTM
    from "@/components/dash/Templates/BottomBox/LocationPerformance/BookingTime/BarChartBCTM";
import LocationWiseBookingCountBarChartBCTLM
    from "@/components/dash/Templates/BottomBox/LocationPerformance/BookingTime/BarChartBCTLM";
import LocationWiseBookingCountBarChartBCTLY
    from "@/components/dash/Templates/BottomBox/LocationPerformance/BookingTime/BarChartBCTLY";
import LocationWiseBookingCountBarChartBCTY
    from "@/components/dash/Templates/BottomBox/LocationPerformance/BookingTime/BarChartBCTY";

const Dashboard = () => {
    const dispatch: AppDispatch = useDispatch();
    const [totalRevenuerbcd, setTotalRevenuerbcd] = useState(0);
    const [totalRevenuerbdb, setTotalRevenuerbdb] = useState(0);
    const [totalRevenuebbbd, setTotalRevenuebbbd] = useState(0);
    const [totalRevenuebbcd, setTotalRevenuebbcd] = useState(0);
    const [area, setArea] = useState("Revenue");
    const [date, setDate] = useState("byBookingDate");
    const [BookingOrRevenue, setBookingOrRevenue] = useState("Revenue");
    const [hotelBookingOrRevenue, setHotelBookingOrRevenue] = useState("Revenue");
    const [userBookingOrRevenue, setUserBookingOrRevenue] = useState("Revenue");
    const [locationBookingOrRevenue, setLocationBookingOrRevenue] = useState("Revenue");
    const [day, setDay] = useState("0");
    const [HotelDay, setHotelDay] = useState("0");
    const [UserDay, setUserDay] = useState("0");
    const [LocationDay, setLocationDay] = useState("0");


    //✅ Fetch All Bookings Data

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

    //✅ Bottom Box
    const bookingSource: string[] = bookingData.map((item: any) => item.bookingSource);
    const bookingAmountBar: number[] = bookingData.map((item: any) => item.bookingAmount);
    const createdDate: string[] = bookingData.map((item: any) => item.createdAt);
    const hotelNames: string[] = bookingData.map((item: any) => item?.hotel?.hotelName);
    const userName: string[] = bookingData.map((item: any) => item?.guestName);
    const locationName: string[] = bookingData.map((item: any) => item?.hotel?.location);

    console.log(locationName, "bookingSource");

    const bookingAndAmountToday = bookingSource.map((item: any, i: any) => ({
        bookingSource: bookingSource[i],
        bookingAmount: bookingAmountBar[i],
        createdAt: createdDate[i],
    }));

    const HotelWiseBookingAndAmountToday = bookingSource.map((item: any, i: any) => ({
        hotelName: hotelNames[i],
        bookingAmount: bookingAmountBar[i],
        createdAt: createdDate[i],
    }));

    const userWiseBookingAndAmountToday = bookingSource.map((item: any, i: any) => ({
        userName: userName[i],
        bookingAmount: bookingAmountBar[i],
        createdAt: createdDate[i],
    }));

    const locationWiseBookingAndAmountToday = bookingSource.map((item: any, i: any) => ({
        locationName: locationName[i],
        bookingAmount: bookingAmountBar[i],
        createdAt: createdDate[i],
    }));

    //typeof
    console.log(HotelWiseBookingAndAmountToday.map((item: any) => typeof item.hotelName), "HotelWiseBookingAndAmountToday");

    //❗Booking , Amount , This Week

    const handleAreaChange = (newArea: any) => {
        setArea(newArea);
    };

    const handleDateChange = (newDate: any) => {
        setDate(newDate);
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
            (booking) =>
                // @ts-ignore
                new Date(booking.checkInDate) >= thirtyDaysAgo,
        );

        // Calculate total revenue based on booking amount
        const totalRevenuebbbd = last30DaysRevenueDataBBBD.length;


        setTotalRevenuebbbd(totalRevenuebbbd);
    }, [bookingData]);

    useEffect(() => {
        const thirtyDaysAgo = subDays(new Date(), 30);

        // Filter bookings based on booking date (createdAt)
        const last30DaysRevenueDataBBCD = bookingData.filter(
            (booking) => new Date(booking.createdAt) >= thirtyDaysAgo,
        );

        // Calculate total revenue based on booking amount
        const totalRevenuebbcd = last30DaysRevenueDataBBCD.length;


        setTotalRevenuebbcd(totalRevenuebbcd);
    }, [bookingData]);

    return (
        <>
            <div>
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    <Checkin/>
                    <Checkout/>
                    <TodaysBooking/>
                    <TodaysModifiedBooking/>
                    <TotalUsers/>
                    <TodaysCancelledBooking/>
                    <TotalRevenue/>
                    <TotalDue/>
                    <TotalHotels/>
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
                            <RevenueCheckinAreaChart data={revenueAndCheckin}/>
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
                            <RevenueChart data={revenueAndBooking}/>
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
                            <AreaChartBookingBookingDate data={bookingAndBooking}/>
                            <div className="flex justify-evenly">
                                <div className="text-center">
                                    <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                                        {totalRevenuebbbd}
                                    </h1>
                                    Total Booking
                                </div>

                                <div className="text-center">
                                    <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                                        {(totalRevenuebbbd / 30).toFixed(2)}
                                    </h1>
                                    Average Bookings Per Day
                                </div>
                            </div>
                        </>
                    )}

                    {area === "Booking" && date === "byCheckinDate" && (
                        <>
                            <AreaChartBookingCheckinDate data={bookingAndCheckin}/>
                            <div className="flex justify-evenly">
                                <div className="text-center">
                                    <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                                        {totalRevenuebbcd}
                                    </h1>
                                    Total Bookings
                                </div>

                                <div className="text-center">
                                    <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                                        {(totalRevenuebbcd / 30).toFixed(2)}
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
                                onChange={(e) => setHotelDay(e.target.value)}
                                value={HotelDay}
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
                        {BookingOrRevenue === "Revenue" && HotelDay === "0" && (
                            <RevenueBarChartRBT data={bookingAndAmountToday}/>
                        )}
                        {BookingOrRevenue === "Revenue" && HotelDay === "7" && (
                            <RevenueBarChartBATW data={bookingAndAmountToday}/>
                        )}
                        {BookingOrRevenue === "Revenue" && HotelDay === "-7" && (
                            <RevenueBarChartBATLW data={bookingAndAmountToday}/>
                        )}
                        {BookingOrRevenue === "Revenue" && HotelDay === "30" && (
                            <RevenueBarChartBATM data={bookingAndAmountToday}/>
                        )}
                        {BookingOrRevenue === "Revenue" && HotelDay === "-30" && (
                            <RevenueBarChartBATLM data={bookingAndAmountToday}/>
                        )}
                        {BookingOrRevenue === "Revenue" && HotelDay === "365" && (
                            <RevenueBarChartBATY data={bookingAndAmountToday}/>
                        )}
                        {BookingOrRevenue === "Revenue" && HotelDay === "-365" && (
                            <RevenueBarChartBATLY data={bookingAndAmountToday}/>
                        )}

                        {BookingOrRevenue === "Booking" && HotelDay === "0" && (
                            <BookingCountBarChartBCT data={bookingAndAmountToday}/>
                        )}
                        {BookingOrRevenue === "Booking" && HotelDay === "7" && (
                            <BookingCountBarChartBCTW data={bookingAndAmountToday}/>
                        )}
                        {BookingOrRevenue === "Booking" && HotelDay === "-7" && (
                            <BookingCountBarChartBCTLW data={bookingAndAmountToday}/>
                        )}
                        {BookingOrRevenue === "Booking" && HotelDay === "30" && (
                            <BookingCountBarChartBCTM data={bookingAndAmountToday}/>
                        )}
                        {BookingOrRevenue === "Booking" && HotelDay === "-30" && (
                            <BookingCountBarChartBCTLM data={bookingAndAmountToday}/>
                        )}
                        {BookingOrRevenue === "Booking" && HotelDay === "365" && (
                            <BookingCountBarChartBCTY data={bookingAndAmountToday}/>
                        )}
                        {BookingOrRevenue === "Booking" && HotelDay === "-365" && (
                            <BookingCountBarChartBCTLY data={bookingAndAmountToday}/>
                        )}
                    </>
                </TailwindWrapper>
                <TailwindWrapper className="h-50 mt-5">
                    <div className="flex justify-between">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-4 md:text-left text-center">
                            Hotel Wise
                        </h1>
                        <div className="flex gap-5 justify-center sm:justify-start">
                            <select
                                id="booking"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => setHotelBookingOrRevenue(e.target.value)}
                                value={hotelBookingOrRevenue}
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
                        {hotelBookingOrRevenue === "Revenue" && day === "0" && (
                            <HotelWiseRevenueBarChartRBT data={HotelWiseBookingAndAmountToday}/>
                        )}
                        {hotelBookingOrRevenue === "Revenue" && day === "7" && (
                            <HotelWiseRevenueBarChartBATW data={HotelWiseBookingAndAmountToday}/>
                        )}
                        {hotelBookingOrRevenue === "Revenue" && day === "-7" && (
                            <HotelWiseRevenueBarChartBATLW data={HotelWiseBookingAndAmountToday}/>
                        )}
                        {hotelBookingOrRevenue === "Revenue" && day === "30" && (
                            <HotelWiseRevenueBarChartBATM data={HotelWiseBookingAndAmountToday}/>
                        )}
                        {hotelBookingOrRevenue === "Revenue" && day === "-30" && (
                            <HotelWiseRevenueBarChartBATLM data={HotelWiseBookingAndAmountToday}/>
                        )}
                        {hotelBookingOrRevenue === "Revenue" && day === "365" && (
                            <HotelWiseRevenueBarChartBATY data={HotelWiseBookingAndAmountToday}/>
                        )}
                        {hotelBookingOrRevenue === "Revenue" && day === "-365" && (
                            <HotelWiseRevenueBarChartBATLY data={HotelWiseBookingAndAmountToday}/>
                        )}

                        {hotelBookingOrRevenue === "Booking" && day === "0" && (
                            <HotelWiseBookingCountBarChartBCT data={HotelWiseBookingAndAmountToday}/>
                        )}
                        {hotelBookingOrRevenue === "Booking" && day === "7" && (
                            <HotelWiseBookingCountBarChartBCTW data={HotelWiseBookingAndAmountToday}/>
                        )}
                        {hotelBookingOrRevenue === "Booking" && day === "-7" && (
                            <HotelWiseBookingCountBarChartBCTLW data={HotelWiseBookingAndAmountToday}/>
                        )}
                        {hotelBookingOrRevenue === "Booking" && day === "30" && (
                            <HotelWiseBookingCountBarChartBCTM data={HotelWiseBookingAndAmountToday}/>
                        )}
                        {hotelBookingOrRevenue === "Booking" && day === "-30" && (
                            <HotelWiseBookingCountBarChartBCTLM data={HotelWiseBookingAndAmountToday}/>
                        )}
                        {hotelBookingOrRevenue === "Booking" && day === "365" && (
                            <HotelWiseBookingCountBarChartBCTY data={HotelWiseBookingAndAmountToday}/>
                        )}
                        {hotelBookingOrRevenue === "Booking" && day === "-365" && (
                            <HotelWiseBookingCountBarChartBCTLY data={HotelWiseBookingAndAmountToday}/>
                        )}
                    </>
                </TailwindWrapper>
                <TailwindWrapper className="h-50 mt-5">
                    <div className="flex justify-between">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-4 md:text-left text-center">
                            User Wise
                        </h1>
                        <div className="flex gap-5 justify-center sm:justify-start">
                            <select
                                id="booking"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => setUserBookingOrRevenue(e.target.value)}
                                value={userBookingOrRevenue}
                            >
                                <option selected={true} value={"Booking"}>
                                    Booking
                                </option>
                                <option value={"Revenue"}>Revenue</option>
                            </select>
                            <select
                                id="date"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => setUserDay(e.target.value)}
                                value={UserDay}
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
                        {userBookingOrRevenue === "Revenue" && UserDay === "0" && (
                            <UserWiseRevenueBarChartRBT data={userWiseBookingAndAmountToday}/>
                        )}
                        {userBookingOrRevenue === "Revenue" && UserDay === "7" && (
                            <UserWiseRevenueBarChartBATW data={userWiseBookingAndAmountToday}/>
                        )}
                        {userBookingOrRevenue === "Revenue" && UserDay === "-7" && (
                            <UserWiseRevenueBarChartBATLW data={userWiseBookingAndAmountToday}/>
                        )}
                        {userBookingOrRevenue === "Revenue" && UserDay === "30" && (
                            <UserWiseRevenueBarChartBATM data={userWiseBookingAndAmountToday}/>
                        )}
                        {userBookingOrRevenue === "Revenue" && UserDay === "-30" && (
                            <UserWiseRevenueBarChartBATLM data={userWiseBookingAndAmountToday}/>
                        )}
                        {userBookingOrRevenue === "Revenue" && UserDay === "365" && (
                            <UserWiseRevenueBarChartBATY data={userWiseBookingAndAmountToday}/>
                        )}
                        {userBookingOrRevenue === "Revenue" && UserDay === "-365" && (
                            <UserWiseRevenueBarChartBATLY data={userWiseBookingAndAmountToday}/>
                        )}

                        {userBookingOrRevenue === "Booking" && UserDay === "0" && (
                            <UserWiseBookingCountBarChartBCT data={userWiseBookingAndAmountToday}/>
                        )}
                        {userBookingOrRevenue === "Booking" && UserDay === "7" && (
                            <UserWiseBookingCountBarChartBCTW data={userWiseBookingAndAmountToday}/>
                        )}
                        {userBookingOrRevenue === "Booking" && UserDay === "-7" && (
                            <UserWiseBookingCountBarChartBCTLW data={userWiseBookingAndAmountToday}/>
                        )}
                        {userBookingOrRevenue === "Booking" && UserDay === "30" && (
                            <UserWiseBookingCountBarChartBCTM data={userWiseBookingAndAmountToday}/>
                        )}
                        {userBookingOrRevenue === "Booking" && UserDay === "-30" && (
                            <UserWiseBookingCountBarChartBCTLM data={userWiseBookingAndAmountToday}/>
                        )}
                        {userBookingOrRevenue === "Booking" && UserDay === "365" && (
                            <UserWiseBookingCountBarChartBCTY data={userWiseBookingAndAmountToday}/>
                        )}
                        {userBookingOrRevenue === "Booking" && UserDay === "-365" && (
                            <UserWiseBookingCountBarChartBCTLY data={userWiseBookingAndAmountToday}/>
                        )}
                    </>
                </TailwindWrapper>
                <TailwindWrapper className="h-50 mt-5">
                    <div className="flex justify-between">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-4 md:text-left text-center">
                            Location Wise
                        </h1>
                        <div className="flex gap-5 justify-center sm:justify-start">
                            <select
                                id="booking"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) =>  setLocationBookingOrRevenue(e.target.value)}
                                value={locationBookingOrRevenue}
                            >
                                <option selected={true} value={"Booking"}>
                                    Booking
                                </option>
                                <option value={"Revenue"}>Revenue</option>
                            </select>
                            <select
                                id="date"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => setLocationDay(e.target.value)}
                                value={LocationDay}
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
                        {locationBookingOrRevenue === "Revenue" && LocationDay === "0" && (
                            <LocationWiseRevenueBarChartRBT data={locationWiseBookingAndAmountToday}/>
                        )}
                        {locationBookingOrRevenue === "Revenue" && LocationDay === "7" && (
                            <LocationWiseRevenueBarChartBATW data={locationWiseBookingAndAmountToday}/>
                        )}
                        {locationBookingOrRevenue === "Revenue" && LocationDay === "-7" && (
                            <LocationWiseRevenueBarChartBATLW data={locationWiseBookingAndAmountToday}/>
                        )}
                        {locationBookingOrRevenue === "Revenue" && LocationDay === "30" && (
                            <LocationWiseRevenueBarChartBATM data={locationWiseBookingAndAmountToday}/>
                        )}
                        {locationBookingOrRevenue === "Revenue" && LocationDay === "-30" && (
                            <LocationWiseRevenueBarChartBATLM data={locationWiseBookingAndAmountToday}/>
                        )}
                        {locationBookingOrRevenue === "Revenue" && LocationDay === "365" && (
                            <LocationWiseRevenueBarChartBATY data={locationWiseBookingAndAmountToday}/>
                        )}
                        {locationBookingOrRevenue === "Revenue" && LocationDay === "-365" && (
                            <LocationWiseRevenueBarChartBATLY data={locationWiseBookingAndAmountToday}/>
                        )}

                        {locationBookingOrRevenue === "Booking" && LocationDay === "0" && (
                            <LocationWiseBookingCountBarChartBCT data={locationWiseBookingAndAmountToday}/>
                        )}
                        {locationBookingOrRevenue === "Booking" && LocationDay === "7" && (
                            <LocationWiseBookingCountBarChartBCTW data={locationWiseBookingAndAmountToday}/>
                        )}
                        {locationBookingOrRevenue === "Booking" && LocationDay === "-7" && (
                            <LocationWiseBookingCountBarChartBCTLW data={locationWiseBookingAndAmountToday}/>
                        )}
                        {locationBookingOrRevenue === "Booking" && LocationDay === "30" && (
                            <LocationWiseBookingCountBarChartBCTM data={locationWiseBookingAndAmountToday}/>
                        )}
                        {locationBookingOrRevenue === "Booking" && LocationDay === "-30" && (
                            <LocationWiseBookingCountBarChartBCTLM data={locationWiseBookingAndAmountToday}/>
                        )}
                        {locationBookingOrRevenue === "Booking" && LocationDay === "365" && (
                            <LocationWiseBookingCountBarChartBCTY data={locationWiseBookingAndAmountToday}/>
                        )}
                        {locationBookingOrRevenue === "Booking" && LocationDay === "-365" && (
                            <LocationWiseBookingCountBarChartBCTLY data={locationWiseBookingAndAmountToday}/>
                        )}
                    </>
                </TailwindWrapper>
                <div className="mb-20"></div>
            </div>
        </>
    );
};

export default Dashboard;
