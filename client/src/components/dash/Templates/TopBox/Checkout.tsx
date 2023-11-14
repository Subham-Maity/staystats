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

    const endOfWeek = new Date();
    endOfWeek.setHours(23, 59, 59, 999);
    endOfWeek.setDate(currentDate2.getDate() - 6); // End of the week

    // Filter the original data for this week's check-ins
    const thisWeekCheckOuts = bookingData.filter((record:any) => {
        const checkOutDate = new Date(record.checkOutDate);
        return checkOutDate <= currentDate2 && checkOutDate >= endOfWeek;
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
    thisWeekCheckOuts.forEach((record) => {
        const checkOutDate = new Date(record.checkOutDate);
        const dayOfWeek = checkOutDate.getDay(); // 0 for Sunday, 1 for Monday, and so on

        // Increment the check-outs count for the corresponding day in chartData
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
        chartData: chartData
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