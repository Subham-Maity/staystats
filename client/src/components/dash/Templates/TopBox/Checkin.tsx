import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import {useSelector} from "react-redux";
import {selectAllbookings} from "@/lib/features/bookingSlice";
import {BookingData} from "@/lib/Types/Dashboard/types";
import {useEffect} from "react";
import {AppDispatch} from "@/lib/redux/store";
import {useDispatch} from "react-redux";
import {fetchAllBookingsAsync} from "@/lib/features/bookingSlice";

export const Checkin=() => {
    const dispatch:AppDispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchAllBookingsAsync());
    }, []);
    const bookingData:BookingData[] = useSelector(selectAllbookings);


    const currentDate: string = new Date().toISOString().split("T")[0];
    //✅ Step-1 -> Calculate the number of check-ins for today
    const numberOfTodaysCheckIns = bookingData.filter((record:any) => {
        const checkInDate: string = record.checkInDate.split("T")[0];
        return checkInDate === currentDate;
    });
    const todaysCheckIns = numberOfTodaysCheckIns.length;

    //✅ Step-2 -> Calculate the number of check-ins for this Week
    const currentDate2 = new Date();
    const startOfWeek = new Date(currentDate2);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(currentDate2.getDate() - currentDate2.getDay()); // Assuming Sunday is the first day of the week

    const endOfWeek = new Date(currentDate2);
    endOfWeek.setHours(23, 59, 59, 999);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the week

// Filter the original data for this week's check-ins
    const thisWeekCheckIns = bookingData.filter((record:any) => {
        const checkInDate = new Date(record.checkInDate);
        return checkInDate >= startOfWeek && checkInDate <= endOfWeek;
    });

// Initialize an array to represent the desired format for chartData
    const chartData = [
        { name: "Sun", checkIns: 0 },
        { name: "Mon", checkIns: 0 },
        { name: "Tue", checkIns: 0 },
        { name: "Wed", checkIns: 0 },
        { name: "Thu", checkIns: 0 },
        { name: "Fri", checkIns: 0 },
        { name: "Sat", checkIns: 0 },
    ];

    // Calculate the total number of users for each day of the current week
    thisWeekCheckIns.forEach((record:any) => {
        const checkInDate = new Date(record.checkInDate);
        const dayOfWeek = checkInDate.getDay(); // 0 for Sunday, 1 for Monday, and so on

        // Increment the users count for the corresponding day in chartData
        chartData[dayOfWeek].checkIns++;
    });


    let Checkin={
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Today's Check-Ins",
        number: todaysCheckIns,
        dataKey: "checkIns",
        percentage: thisWeekCheckIns.length,
        reactIcon: "BsCalendar2Date",
        chartData: chartData
    }

    return(
        <TailwindWrapper className={"mt-5 justify-self-center"}>
            <div className="box box2">
                <ChartBox titleOfPercentage="This Week" {...Checkin} />
            </div>
        </TailwindWrapper>
    );
};

export default Checkin;