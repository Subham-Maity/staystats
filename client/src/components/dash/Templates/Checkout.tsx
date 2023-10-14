import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import {BookingData} from "@/lib/Types/Dashboard/types";
import {useSelector} from "react-redux";
import {selectAllbookings} from "@/lib/features/bookingSlice";

function Checkout() {
    const bookingData:BookingData[] = useSelector(selectAllbookings);

    const currentDate: string = new Date().toISOString().split("T")[0];
    //✅ Step-1 -> Calculate the number of check-ins for today
    const numberOfTodaysCheckOuts = bookingData.filter((record:any) => {
        const checkOutDate: string = record.checkOutDate.split("T")[0];
        return currentDate === checkOutDate;
    });
    const todaysCheckOuts = numberOfTodaysCheckOuts.length;

    //✅ Step-2 -> Calculate the number of check-ins for this Week
    const currentDate2 = new Date();
    const startOfWeek = new Date(currentDate2);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(currentDate2.getDate() - currentDate2.getDay()); // Assuming Sunday is the first day of the week

    const endOfWeek = new Date(currentDate2);
    endOfWeek.setHours(23, 59, 59, 999);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the week

    // Filter the original data for this week's check-ins
    const thisWeekCheckOuts = bookingData.filter((record:any) => {
        const checkOutDate = new Date(record.checkOutDate);
        return checkOutDate >= startOfWeek && checkOutDate <= endOfWeek;
    });

    // Initialize an array to represent the desired format for chartData
    const chartData = [
        { name: "Sun", users: 0 },
        { name: "Mon", users: 0 },
        { name: "Tue", users: 0 },
        { name: "Wed", users: 0 },
        { name: "Thu", users: 0 },
        { name: "Fri", users: 0 },
        { name: "Sat", users: 0 },
    ];

    // Calculate the total number of users for each day of the current week
    thisWeekCheckOuts.forEach((record:any) => {
        const checkInDate = new Date(record.checkInDate);
        const dayOfWeek = checkInDate.getDay(); // 0 for Sunday, 1 for Monday, and so on

        // Increment the users count for the corresponding day in chartData
        chartData[dayOfWeek].users++;
    });

    const Checkout = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Today's Check-Outs",
        number: todaysCheckOuts,
        dataKey: "users",
        percentage: thisWeekCheckOuts.length,
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
                <ChartBox titleOfPercentage="This Week" {...Checkout} />
            </div>
        </TailwindWrapper>
    );
}

export default Checkout;