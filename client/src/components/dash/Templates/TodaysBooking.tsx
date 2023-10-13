import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import {BookingData} from "@/lib/Types/Dashboard/types";
import {useSelector} from "react-redux";
import {selectAllbookings} from "@/lib/features/bookingSlice";

function TodaysBooking() {
    const bookingData = useSelector(selectAllbookings);
    //🚀 Today's Booking bookingData
    //✅ Step-1 -> Calculate the number of check-ins for today
    function calculateTodaysBooking(bookingData: BookingData[]) {
        const currentDate: string = new Date().toISOString().split("T")[0];
        const todaysBooking: BookingData[] = bookingData.filter((record) => {
            const TodaysDate: string = new Date(record.createdAt.$date)
                .toISOString()
                .split("T")[0];
            return TodaysDate === currentDate;
        });
        return todaysBooking.length;
    }
    const todaysBooking: number = calculateTodaysBooking(bookingData);

    const TodaysBooking = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Today's Booking",
        number: todaysBooking,
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
                <ChartBox titleOfPercentage="This Week" {...TodaysBooking} />
            </div>
        </TailwindWrapper>
    );
}

export default TodaysBooking;