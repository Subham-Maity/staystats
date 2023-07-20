'use client'
import React, { useEffect, useState } from "react";
import { MdWarningAmber } from "react-icons/md";
interface TableProps {
  userData: {

    name?: string;
    phone?: string;
    email?: string;
    hotel?: string;
  }[];
}

const Table = ({ userData }: TableProps) => {
  console.log(userData, "userdata")

  return (
      <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg cursor-pointer">

        <table className="w-full border-white border-2 text-sm text-left text-gray-500  dark:bg-inherit  dark:text-gray-400">
          <thead className="text-xs text-gray-400 uppercase dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Password
            </th> */}
            <th scope="col" className="px-6 py-3">
              Hotel
            </th>
          </tr>
          </thead>
          <tbody className="rounded-xl">
          {userData.length === 0 && (
              <td
                  className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <MdWarningAmber className="text-4xl text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </td>
          )}
          {userData.length > 0 && (
              <>
                {userData.map((user: any, index: number) => {
                  console.log(user.name);

                  return (
                      <tr
                          key={index}
                          className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                        >
                          {user.name || ""}
                        </th>
                        <td className="px-6 py-4">{user.phoneNumber || ""}</td>
                        <td className="px-6 py-4">{user.email || ""}</td>
                        {/* <td className="px-6 py-4"></td> */}
                        <td className="px-6 py-4">{user.hotel || ""}</td>
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

export default Table;