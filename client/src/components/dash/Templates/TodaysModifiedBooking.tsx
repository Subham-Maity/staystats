import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import {BookingData} from "@/lib/Types/Dashboard/types";
import {selectAllbookings} from "@/lib/features/bookingSlice";
import {useSelector} from "react-redux";


function TodaysModifiedBooking() {
    const bookingData = useSelector(selectAllbookings);
    //🚀 Today's Modified Booking bookingData
    //✅ Step-1 -> Calculate the number of check-ins for today
    function calculateTodaysModifiedBooking(bookingData: BookingData[]) {
        const currentDate: string = new Date().toISOString().split("T")[0];
        const todaysModification: BookingData[] = bookingData.filter((record) => {
            const ModifiedDate: string = new Date(record.updatedAt.$date)
                .toISOString()
                .split("T")[0];
            return ModifiedDate === currentDate;
        });
        return todaysModification.length;
    }
    const todaysModification: number = calculateTodaysModifiedBooking(bookingData);

     const TodaysModifiedBooking = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Today's Modification",
        number: todaysModification,
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
                <ChartBox
                    titleOfPercentage="This Week"
                    {...TodaysModifiedBooking}
                />
            </div>
        </TailwindWrapper>
    );
}

export default TodaysModifiedBooking;