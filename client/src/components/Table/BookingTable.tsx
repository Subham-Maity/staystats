
import React, { useEffect, useState } from "react";
import { MdWarningAmber } from "react-icons/md";

interface TableProps {
    bookingData: {
        hotelName?: string;
        guestName?: string;
        checkInDate?: string;
        checkOutDate?: string;
        roomCategory?: string;
        numberOfRoom?: string;
        numberOfPerson?: string;
        bookingAmount?: string;
        advanceAmount?: string;
        dueAmount?: string;
        advanceDate?: string;
        bookingSource?: string;
        bookingBy?: string;
        plan?: string;
        contactNumber?: string;
        remarks?: string;
    }[];
}

const BookingTable = ({ bookingData }: TableProps) => {
    return (
        <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg cursor-pointer">
            <table className="w-full border-white border-2 text-sm text-left text-gray-500 dark:bg-inherit dark:text-gray-400">
                <thead className="text-xs text-gray-400 uppercase dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Hotel Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Guest Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Check-in Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Check-out Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Room Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Number of Room
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Number of Person
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Booking Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Advance Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Due Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Advance Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Booking Source
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Booking By
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Plan
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Contact Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Remarks
                    </th>
                </tr>
                </thead>
                <tbody className="rounded-xl">
                {bookingData.length === 0 && (
                    <tr
                        className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <MdWarningAmber className="text-4xl text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </tr>
                )}
                {bookingData.length > 0 && (
                    <>
                        {bookingData.map((booking: any, index: number) => {
                            return (
                                <tr
                                    key={index}
                                    className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                    >
                                        {booking.hotelName || ""}
                                    </th>
                                    <td className="px-6 py-4">{booking.guestName || ""}</td>
                                    <td className="px-6 py-4">{booking.checkInDate || ""}</td>
                                    <td className="px-6 py-4">{booking.checkOutDate || ""}</td>
                                    <td className="px-6 py-4">{booking.roomCategory || ""}</td>
                                    <td className="px-6 py-4">{booking.numberOfRoom || ""}</td>
                                    <td className="px-6 py-4">{booking.numberOfPerson || ""}</td>
                                    <td className="px-6 py-4">{booking.bookingAmount || ""}</td>
                                    <td className="px-6 py-4">{booking.advanceAmount || ""}</td>
                                    <td className="px-6 py-4">{booking.dueAmount || ""}</td>
                                    <td className="px-6 py-4">{booking.advanceDate || ""}</td>
                                    <td className="px-6 py-4">{booking.bookingSource || ""}</td>
                                    <td className="px-6 py-4">{booking.bookingBy || ""}</td>
                                    <td className="px-6 py-4">{booking.plan || ""}</td>
                                    <td className="px-6 py-4">{booking.contactNumber || ""}</td>
                                    <td className="px-6 py-4">{booking.remarks || ""}</td>
                                </tr>
                            );
                        })}
                    </>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default BookingTable;
