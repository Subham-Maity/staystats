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

interface BookingCountBarChartProps {
  data: {
    bookingSource: string;
    createdAt: string;
  }[];
}

const BookingCountBarChartBCT: React.FC<BookingCountBarChartProps> = ({
  data,
}) => {
  // Create a dictionary to count the number of bookings for each source
  const bookingCounts: { [key: string]: number } = {};

  data.forEach((item) => {
    if (isSameDay(new Date(item.createdAt), new Date())) {
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

  // Create a chartData array with all unique sources and their booking counts for today
  const chartData = uniqueSources.map((source) => ({
    source,
    bookingCount: bookingCounts[source] || 0,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="source" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="bookingCount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BookingCountBarChartBCT;
