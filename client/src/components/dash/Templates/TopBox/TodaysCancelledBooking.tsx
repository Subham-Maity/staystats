import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import {useSelector} from "react-redux";
import {selectAllbookings} from "@/lib/features/bookingSlice";


function TotalUsers() {
    const bookings =  useSelector(selectAllbookings);

    function calculateTotalCancellation(bookings:any) {
        //@ts-ignore
        return bookings.filter(item => item.status === "CANCELLED");
    }

    const currentDate2 = new Date();
    const startOfWeek = new Date(currentDate2);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(0); // Assuming Sunday is the first day of the week

    const endOfWeek = new Date(currentDate2);
    endOfWeek.setHours(23, 59, 59, 999);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the week

    // Filter bookings for today and this week
    //@ts-ignore
    const cancelledBookings = calculateTotalCancellation(bookings);

    // Filter for today's cancellations
    //@ts-ignore
    const todayCancellations = cancelledBookings.filter(item => {
        const createdDate = new Date(item.createdAt);
        // @ts-ignore
        return new Date(createdDate).toISOString().split("T")[0] ===
            new Date(currentDate2).toISOString().split("T")[0];
    });


    // Filter for this week's cancellations
    //@ts-ignore
    const weekCancellations = cancelledBookings.filter(item => {
        const cancelDate = new Date(item.createdAt);
        return cancelDate >= startOfWeek && cancelDate <= endOfWeek;
    });

    let todaysCancellation = todayCancellations.length;
    let thisweekCancellation= weekCancellations.length;

    let chartData = [
        { name: "Sun", users: 0 },
        { name: "Mon", users: 0 },
        { name: "Tue", users: 0 },
        { name: "Wed", users: 0 },
        { name: "Thu", users: 0 },
        { name: "Fri", users: 0 },
        { name: "Sat", users: 0 },
    ];

    weekCancellations.forEach((record:any) => {
        const cancelDate = new Date(record.createdAt);
        const dayOfWeek = cancelDate.getDay(); // 0 for Sunday, 1 for Monday, and so on// Increment the cancellations count for the corresponding day in chartData
        chartData[dayOfWeek].users++;
    });

    const TotalUsersData = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Total Cancellation",
        number: todaysCancellation,
        dataKey: "users",
        percentage: thisweekCancellation,
        reactIcon: "BsCalendar2Date",
        chartData: chartData
    };

    return (
        <TailwindWrapper className={"mt-5 justify-self-center"}>
            <div className="box box2">
                <ChartBox titleOfPercentage="This Week" {...TotalUsersData} />
            </div>
        </TailwindWrapper>
    );
}

export default TotalUsers;
