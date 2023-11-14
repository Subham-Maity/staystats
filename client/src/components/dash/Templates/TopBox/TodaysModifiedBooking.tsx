import ChartBox from "@/components/dash/Components/ChartBox/ChartBox";
import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import { BookingData } from "@/lib/Types/Dashboard/types";
import { useSelector } from "react-redux";
import { selectAllbookings } from "@/lib/features/bookingSlice";

function calculateTodaysModifiedBooking(bookingData: BookingData[]): number {
  const currentDate: string = new Date().toISOString().split("T")[0];
  const todaysModification: BookingData[] = bookingData.filter((record) => {
    const ModifiedDate: string = new Date(record.updatedAt)
        .toISOString()
        .split("T")[0];
    return ModifiedDate === currentDate;
  });
  return todaysModification.length;
}

function TodaysModifiedBooking() {
  const bookingData: BookingData[] = useSelector(selectAllbookings);
  const todaysModification: number =
      calculateTodaysModifiedBooking(bookingData);

  const currentDate = new Date();

  const endOfWeek = new Date(currentDate);
  endOfWeek.setHours(23, 59, 59, 999);
  endOfWeek.setDate(currentDate.getDate() - 6);


  const chartData = [
    { name: "Sun", users: 0 },
    { name: "Mon", users: 0 },
    { name: "Tue", users: 0 },
    { name: "Wed", users: 0 },
    { name: "Thu", users: 0 },
    { name: "Fri", users: 0 },
    { name: "Sat", users: 0 },
  ];

  const thisWeekModifiedBookings = bookingData.filter((record) => {
    const ModifiedDate: Date = new Date(record.updatedAt);
    return ModifiedDate <= currentDate && ModifiedDate >= endOfWeek;
  });

  thisWeekModifiedBookings.forEach((record) => {
    const ModifiedDate = new Date(record.updatedAt);
    const dayOfWeek = ModifiedDate.getDay(); // 0 for Sunday, 1 for Monday, and so on

    // Increment the modified bookings count for the corresponding day in chartData
    chartData[dayOfWeek].users++;
  });

  const TodaysModifiedBooking = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Today's Modification",
    number: todaysModification,
    dataKey: "users",
    percentage: thisWeekModifiedBookings.length, // Update to use thisWeekModification
    reactIcon: "BsCalendar2Date",
    chartData: chartData,
  };

  return (
      <TailwindWrapper className="mt-5 justify-self-center">
        <div className="box box2">
          <ChartBox titleOfPercentage="This Week" {...TodaysModifiedBooking} />
        </div>
      </TailwindWrapper>
  );
}

export default TodaysModifiedBooking;
