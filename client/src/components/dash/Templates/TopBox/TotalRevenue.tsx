import React, {useEffect, useState} from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  format,
  subDays,
  eachDayOfInterval,
  endOfDay,
  startOfDay,
} from "date-fns";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllBookingsAsync, selectAllbookings} from "@/lib/features/bookingSlice";
import {AppDispatch} from "@/lib/redux/store";
import {BookingData} from "@/lib/Types/Dashboard/types";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";

interface DataPoint {
  createdAt: string;
  advanceAmount: number;
}

interface RevenueAreaChartProps {
  data: DataPoint[];
}

const TotalRevenue: React.FC = () => {
  const dispatch:AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBookingsAsync());
  }, [dispatch]);


  const data  = useSelector(selectAllbookings)
  console.log(data,"data");
  const todaysRevenueItems = data.filter((item:any) => {
    return item.createdAt === new Date().toISOString().split("T")[0];
  });
  let todaysRevenue = 0;
  if (todaysRevenueItems.length > 0) {
    todaysRevenue = todaysRevenueItems
        .map((item:any) => item.advanceAmount)
        .reduce((total:any, amount:any) => total + amount, 0);
  }
  console.log(todaysRevenue);

  let thisWeekRevenue=0;

  const chartData = [
    { name: "Sun", users: 0 },
    { name: "Mon", users: 0 },
    { name: "Tue", users: 0 },
    { name: "Wed", users: 0 },
    { name: "Thu", users: 0 },
    { name: "Fri", users: 0 },
    { name: "Sat", users: 0 },
  ];

  const TodaysBooking:any = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Today's Revenue",
    number: todaysRevenue,
    dataKey: "users",
    percentage: thisWeekRevenue,
    reactIcon: "BsCalendar2Date",
    chartData: chartData,
  };

  return (
      <TailwindWrapper className="mt-5 justify-self-center">
        <div className="box box2">
          <ChartBox titleOfPercentage="This Week" {...TodaysBooking} />
        </div>
      </TailwindWrapper>
  );
};

export default TotalRevenue;
