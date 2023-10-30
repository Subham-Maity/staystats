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

function calculateThisWeekModification(
    bookingData: BookingData[],
    startOfWeek: Date,
    endOfWeek: Date
): number {
  return bookingData.filter((record) => {
    const ModifiedDate: Date = new Date(record.updatedAt);
    return ModifiedDate >= startOfWeek && ModifiedDate <= endOfWeek;
  }).length;
}

function TodaysModifiedBooking() {
  const bookingData: BookingData[] = useSelector(selectAllbookings);
  const todaysModification: number =
      calculateTodaysModifiedBooking(bookingData);

  const currentDate = new Date();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setHours(0, 0, 0, 0);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

  const endOfWeek = new Date(currentDate);
  endOfWeek.setHours(23, 59, 59, 999);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  const thisWeekModification: number = calculateThisWeekModification(
      bookingData,
      startOfWeek,
      endOfWeek
  );

  const chartData = [
    { name: "Sun", users: 0 },
    { name: "Mon", users: 0 },
    { name: "Tue", users: 0 },
    { name: "Wed", users: 0 },
    { name: "Thu", users: 0 },
    { name: "Fri", users: 0 },
    { name: "Sat", users: 0 },
  ];

  const TodaysModifiedBooking = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Today's Modification",
    number: todaysModification,
    dataKey: "users",
    percentage: thisWeekModification, // Update to use thisWeekModification
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
