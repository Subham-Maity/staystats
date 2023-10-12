"use client";
import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
// import {
//   Checkin,
//   Checkout,
//   TodaysBooking,
//   TodaysModifiedBooking,
//   TodaysCancelledBooking,
//   TotalUsers,
//   TotalRevenue,
//   TotalDue,
//   TotalHotels,
// } from "./Data/data";

import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllbookings,
  fetchAllBookingsAsync,
} from "@/lib/features/bookingSlice";
import { selectAllhotels } from "@/lib/features/hotelSlice";
import { selectAllUsers } from "@/lib/features/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const bookingData = useSelector(selectAllbookings);
  const hotels = useSelector(selectAllhotels);
  const users = useSelector(selectAllUsers);

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

  console.log(bookingData, "booking data is here");

  return (
    <>
      <div>
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 p-8">
          {/*<TailwindWrapper className={"mt-5 justify-self-center"}>*/}
          {/*  <ChartBox titleOfPercentage="This Week" {...Checkin} />*/}
          {/*</TailwindWrapper>*/}

          {/*<TailwindWrapper className={"mt-5 justify-self-center"}>*/}
          {/*  <div className="box box2">*/}
          {/*    <ChartBox titleOfPercentage="This Week" {...Checkout} />*/}
          {/*  </div>*/}
          {/*</TailwindWrapper>*/}

          {/*<TailwindWrapper className={"mt-5 justify-self-center"}>*/}
          {/*  <div className="box box2">*/}
          {/*    <ChartBox titleOfPercentage="This Week" {...TodaysBooking} />*/}
          {/*  </div>*/}
          {/*</TailwindWrapper>*/}

          {/*<TailwindWrapper className={"mt-5 justify-self-center"}>*/}
          {/*  <div className="box box2">*/}
          {/*    <ChartBox*/}
          {/*      titleOfPercentage="This Week"*/}
          {/*      {...TodaysModifiedBooking}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</TailwindWrapper>*/}

          {/*<TailwindWrapper className={"mt-5 justify-self-center"}>*/}
          {/*  <ChartBox*/}
          {/*    titleOfPercentage="This Week"*/}
          {/*    {...TodaysCancelledBooking}*/}
          {/*  />*/}
          {/*</TailwindWrapper>*/}

          {/*<TailwindWrapper className={"mt-5 justify-self-center"}>*/}
          {/*  <div className="box box2">*/}
          {/*    <ChartBox titleOfPercentage="This Week" {...TotalUsers} />*/}
          {/*  </div>*/}
          {/*</TailwindWrapper>*/}

          {/*<TailwindWrapper className={"mt-5 justify-self-center"}>*/}
          {/*  <div className="box box2">*/}
          {/*    <ChartBox titleOfPercentage="This Week" {...TotalRevenue} />*/}
          {/*  </div>*/}
          {/*</TailwindWrapper>*/}

          {/*<TailwindWrapper className={"mt-5 justify-self-center"}>*/}
          {/*  <div className="box box2">*/}
          {/*    <ChartBox titleOfPercentage="This Week" {...TotalDue} />*/}
          {/*  </div>*/}
          {/*</TailwindWrapper>*/}
          {/*<TailwindWrapper className={"mt-5 justify-self-center"}>*/}
          {/*  <div className="box box2">*/}
          {/*    <ChartBox titleOfPercentage="This Week" {...TotalHotels} />*/}
          {/*  </div>*/}
          {/*</TailwindWrapper>*/}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
