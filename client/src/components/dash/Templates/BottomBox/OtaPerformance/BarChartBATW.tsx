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
import { format, isWithinInterval } from "date-fns";

interface RevenueBarChartProps {
  data: {
    bookingSource: string;
    bookingAmount: number;
    createdAt: string;
  }[];
}

const RevenueBarChartBATW: React.FC<RevenueBarChartProps> = ({ data }) => {
  // Calculate the start and end dates for the previous 7 days (this week)
  const currentDate = new Date();
  const endDate = new Date(currentDate);
  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() - 6); // Subtract 6 to get 7 days in total

  // Create a dictionary to aggregate booking amounts for each source within the week
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

  // Create a chartData array with all unique sources and their aggregated revenue for the week
  const chartData = uniqueSources.map((source) => ({
    source,
    revenue: aggregateData[source] || 0,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="source" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueBarChartBATW;
