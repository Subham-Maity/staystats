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
  startOfMonth,
  endOfMonth,
} from "date-fns";
import BarChartComponent from "@/components/dash/Templates/BottomBox/OtaPerformance/BarChartComponent";

interface RevenueBarChartProps {
  data: {
    bookingSource: string;
    bookingAmount: number;
    createdAt: string;
  }[];
}

const RevenueBarChartBATLM: React.FC<RevenueBarChartProps> = ({ data }) => {
  // Calculate the start and end dates for the last month (previous 30 days from the current month)
  const currentDate = new Date();
  const endDate = endOfMonth(subDays(currentDate, 1)); // Set the end date as the last day of the previous month
  const startDate = startOfMonth(subDays(currentDate, 30));

  // Create a dictionary to aggregate booking amounts for each source within the last month
  const aggregateData: { [key: string]: number } = {};

  data.forEach((item) => {
    const itemDate = new Date(item.createdAt);
    if (isWithinInterval(itemDate, { start: startDate, end: endDate })) {
      const source = item.bookingSource;
      if (aggregateData[source]) {
        aggregateData[source] += item.bookingAmount;
      } else {
        aggregateData[source] = item.bookingAmount;
      }
    }
  });

  // Create an array with unique booking sources
  const uniqueSources = Array.from(
    new Set(data.map((item) => item.bookingSource)),
  );

  // Create a chartData array with all unique sources and their aggregated revenue for the last month
  const chartData = uniqueSources.map((source) => ({
    source,
    revenue: aggregateData[source] || 0,
  }));

  return (
      <BarChartComponent chartData={chartData} type={"revenue"} />
  );
};

export default RevenueBarChartBATLM;
