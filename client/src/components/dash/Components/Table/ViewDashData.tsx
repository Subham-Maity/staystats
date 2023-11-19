import TailwindWrapper from "@/components/dash/Components/Wrapper/TailwindWrapper";
import React, {useState, useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import {selectAllbookings} from "@/lib/features/bookingSlice";
import {selectAllUsers} from "@/lib/features/userSlice";
import {BookingData} from "@/lib/Types/Dashboard/types";
import {HotelData} from "@/lib/Types/Dashboard/types";
import {selectAllhotels} from "@/lib/features/hotelSlice";
import {FaTimes} from "react-icons/fa";

interface Props {
    onClose: (value: boolean) => void;
    variable: string;

}

const ifCheckInToday = [
    "Serial No.", "Hotel Name", 'Guest Name', "Phone Number", 'Booking Amount', 'Number of Persons', 'Number of Rooms', "Number of Days"
]

const ifBookingToday = [
    "Serial No.", "Hotel Name", 'Guest Name', "Phone Number", 'Booking Amount', 'Number of Persons', 'Number of Rooms', "Check-In Date", "Check-Out Date"
]

const ifUser = [
    "Serial No.", "User Name", "Phone Number", 'Hotels Name', 'Email Address'
]

const ifHotels = [
    "Serial No.", "Hotel Name", "Location", 'Owner Name', 'Phone Number'
]
const ViewDashData = ({onClose, variable}: Props) => {
    const [todaysCheckIns, setTodaysCheckIns] = useState<BookingData[]>();
    const [todaysCheckOuts, setTodaysCheckOuts] = useState<BookingData[]>();
    const [todaysBookings, setTodaysBookings] = useState<BookingData[]>();
    const [todaysModificationBooking, setTodaysModification] = useState<BookingData[]>();
    const [todaysUser, setTodaysUser] = useState<any[]>();
    const [todaysCancellation, setTodaysCancellation] = useState<any[]>();
    const [totalHotels, setTotalHotels] = useState<HotelData[]>();


    const bookingData: BookingData[] = useSelector(selectAllbookings);
    const users = useSelector(selectAllUsers);
    const hotels: HotelData[] = useSelector(selectAllhotels);


    const currentDate = new Date();
    //✅ Step-1 -> Calculate the number of check-ins for today
    const numberOfTodaysCheckIns = bookingData.filter((record: any) => {
        const checkInDate: string = record.checkInDate.split("T")[0];
        return new Date(checkInDate).toISOString().split("T")[0] ===
            new Date(currentDate).toISOString().split("T")[0];
    });

    const numberOfTodaysCheckOuts = bookingData.filter((record: any) => {
        const checkOutDate: string = record.checkOutDate.split("T")[0];
        return new Date(checkOutDate).toISOString().split("T")[0] ===
            new Date(currentDate).toISOString().split("T")[0];
    });

    const today: string = new Date().toISOString().split("T")[0];

    const todaysBooking: BookingData[] = bookingData.filter((record) => {
        const createdAtDate: Date = new Date(record.createdAt);
        const TodaysDate: string = createdAtDate.toISOString().split("T")[0];
        return TodaysDate === today;
    });

    const todaysModification: BookingData[] = bookingData.filter((record) => {
        const currentDate: string = new Date(record.createdAt).toISOString()
        const ModifiedDate: string = new Date(record.updatedAt).toISOString()
        console.log(ModifiedDate, "modifiedDate", currentDate, "currentDate");
        return ModifiedDate > currentDate;
    });

    const totalCancellation = bookingData.filter((record: any) => {
            return record.status === "CANCELLED";
        }
    );


    useEffect(() => {
            setTodaysCheckIns(numberOfTodaysCheckIns);
            setTodaysCheckOuts(numberOfTodaysCheckOuts);
            setTodaysBookings(todaysBooking);
            setTodaysModification(todaysModification);
            setTodaysUser(users);
            setTodaysCancellation(totalCancellation);
            setTotalHotels(hotels);
            }, [numberOfTodaysCheckIns, numberOfTodaysCheckOuts, todaysBooking, todaysModification, users, totalCancellation, hotels]);


    return (
        <>

            <div
                className=" max-h-[800px] overflow-y-scroll max-w-screen-2xl absolute items-center  border border-r border-gray-300/25 rounded-xl shadow md:flex-row  dark:border-gray-700 ">
                <TailwindWrapper>
                    <h1 className="text-center mx-auto text-xl font-bold my-2">{variable}</h1>
                    <button>
                        <FaTimes
                            className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700 cursor-pointer"
                            onClick={() => onClose(false)}/>
                    </button>
                    <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg cursor-pointer">
                        <table
                            className="p-4 w-full  text-sm text-left text-gray-500  dark:bg-inherit  dark:text-gray-400">
                            <thead className="text-sm text-gray-900 uppercase dark:text-gray-400">
                            <tr className="whitespace-nowrap">
                                {
                                    variable === "Today's Check-Ins" && ifCheckInToday.map((_, i) => (
                                        <th key={i} scope="col" className="px-4 py-2 text-center">
                                            {_}
                                        </th>
                                    ))
                                }
                                {
                                    variable === "Today's Check-Outs" && ifCheckInToday.map((_, i) => (
                                        <th key={i} scope="col" className="px-4 py-2 text-center">
                                            {_}
                                        </th>
                                    ))
                                }
                                {
                                    variable === "Today's Booking" && ifBookingToday.map((_, i) => (
                                        <th key={i} scope="col" className="px-4 py-2 text-center">
                                            {_}
                                        </th>
                                    ))
                                }
                                {
                                    variable === "Today's Modification" && ifBookingToday.map((_, i) => (
                                        <th key={i} scope="col" className="px-4 py-2 text-center">
                                            {_}
                                        </th>
                                    ))
                                }
                                {
                                    variable === "Total Users" && ifUser.map((_, i) => (
                                        <th key={i} scope="col" className="px-4 py-2 text-center">
                                            {_}
                                        </th>
                                    ))
                                }
                                {
                                    variable === "Total Cancellation" && ifBookingToday.map((_, i) => (
                                        <th key={i} scope="col" className="px-4 py-2 text-center">
                                            {_}
                                        </th>
                                    ))
                                }

                                {
                                    variable === "Total Hotels" && ifHotels.map((_, i) => (
                                        <th key={i} scope="col" className="px-4 py-2 text-center">
                                            {_}
                                        </th>
                                    ))
                                }

                            </tr>
                            </thead>
                            <tbody className="rounded-xl">
                            {
                                variable === "Today's Check-Ins" &&
                                todaysCheckIns?.map((_, i) => (
                                    <tr
                                        title="Click to view user details"
                                        key={i}

                                        className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <th
                                            scope="row"
                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {i + 1}
                                        </th>
                                        <td

                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {_.hotel.hotelName}
                                        </td>
                                        <td

                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {_.guestName}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.contactNumber}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.bookingAmount}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.numberOfPersons}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.numberOfRooms}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {new Date(_.checkOutDate).getDate() - new Date(_.checkInDate).getDate()}
                                        </td>


                                    </tr>
                                ))

                            }


                            {
                                variable === "Today's Check-Outs" &&
                                todaysCheckOuts?.map((_, i) => (
                                    <tr
                                        title="Click to view user details"
                                        key={i}

                                        className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <th
                                            scope="row"
                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {i + 1}
                                        </th>
                                        <td

                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {_.hotel.hotelName}
                                        </td>
                                        <td

                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {_.guestName}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.contactNumber}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.bookingAmount}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.numberOfPersons}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.numberOfRooms}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {new Date(_.checkOutDate).getDate() - new Date(_.checkInDate).getDate()}
                                        </td>


                                    </tr>
                                ))
                            }

                            {
                                variable === "Today's Booking" &&
                                todaysBookings?.map((_, i) => (
                                    <tr
                                        title="Click to view user details"
                                        key={i}

                                        className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <th
                                            scope="row"
                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {i + 1}
                                        </th>
                                        <td

                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {_.hotel.hotelName}
                                        </td>
                                        <td

                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {_.guestName}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.contactNumber}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.bookingAmount}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.numberOfPersons}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.numberOfRooms}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.checkInDate.split("T")[0]}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.checkOutDate.split("T")[0]}
                                        </td>


                                    </tr>
                                ))
                            }

                            {
                                variable === "Today's Modification" &&
                                todaysModificationBooking?.map((_, i) => (
                                    <tr
                                        title="Click to view user details"
                                        key={i}

                                        className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <th
                                            scope="row"
                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {i + 1}
                                        </th>
                                        <td

                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {_.hotel.hotelName}
                                        </td>
                                        <td

                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {_.guestName}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.contactNumber}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.bookingAmount}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.numberOfPersons}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.numberOfRooms}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.checkInDate.split("T")[0]}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.checkOutDate.split("T")[0]}
                                        </td>


                                    </tr>
                                ))
                            }

                            {
                                variable === "Total Users" &&
                                todaysUser?.map((_, i) => (
                                    <tr
                                        title="Click to view user details"
                                        key={i}

                                        className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <th
                                            scope="row"
                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {i + 1}
                                        </th>
                                        <td

                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {_.name}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.phoneNumber}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.hotel.map((hotel: any) => hotel.hotelName).join(", ")}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.email}
                                        </td>
                                    </tr>
                                ))}

                            {
                                variable === "Total Cancellation" &&
                                todaysCancellation?.map((_, i) => (
                                    <tr
                                        title="Click to view user details"
                                        key={i}

                                        className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <th
                                            scope="row"
                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {i + 1}
                                        </th>
                                        <td

                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {_.hotel.hotelName}
                                        </td>
                                        <td

                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {_.guestName}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.contactNumber}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.bookingAmount}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.numberOfPersons}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.numberOfRooms}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.checkInDate.split("T")[0]}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.checkOutDate.split("T")[0]}
                                        </td>


                                    </tr>
                                ))
                            }

                            {
                                variable === "Total Hotels" &&
                                totalHotels?.map((_, i) => (
                                    <tr
                                        title="Click to view user details"
                                        key={i}

                                        className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <th
                                            scope="row"
                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {i + 1}
                                        </th>
                                        <td

                                            className="text-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                        >
                                            {_.hotelName}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.location}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.ownerName}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {_.frontOfficeContact}
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>


                </TailwindWrapper>

            </div>


        </>
    );
};

export default ViewDashData;
  