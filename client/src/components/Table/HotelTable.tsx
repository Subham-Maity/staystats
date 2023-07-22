'use client'
import React, { useEffect, useState } from "react";
import { MdWarningAmber } from "react-icons/md";
interface TableProps {
  hotelData: {

    hotelName?: string;
    ownerName?: string;
    location?: string;
    ownerContact?: {
        email?: string;
    };
    frontOfficeContact?: string;
  }[];
}

const HotelTable = ({ hotelData }: TableProps) => {
    console.log(hotelData, "userdata")

  return (
      <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg cursor-pointer">

        <table className="w-full border-white border-2 text-sm text-left text-gray-500  dark:bg-inherit  dark:text-gray-400">
          <thead className="text-xs text-gray-400 uppercase dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Hotel Name
            </th>
            <th scope="col" className="px-6 py-3">
              Owner Name
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Onwer Email
            </th>
            <th scope="col" className="px-6 py-3">
              Office Contact
            </th>
          </tr>
          </thead>
          <tbody className="rounded-xl">
          {hotelData.length === 0 && (
              <tr
                  className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <MdWarningAmber className="text-4xl text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </tr>
          )}
          {hotelData.length > 0 && (
              <>
                {hotelData.map((hotel: any, index: number) => {
                //   console.log(hotel.hotelName);

                  return (
                      <tr
                          key={index}
                          className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                        >
                          {hotel.hotelName || ""}
                        </th>
                        <td className="px-6 py-4">{hotel.ownerName || ""}</td>
                        <td className="px-6 py-4">{hotel.location || ""}</td>
                        <td className="px-6 py-4">{hotel.ownerContact.email || ""}</td>
                        <td className="px-6 py-4">{hotel.frontOfficeContact}</td>
                      </tr>
                  )
                })}
              </>
          )}
          </tbody>
        </table>
      </div>
  );
};

export default HotelTable;