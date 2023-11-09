import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import {selectAllbookings} from "@/lib/features/bookingSlice";
import {useSelector} from "react-redux";


function TotalDue() {
    const bookingData = useSelector(selectAllbookings);

    //🚀 Upcoming Total Due
    //✅ Step-1 -> Filter Upcoming Total Due
    const confirmedBookingsForDue = bookingData.filter(
        (record:any): boolean => record.status === "CONFIRMED",
    );

    const currentDateForDue: string = new Date().toISOString();
    const futureBookingsForDue = confirmedBookingsForDue.filter(
        (record:any): boolean => {
            const checkInDateForDue: string = new Date(
                record.checkInDate,
            ).toISOString();
            return checkInDateForDue > currentDateForDue;
        },
    );

    const totalDueAmount: number = futureBookingsForDue.reduce((total:any, booking:any) => {
        return total + booking.dueAmount;
    }, 0);

     const TotalDue = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Upcoming Total Due",
        number: totalDueAmount,
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
                <ChartBox titleOfPercentage="This Week" {...TotalDue} />
            </div>
        </TailwindWrapper>
    );
}

export default TotalDue;