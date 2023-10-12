"use client";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import Link from "next/link";
import { FaUserClock } from "react-icons/fa";

type Props = {
  color: string;
  icon?: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
  reactIcon?: string;
  titleOfPercentage: string;
};

const ChartBox = (props: Props) => {
  const getReactIcon = (iconName: string) => {
    switch (iconName) {
      case "BsCalendar2Date":
        return <FaUserClock className="text-lg" />;
      default:
        return null;
    }
  };

  return (
      <div className="chartBox">
        <div className="boxInfo">
          <div className="title">
            {props.reactIcon && getReactIcon(props.reactIcon)}
            {props.icon && <img src={props.icon} alt="" />}
            <span>{props.title}</span>
          </div>
          <h1>{props.number}</h1>
          <Link href="/" style={{ color: props.color }}>
            View all
          </Link>
        </div>
        <div className="chartInfo">
          <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={props.chartData}>
                <Tooltip
                    contentStyle={{ background: "transparent", border: "none" }}
                    labelStyle={{ display: "none" }}
                    position={{ x: 10, y: -40 }}
                    formatter={(value, name, props) => {
                      // Display the exact date as a tooltip
                      return props.payload && props.payload.name
                          ? new Date(props.payload.name).toLocaleDateString()
                          : value;
                    }}
                />
                <Line
                    type="monotone"
                    dataKey={props.dataKey}
                    stroke={props.color}
                    strokeWidth={2}
                    dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="texts">
          <span
              className="percentage"
              style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
            <span className="duration">{props.titleOfPercentage}</span>
          </div>
        </div>
      </div>
  );
};

export default ChartBox;