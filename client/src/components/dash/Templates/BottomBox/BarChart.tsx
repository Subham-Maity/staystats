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
import { format, isSameDay } from "date-fns";

interface RevenueBarChartProps {
  data: {
    bookingSource: string;
    bookingAmount: number;
    createdAt: string;
  }[];
}

const RevenueBarChart: React.FC<RevenueBarChartProps> = ({ data }) => {
  // Get the current date as a Date object
  const currentDate = new Date();

  // Filter the data for items with a matching createdAt date
  const filteredData = data
    .filter((item) => isSameDay(new Date(item.createdAt), currentDate))
    .map((item) => ({
      source: item.bookingSource,
      revenue: item.bookingAmount,
    }));

  // Get a list of all unique booking sources
  const bookingSources = Array.from(
    new Set(data.map((item) => item.bookingSource)),
  );

  // Create a BarChart data array with all booking sources and revenue for today
  const chartData = bookingSources.map((source) => {
    const revenue = filteredData.find((item) => item.source === source);
    return {
      source,
      revenue: revenue ? revenue.revenue : 0,
    };
  });

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

export default RevenueBarChart;
