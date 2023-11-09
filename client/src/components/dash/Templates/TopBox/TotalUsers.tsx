import React, {useEffect} from "react";
import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllUsersAsync, selectAllUsers} from "@/lib/features/userSlice";
import {AppDispatch} from "@/lib/redux/store";

function TotalUsers() {
    const dispatch:AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllUsersAsync())
        .then(() => {
            console.log("fetchAllProductsAsync dispatched successfully");
        })
        .catch((error: any) => {
            console.error("Error dispatching fetchAllProductsAsync:", error);
        });
    }, [dispatch]);

    // Use the `useSelector` hook to select user data from the Redux store
    const users = useSelector(selectAllUsers);
    // Calculate the total number of users
    function calculateTotalUsers(userData:any[]) {
        return userData.length;
    }

    const totalUsers = calculateTotalUsers(users);

    const TotalUsersData = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Total Users",
        number: totalUsers,
        dataKey: "users",
        percentage: 45,
        reactIcon: "BsCalendar2Date",
        chartData: [
            { name: "Sun", users: 400 },
            { name: "Mon", users: 600 },
            { name: "Tue", users: 500 },
            { name: "Wed", users: 700 },
            { name: "Thu", users: 400 },
            { name: "Fri", users: 500 },
            { name: "Sat", users: 450 },
        ],
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
