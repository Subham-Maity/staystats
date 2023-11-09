import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format, isWithinInterval, subDays } from "date-fns";
import BarChartComponent from "@/components/dash/Templates/BottomBox/HotelPerformance/BarChartComponent";

interface BookingCountBarChartProps {
  data: {
    hotelName: string;
    createdAt: string;
  }[];
}

const BookingCountBarChartBCTW: React.FC<BookingCountBarChartProps> = ({
  data,
}) => {
  // Calculate the start and end dates for the previous 7 days (this week)
  const currentDate = new Date();
  const endDate = subDays(currentDate, 1); // Set the end date as yesterday
  const startDate = subDays(currentDate, 7);

  // Create a dictionary to count the number of bookings for each source within the week
  const bookingCounts: { [key: string]: number } = {};

  data.forEach((item) => {
    const itemDate = new Date(item.createdAt);
    if (isWithinInterval(itemDate, { start: startDate, end: endDate })) {
      const source = item.hotelName;
      if (bookingCounts[source]) {
        bookingCounts[source]++;
      } else {
        bookingCounts[source] = 1;
      }
    }
  });

  // Create an array with unique booking sources
  const uniqueSources = Array.from(
    new Set(data.map((item) => item.hotelName)),
  );

  // Create a chartData array with all unique sources and their booking counts for the week
  const chartData = uniqueSources.map((source) => ({
    source,
    bookingCount: bookingCounts[source] || 0,
  }));
  return (
      <>
        <BarChartComponent chartData={chartData} type={"bookingCount"} />
      </>
  );
};

export default BookingCountBarChartBCTW;
