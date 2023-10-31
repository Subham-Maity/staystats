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
import { format, isBefore } from "date-fns";

interface RevenueBarChartProps {
  bookingSource: string[];
  bookingAmount: number[];
  compareDate: Date;
  day: number;
}

const RevenueBarChart: React.FC<RevenueBarChartProps> = ({
  bookingSource,
  bookingAmount,
  compareDate,
  day,
}) => {
  // Filter the data for the specified time period
  const currentDate = new Date();
  const startDate = isBefore(compareDate, currentDate)
    ? new Date(compareDate)
    : new Date(currentDate);
  const endDate = isBefore(compareDate, currentDate)
    ? new Date(compareDate)
    : new Date(currentDate);
  startDate.setDate(startDate.getDate() - day + 1);

  const filteredData = bookingSource.map((source, index) => ({
    source,
    revenue: bookingAmount[index],
  }));

  // Create a BarChart data array with bookingSource and total revenue
  const chartData = filteredData.map((data) => ({
    bookingSource: data.source,
    revenue: data.revenue,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookingSource" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueBarChart;
