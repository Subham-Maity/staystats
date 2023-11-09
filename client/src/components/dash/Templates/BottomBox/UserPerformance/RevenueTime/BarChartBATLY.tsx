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
import BarChartComponent from "@/components/dash/Templates/BottomBox/UserPerformance/BarChartComponent";

interface RevenueBarChartProps {
  data: {
    userName: string;
    bookingAmount: number;
    createdAt: string;
  }[];
}

const RevenueBarChartBATLY: React.FC<RevenueBarChartProps> = ({ data }) => {
  // Calculate the start and end dates for the last year (365 days from the previous year)
  const currentDate = new Date();
  const endDate = endOfYear(subYears(currentDate, 1)); // Set the end date as the last day of the previous year
  const startDate = startOfYear(subYears(currentDate, 1));

  // Create a dictionary to aggregate booking amounts for each source within the last year
  const aggregateData: { [key: string]: number } = {};

  data.forEach((item) => {
    const itemDate = new Date(item.createdAt);
    if (isWithinInterval(itemDate, { start: startDate, end: endDate })) {
      const source = item.userName;
      if (aggregateData[source]) {
        aggregateData[source] += item.bookingAmount;
      } else {
        aggregateData[source] = item.bookingAmount;
      }
    }
  });

  // Create an array with unique booking sources
  const uniqueSources = Array.from(
    new Set(data.map((item) => item.userName)),
  );

  // Create a chartData array with all unique sources and their aggregated revenue for the last year
  const chartData = uniqueSources.map((source) => ({
    source,
    revenue: aggregateData[source] || 0,
  }));

  return (
      <BarChartComponent chartData={chartData} type={"revenue"} />
  );
};

export default RevenueBarChartBATLY;
