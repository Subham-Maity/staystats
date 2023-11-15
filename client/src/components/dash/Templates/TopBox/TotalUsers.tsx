import React from "react";
import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import {useSelector} from "react-redux";
import {selectAllUsers} from "@/lib/features/userSlice";

function calculateThisWeekTotalUsers(
    userData: any[],
    startOfWeek: Date,
    endOfWeek: Date
): any[] {
    const usersThisWeek = userData.filter(user => {
        const userDate = new Date(user.updatedAt);
        return userDate >= startOfWeek && userDate <= endOfWeek;
    });

    return usersThisWeek;
}

function TotalUsers() {
    // Use the `useSelector` hook to select user data from the Redux store
    const users = useSelector(selectAllUsers);
    // Calculate the total number of users
    function calculateTotalUsers(userData:any[]) {
        // console.log(userData.length,"userData.length");
        return userData.length;
    }

    const currentDate = new Date();

    const endOfWeek = new Date();
    endOfWeek.setHours(23, 59, 59, 999);
    endOfWeek.setDate(currentDate.getDate() - 6);
    const totalUsers = calculateTotalUsers(users);
    const totalUsersThisWeek = calculateThisWeekTotalUsers(users, endOfWeek,currentDate);

    const chartData = [
        { name: "Sun", users: 0 },
        { name: "Mon", users: 0 },
        { name: "Tue", users: 0 },
        { name: "Wed", users: 0 },
        { name: "Thu", users: 0 },
        { name: "Fri", users: 0 },
        { name: "Sat", users: 0 },
    ];

    totalUsersThisWeek.forEach((user:any) => {
        const userDate = new Date(user.updatedAt);
        const dayOfWeek = userDate.getDay(); // 0 for Sunday, 1 for Monday, and so on

        // Increment the total users count for the corresponding day in chartData
        chartData[dayOfWeek].users++;
    });

    const TotalUsersData = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Total Users",
        number: totalUsers,
        dataKey: "users",
        percentage: totalUsersThisWeek.length,
        reactIcon: "BsCalendar2Date",
        chartData: chartData
    };

    return (
        <TailwindWrapper className={"mt-5 justify-self-center"}>
            <div className="box box2">
                <ChartBox titleOfPercentage="This Week" {...TotalUsersData} />
            </div>
        </TailwindWrapper>
    );
}

export default TotalUsers;