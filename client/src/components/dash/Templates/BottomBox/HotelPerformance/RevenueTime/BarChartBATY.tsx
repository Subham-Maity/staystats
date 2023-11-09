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
} from "date-fns";
import BarChartComponent from "@/components/dash/Templates/BottomBox/HotelPerformance/BarChartComponent";

interface RevenueBarChartProps {
  data: {
    hotelName: string;
    bookingAmount: number;
    createdAt: string;
  }[];
}

const RevenueBarChartBATY: React.FC<RevenueBarChartProps> = ({ data }) => {
  // Calculate the start and end dates for the current year (365 days from the current date)
  const currentDate = new Date();
  const endDate = endOfYear(subDays(currentDate, 1)); // Set the end date as the last day of the current year
  const startDate = startOfYear(subDays(currentDate, 365));

  // Create a dictionary to aggregate booking amounts for each source within the current year
  const aggregateData: { [key: string]: number } = {};

  data.forEach((item) => {
    const itemDate = new Date(item.createdAt);
    if (isWithinInterval(itemDate, { start: startDate, end: endDate })) {
      const source = item.hotelName;
      if (aggregateData[source]) {
        aggregateData[source] += item.bookingAmount;
      } else {
        aggregateData[source] = item.bookingAmount;
      }
    }
  });

  // Create an array with unique booking sources
  const uniqueSources = Array.from(
    new Set(data.map((item) => item.hotelName)),
  );

  // Create a chartData array with all unique sources and their aggregated revenue for the current year
  const chartData = uniqueSources.map((source) => ({
    source,
    revenue: aggregateData[source] || 0,
  }));

  return (
      <BarChartComponent chartData={chartData} type={"revenue"} />
  );
};

export default RevenueBarChartBATY;
