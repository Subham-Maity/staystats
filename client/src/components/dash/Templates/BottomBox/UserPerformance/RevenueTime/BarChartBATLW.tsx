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
  subWeeks,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import BarChartComponent from "@/components/dash/Templates/BottomBox/UserPerformance/BarChartComponent";

interface RevenueBarChartProps {
  data: {
    userName: string;
    bookingAmount: number;
    createdAt: string;
  }[];
}

const RevenueBarChartBATLW: React.FC<RevenueBarChartProps> = ({ data }) => {
  // Calculate the start and end dates for the last week (previous 7 days from the previous week)
  const currentDate = new Date();
  const endDate = endOfWeek(subWeeks(currentDate, 1));
  const startDate = startOfWeek(subWeeks(currentDate, 1));

  // Create a dictionary to aggregate booking amounts for each source within the last week
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

  // Create a chartData array with all unique sources and their aggregated revenue for the last week
  const chartData = uniqueSources.map((source) => ({
    source,
    revenue: aggregateData[source] || 0,
  }));

  return (
     <>
       <BarChartComponent chartData={chartData} type={"revenue"} />
       </>
  );
};

export default RevenueBarChartBATLW;
