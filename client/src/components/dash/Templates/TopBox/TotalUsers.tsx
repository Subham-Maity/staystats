import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import {UserData} from "@/lib/Types/Dashboard/types";
import {useSelector} from "react-redux";
import {selectAllUsers} from "@/lib/features/userSlice";


function TotalUsers() {
    const users = useSelector(selectAllUsers)

    //🚀 Total User Count
    //✅ Step-1 -> Calculate the number of users
    function calculateTotalUsers(userData: UserData[]) {
        return userData.length;
    }
    const totalUsers: number = calculateTotalUsers(users);

    const TotalUsers = {
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
                <ChartBox titleOfPercentage="This Week" {...TotalUsers} />
            </div>
        </TailwindWrapper>
    );
}

export default TotalUsers;