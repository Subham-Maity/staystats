import React, {useEffect} from "react";
import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllUsersAsync, selectAllUsers} from "@/lib/features/userSlice";
import {AppDispatch} from "@/lib/redux/store";
import {fetchAllBookingsAsync} from "@/lib/features/bookingSlice";

function calculateThisWeekTotalUsers(
    userData: any[],
    startOfWeek: Date,
    endOfWeek: Date
): number {
    let totalUsersThisWeek = 0;

    userData.forEach((user) => {
        const userDate = new Date(user.updatedAt);

        if (userDate >= startOfWeek && userDate <= endOfWeek) {
            totalUsersThisWeek++;
        }
    });

    return totalUsersThisWeek;
}

function TotalUsers() {
    const dispatch:AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllBookingsAsync())
    }, [dispatch]);

    // Use the `useSelector` hook to select user data from the Redux store
    const users = useSelector(selectAllUsers);

    // Calculate the total number of users
    function calculateTotalUsers(userData:any[]) {
        return userData.length;
    }

    const currentDate = new Date();
    const startOfWeek = new Date(currentDate);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

    const endOfWeek = new Date(currentDate);
    endOfWeek.setHours(23, 59, 59, 999);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    const totalUsers = calculateTotalUsers(users);


    const totalUsersThisWeek = calculateThisWeekTotalUsers(users, startOfWeek, endOfWeek);

    const chartData = [
        { name: "Sun", users: 0 },
        { name: "Mon", users: 0 },
        { name: "Tue", users: 0 },
        { name: "Wed", users: 0 },
        { name: "Thu", users: 0 },
        { name: "Fri", users: 0 },
        { name: "Sat", users: 0 },
    ];

    users.forEach((user:any) => {
        const userDate = new Date(user.updatedAt);
        const dayOfWeek = userDate.getDay(); // 0 for Sunday, 1 for Monday, and so on

        // Increment the total users count for the corresponding day in chartData
        chartData[dayOfWeek].users++;
    });

    // let totalUsersThisWeek = 0;
    // const currentDate = new Date();
    // const startOfWeek = new Date(currentDate);
    // startOfWeek.setHours(0, 0, 0, 0);
    // startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    //
    // const endOfWeek = new Date(currentDate);
    // endOfWeek.setHours(23, 59, 59, 999);
    // endOfWeek.setDate(startOfWeek.getDate() + 6);
    //
    // users.forEach((user:any) => {
    //     const userDate = new Date(user.createdAt);
    //
    //     if (userDate >= startOfWeek && userDate <= endOfWeek) {
    //         totalUsersThisWeek++;
    //     }
    // });

    const TotalUsersData = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Total Users",
        number: totalUsers,
        dataKey: "users",
        percentage: totalUsersThisWeek,
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
