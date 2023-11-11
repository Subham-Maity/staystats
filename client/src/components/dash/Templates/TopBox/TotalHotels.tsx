import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import {HotelData} from "@/lib/Types/Dashboard/types";
import {useSelector} from "react-redux";
import { selectAllhotels} from "@/lib/features/hotelSlice";

function TotalHotels() {
    const hotels: HotelData[] = useSelector(selectAllhotels);

    function calculateTotalHotels(hotels:any) {
        //@ts-ignore
        return hotels.filter(item => item.isActive === true);
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
    const totalHotels = calculateTotalHotels(hotels);


    //@ts-ignore
    const newHotels = totalHotels.filter(item => {
        const createdDate = new Date(item.createdAt);
        return createdDate >= startOfWeek && createdDate <= endOfWeek;
    });

    let thisWeeknewHotels= newHotels.length;

    let chartData = [
        { name: "Sun", hotels: 0 },
        { name: "Mon", hotels: 0 },
        { name: "Tue", hotels: 0 },
        { name: "Wed", hotels: 0 },
        { name: "Thu", hotels: 0 },
        { name: "Fri", hotels: 0 },
        { name: "Sat", hotels: 0 },
    ];

    totalHotels.forEach((record:any) => {
        const cancelDate = new Date(record.createdAt);
        const dayOfWeek = cancelDate.getDay(); // 0 for Sunday, 1 for Monday, and so on// Increment the cancellations count for the corresponding day in chartData
        chartData[dayOfWeek].hotels++;
    });

     const TotalHotels = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Total Hotels",
        number: totalHotels.length,
        dataKey: "hotels",
        percentage: thisWeeknewHotels,
        reactIcon: "BsCalendar2Date",
        chartData: chartData
    };

    return (
        <TailwindWrapper className={"mt-5 justify-self-center"}>
            <div className="box box2">
                <ChartBox titleOfPercentage="This Week" {...TotalHotels} />
            </div>
        </TailwindWrapper>
    );
}

export default TotalHotels;