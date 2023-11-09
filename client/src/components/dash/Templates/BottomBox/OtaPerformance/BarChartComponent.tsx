import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function BarChartComponent(props: any) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={props.chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="source" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={props.type} fill="#8884d8" stroke="#006ef5" strokeWidth={3} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default BarChartComponent;

