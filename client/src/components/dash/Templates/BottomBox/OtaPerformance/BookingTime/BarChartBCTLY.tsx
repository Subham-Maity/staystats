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
import {
  format,
  isWithinInterval,
  subDays,
  startOfYear,
  endOfYear,
  subYears,
} from "date-fns";
import BarChartComponent from "@/components/dash/Templates/BottomBox/OtaPerformance/BarChartComponent";

interface BookingCountBarChartProps {
  data: {
    bookingSource: string;
    createdAt: string;
  }[];
}

const BookingCountBarChartBCTLY: React.FC<BookingCountBarChartProps> = ({
  data,
}) => {
  // Calculate the start and end dates for the last year (365 days from the previous year)
  const currentDate = new Date();
  const endDate = endOfYear(subYears(currentDate, 1)); // Set the end date as the last day of the previous year
  const startDate = startOfYear(subYears(currentDate, 1));

  // Create a dictionary to count the number of bookings for each source within the last year
  const bookingCounts: { [key: string]: number } = {};

  data.forEach((item) => {
    const itemDate = new Date(item.createdAt);
    if (isWithinInterval(itemDate, { start: startDate, end: endDate })) {
      const source = item.bookingSource;
      if (bookingCounts[source]) {
        bookingCounts[source]++;
      } else {
        bookingCounts[source] = 1;
      }
    }
  });

  // Create an array with unique booking sources
  const uniqueSources = Array.from(
    new Set(data.map((item) => item.bookingSource)),
  );

  // Create a chartData array with all unique sources and their booking counts for the last year
  const chartData = uniqueSources.map((source) => ({
    source,
    bookingCount: bookingCounts[source] || 0,
  }));

  return (
      <BarChartComponent chartData={chartData} type={"bookingCount"} />
  );
};

export default BookingCountBarChartBCTLY;
