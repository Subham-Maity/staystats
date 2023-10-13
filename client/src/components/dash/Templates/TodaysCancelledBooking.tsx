import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import {BookingData} from "@/lib/Types/Dashboard/types";
import {useSelector} from "react-redux";
import {selectAllbookings} from "@/lib/features/bookingSlice";

function TodaysCancelledBooking() {
    const bookingData = useSelector(selectAllbookings);

    //🚀 Today's Cancelled Booking bookingData
    //✅ Step-1 -> Calculate the number of cancelled booking for today
    function calculateTodaysCancelledBooking(bookingData: BookingData[]) {
        const CancelledString = "CANCELLED";
        const todaysCancelledBooking: BookingData[] = bookingData.filter((record) => {
            return record.status === CancelledString;
        });
        return todaysCancelledBooking.length;
    }
    const todaysCancelledBooking: number =
        calculateTodaysCancelledBooking(bookingData);

    const TodaysCancelledBooking = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Today's Cancelled Booking",
        number: todaysCancelledBooking,
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
            <ChartBox
                titleOfPercentage="This Week"
                {...TodaysCancelledBooking}
            />
        </TailwindWrapper>
    );
}

export default TodaysCancelledBooking;