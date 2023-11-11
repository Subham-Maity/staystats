import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import {UserData} from "@/lib/Types/Dashboard/types";
import {useSelector} from "react-redux";
import {selectAllUsers} from "@/lib/features/userSlice";
import {fetchAllBookingsAsync} from "@/lib/features/bookingSlice";


function TotalUsers() {
    const users = useSelector(fetchAllBookingsAsync);
    //🚀 Total User Count
    //✅ Step-1 -> Calculate the number of users
    function calculateTotalUsers(userData: any) {
        return userData.length;
    }
    const totalUsers: number = calculateTotalUsers(users);

    const TotalUsers = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Total Cancelation",
        number: totalUsers,
        dataKey: "users",
        percentage: 45,
        reactIcon: "BsCalendar2Date",
        chartData: [
            { name: "Sun", users: 0 },
            { name: "Mon", users: 0 },
            { name: "Tue", users: 0 },
            { name: "Wed", users: 0 },
            { name: "Thu", users: 0 },
            { name: "Fri", users: 0 },
            { name: "Sat", users: 0 },
        ],
    };

    return (
        <TailwindWrapper className={"mt-5 justify-self-center"}>
            <div className="box box2">
                <ChartBox titleOfPercentage="This Week" {...TotalUsers} />
            </div>
        </TailwindWrapper>
    );
}

export default TotalUsers;