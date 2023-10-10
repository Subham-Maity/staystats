import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartProps {
  startTime: number;
  endTime: number;
  startPrice: number;
  endPrice: number;
}

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const formattedDate = `${date.getFullYear()}.${(
    "0" +
    (date.getMonth() + 1)
  ).slice(-2)}.${("0" + date.getDate()).slice(-2)} ${(
    "0" + date.getHours()
  ).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`;
  return formattedDate;
};

const ChartComponent = ({
  startTime,
  endTime,
  startPrice,
  endPrice,
}: ChartProps) => {
  // Calculate the domain for the Y-axis
  const yAxisDomain = [0, endPrice];

  // Parse the provided data
  const data = [
    { time: formatDate(endTime), price: endPrice },
    { time: formatDate(startTime), price: startPrice },
  ];

  return (
    <div className="ml-4 mt-2">
      <div className="border border-green-300/25 w-[370px] lg:w-[640px] md:w-[368px] dark:bg-[#242525] bg-stone-50 rounded-md p-1 max-w-sm overflow-hidden relative z-0">
        <h1 className="dark:text-gray-400 text-gray-700 font-bold pl-6 mt-2 border-b pb-1 dark:border-gray-400/30 border-gray-700 ">
          Price History
        </h1>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="time" />
            <YAxis
              dataKey="price"
              type="number"
              label={{ angle: -90, position: "insideLeft" }}
              domain={yAxisDomain} // Set the Y-axis domain
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#15803d"
              strokeWidth={6}
            />
          </LineChart>
        </ResponsiveContainer>
        <div>
          <p className="pl-3 pr-3 mb-2 dark:text-blue-600/75 text-blue-400 text-sm font-medium">
            The price will steadily decrease over time, meaning you will buy
            more tokens as the time draws near to the end. The price will
            decrease each 60 minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
