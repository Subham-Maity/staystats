import {useSelector} from "react-redux";
import { selectAllbookings} from "@/lib/features/bookingSlice";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";

const UpcomingTotalRevenue= () => {

    const data  = useSelector(selectAllbookings)
    const todaysItems = data.filter((item:any) => {
        return item.checkInDate > new Date().toISOString();
    });

    //if there is no booking today
    const todaysRevenu = todaysItems.reduce((total: any, item: any) => {
        return total + item.bookingAmount; // Use 'item.bookingAmount' instead of 'total.bookingAmount'
    }, 0);

    const currentDate = new Date();


    const endOfWeek = new Date();
    endOfWeek.setHours(23, 59, 59, 999);
    endOfWeek.setDate(currentDate.getDate() + 6); // End of the week


    //@ts-ignore
    const thisWeekItems = data.filter(item => {
        const Dates:Date = new Date(item.checkInDate);
        return Dates >= currentDate && Dates <= endOfWeek;
    });


    const thisWeekRevenue = thisWeekItems.reduce((total: any, item: any) => {
        return total + item.bookingAmount; // Use 'item.bookingAmount' instead of 'total.bookingAmount'
    }, 0);


    const chartData = [
        { name: "Sun", revenue: 0 },
        { name: "Mon", revenue: 0 },
        { name: "Tue", revenue: 0 },
        { name: "Wed", revenue: 0 },
        { name: "Thu", revenue: 0 },
        { name: "Fri", revenue: 0 },
        { name: "Sat", revenue: 0 },
    ];

    thisWeekItems.forEach((record:any) => {
        const cancelDate = new Date(record.createdAt);
        const dayOfWeek = cancelDate.getDay(); // 0 for Sunday, 1 for Monday, and so on
        // Increment the revenue for the corresponding day in chartData
        chartData[dayOfWeek].revenue += record.bookingAmount;
    });

    const TodaysBooking:any = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Upcoming Total Revenue",
        number: todaysRevenu,
        dataKey: "revenue",
        percentage: thisWeekRevenue,
        reactIcon: "BsCalendar2Date",
        chartData: chartData,
    };

    return (
        <TailwindWrapper className="mt-5 justify-self-center">
            <div className="box box2">
                <ChartBox titleOfPercentage="This Week" {...TodaysBooking} />
            </div>
        </TailwindWrapper>
    );
};

export default UpcomingTotalRevenue;
