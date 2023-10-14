import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import {useSelector} from "react-redux";
import {selectAllbookings} from "@/lib/features/bookingSlice";

function TotalRevenue() {
    const bookingData = useSelector(selectAllbookings);

    //🚀 Total Revenue
    //✅ Step-1 -> Filter confirmed hotels
    const confirmedBookings = bookingData.filter(
        (record:any): boolean => record.status === "CONFIRMED",
    );

    const currentDate: string = new Date().toISOString();
    const futureBookings = confirmedBookings.filter((record:any) => {
        const checkInDate: string = new Date(record.checkInDate.$date).toISOString();
        return checkInDate > currentDate;
    });

    const totalRevenue: number = futureBookings.reduce((total:any, booking:any) => {
        return total + booking.bookingAmount;
    }, 0);

     const TotalRevenue = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Upcoming Total Revenue",
        number: totalRevenue,
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
                <ChartBox titleOfPercentage="This Week" {...TotalRevenue} />
            </div>
        </TailwindWrapper>
    );
}

export default TotalRevenue;