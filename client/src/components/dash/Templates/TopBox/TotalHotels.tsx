import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import {HotelData} from "@/lib/Types/Dashboard/types";
import {useSelector} from "react-redux";
import {hotelSlice, selectAllhotels} from "@/lib/features/hotelSlice";

function TotalHotels() {
    const hotels: HotelData[] = useSelector(selectAllhotels);

    //🚀 Total Hotel Count
    //✅ Step-1 -> Calculate the number of hotels
    function calculateTotalHotels(hotelData: HotelData[]) {
        return hotelData.length;
    }
    const totalHotels: number = calculateTotalHotels(hotels);

     const TotalHotels = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Total Hotels",
        number: totalHotels,
        dataKey: "users",
        percentage: 45,
        reactIcon: "BsCalendar2Date",
        chartData: [
            { name: "Sun", users: 0 },
            { name: "Mon", users: 0 },
            { name: "Tue", users: 0 },
            { name: "Wed", users: 0 },
            { name: "Thu", users: 0 },
            { name: "Fri", users: 0 },
            { name: "Sat", users: 0 },
        ],
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