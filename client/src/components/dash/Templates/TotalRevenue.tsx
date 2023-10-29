import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  format,
  subDays,
  eachDayOfInterval,
  endOfDay,
  startOfDay,
} from "date-fns";

interface DataPoint {
  createdAt: string;
  advanceAmount: number;
}

interface RevenueAreaChartProps {
  data: DataPoint[];
}

const generateYearlyDateData = () => {
  const startDate = startOfDay(new Date());
  const endDate = endOfDay(subDays(startDate, 30));

  const dateInterval = eachDayOfInterval({
    start: endDate,
    end: startDate,
  });

  return dateInterval.map((date) => format(date, "MMM dd"));
};

const RevenueAreaChart: React.FC<RevenueAreaChartProps> = ({ data }) => {
  const yearlyDateData = generateYearlyDateData();

  const chartData = yearlyDateData.map((date) => {
    const matchingDataItem = data.find(
      (item) => format(new Date(item.createdAt), "MMM dd") === date,
    );
    return {
      date: date,
      revenue: matchingDataItem ? matchingDataItem.advanceAmount / 1000 : 0,
    };
  });

  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" interval={0} minTickGap={6} />
          <YAxis tickFormatter={(tick) => `${tick}k`} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueAreaChart;
