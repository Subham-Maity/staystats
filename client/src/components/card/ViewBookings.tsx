interface Props {
    booking: {
        hotel: {
            hotelName: string;
        };
        guestName: string;
        checkInDate: Date;
        checkOutDate: Date;
        roomCategory: string;
        numberOfRooms: number;
        numberOfPersons: number;
        bookingAmount: number;
        dueAmount: number;
        advanceAmount: number;
        advanceDate: Date;
        bookingSource: string;
        bookingBy: string;
        accountType: string;
        plan: string;
        guestEmail: string;
        contactNumber: string;
        remarks: string;
        
    }
    onClose: (value: boolean) => void;
  }
  
  import { FaTimes } from "react-icons/fa";
  import React, { useState, useEffect, useRef } from "react";
  
  const ViewBooking = ({ booking, onClose }: Props) => {
    // console.log(booking, "userdata");

    return (
        <form
        className="z-50 p-6 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 "
      >
        <div className="flex w-full mb-6">
        <p className="font-bold text-lg">Booking Details</p>
        <span
          onClick={() => onClose(false)}
          className="ml-auto cursor-pointer text-xl"
        >
          &times;
        </span>
        </div>
        <div className="grid gap-2 grid-cols-3  md:grid-cols-3">
          {/* <div>
            <label
              htmlFor="hotel"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Hotel Name
            </label>
            <input
              type="text"
              id="hotel"
              name="hotel"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ex: Digha Saikatabas"
              required
            />
          </div> */}
          <div>
            <label
              htmlFor="hotel"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Hotel Name
            </label>
            <input
              type="text"
              id="hotel"
              name="hotel"
              value={booking?.hotel?.hotelName || "Deleted hotel"}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ex: Digha Saikatabas"
              required
              disabled
            />
            
          </div>
          <div>
            <label
              htmlFor="guest_name"
              className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Guest Name
            </label>
            <input
            value={booking?.guestName}
              type="text"
              id="guest_name"
              name="guest_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ex: Subham"
              required
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="check_in_date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Check-in Date
            </label>
            <input
            value={new Date(booking?.checkInDate).toLocaleDateString()}
              id="startDate"
              name="startDate"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="08.08.2023"
              required
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="check_out_date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Check-out Date
            </label>
            <input
            value={new Date(booking?.checkOutDate).toLocaleDateString()}
              id="endDate"
              name="endDate"
              type="text"
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="09.09.2023"
              required
            />
          </div>
          <div>
            <label
              htmlFor="roomCategory"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Room Category
            </label>
            <input
              id="endDate"
              name="endDate"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="09.09.2023"
              required
              disabled
              value={booking?.roomCategory}
            />
          </div>
          <div>
            <label
              htmlFor="roomCategory"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Account Type
            </label>
            <input
              id="endDate"
              name="endDate"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="09.09.2023"
              required
              disabled
              value={booking?.accountType}
            />
          </div>
          <div>
            <label
              htmlFor="nor"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number of Room
            </label>
            <input
              type="text"
              id="nor"
              name="nor"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="20"
              required
              disabled
              value={booking?.numberOfRooms}
            />
          </div>
          <div>
            <label
              htmlFor="nop"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number of Person
            </label>
            <input
              type="number"
              id="nop"
              name="nop"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="4"
              required
              disabled
              value={booking?.numberOfPersons}
            />
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Booking Amount
            </label>
            <input
              name="bookingAmount"
              type="text"
              id="bookingAmount"
              value={booking?.bookingAmount}
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter booking amount"
              required
              disabled
            />
          </div>
          <div className="">
            <label
              htmlFor="da"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Advance Amount
            </label>
            <input
              name="advanceAmount"
              type="text"
              id="advanceAmount"
              value={booking?.advanceAmount}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter advance amount"
              required
              disabled
            />
          </div>
          <div className="">
            <label
              htmlFor="da"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Due Amount
            </label>
            <input
              name="dueamount"
              id="duedate"
              type="text"
              value={booking?.dueAmount}
              readOnly
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              disabled
            />
          </div>
  
          <div className="">
            <label
              htmlFor="ad"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Advance Date
            </label>
            <input
            value={new Date(booking?.advanceDate).toISOString().split('T')[0]}
              id="Advancedate"
              name="Advancedate"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="24.05.26"
              required
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="paymentby"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Booking Source
            </label>
            <input
              id="Advancedate"
              name="Advancedate"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="24.05.26"
              required
              disabled
              value={booking?.bookingSource}
            />
          </div>
          <div className="">
            <label
              htmlFor="bb"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Booking By
            </label>
            <input
              type="text"
              id="bb"
              name="bb"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Someone"
              disabled
              required
              value={booking?.bookingBy}
            />
          </div>
          <div>
            <label
              htmlFor="plan"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Plan
            </label>
            <input
              type="text"
              id="bb"
              name="bb"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Someone"
              disabled
              required
              value={booking?.plan}
            />
          </div>
          <div className="">
            <label
              htmlFor="cn"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contact Number
            </label>
            <input
              type="number"
              id="cn"
              name="cn"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+91 999999999"
              required
              value={booking?.contactNumber}
              disabled
            />
          </div>
          <div className="">
            <label
              htmlFor="cn"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Guest Email
            </label>
            <input
              type="text"
              id="cn"
              name="cn"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+91 999999999"
              required
              value={booking?.guestEmail}
              disabled
            />
          </div>
  
          <div className="">
            <label
              htmlFor="remark"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Remarks
            </label>
            <input
            value={booking?.remarks}
              type="text"
              id="remark"
              name="remark"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Very Good"
              required
              disabled
            />
          </div>
        </div>
      </form>
    );
  };
  
  export default ViewBooking;
  