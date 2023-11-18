import React, {useContext} from 'react';
import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import Context from "@/context/Context";



function BarChartComponent(props:any) {
    const { isDarkTheme } = useContext(Context);
    const customTooltipStyle = {
        backgroundColor: isDarkTheme ? '#000' : '#fff',
        border: 'none',
        color: isDarkTheme ? '#fff' : '#000',
        fontSize: '10px',
    };

    const yAxisTextStyle = {
        fill: isDarkTheme ? '#fff' : '#000',
        fontSize: '10px', // Adjust font size as needed
    };
    const xAxisTextStyle = {
        fill: isDarkTheme ? '#fff' : '#000',
        fontSize: '15px', // Adjust font size as needed
    };

    return (
        <div style={{ height: '350px', overflow: 'auto'}}>
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={props.chartData} layout="vertical">
                    {/* Remove CartesianGrid to remove the grid */}
                    <YAxis dataKey="source" type="category" tick={yAxisTextStyle} />
                    <XAxis type="number" tick={xAxisTextStyle} />
                    <Tooltip contentStyle={customTooltipStyle} />
                    <Legend />
                    <Bar
                        dataKey={props.type}
                        fill="url(#colorGradient)"
                        stroke="#006ef5"
                        strokeWidth={1}
                        barSize={20}
                    />
                    <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={1} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChartComponent;
