interface Props {
    booking: {
        hotel?: {
            hotelName?: string;
        };
        guestName?: string;
        checkInDate: Date;
        checkOutDate: Date;
        roomCatagory?: string;
        numberOfRooms?: number;
        numberOfPersons?: number;
        bookingAmount?: number;
        dueAmount?: number;
        advanceDate: Date;
        bookingSource?: string;
        booikingBy?: string;
        plan?: string;
        contactNumber?: string;
        remarks?: string;
        
    }
    onClose: (value: boolean) => void;
  }
  
  import { FaTimes } from "react-icons/fa";
  import React, { useState, useEffect, useRef } from "react";
  
  const ViewBooking = ({ booking, onClose }: Props) => {
    console.log(booking, "userdata");

    return (
        <form
        className="p-6 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 "
      >
        <FaTimes
          onClick={() => onClose(false)}
          className="ml-auto cursor-pointer"
        />
        <div className="grid gap-6 mb-6 md:grid-cols-3">
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
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="09.09.2023"
              required
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
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Booking Amount
            </label>
            <input
              name="bookingAmount"
              type="number"
              id="bookingAmount"
              value={booking?.bookingAmount}
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter booking amount"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="da"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Advance Amount
            </label>
            <input
              name="advanceAmount"
              type="number"
              id="advanceAmount"
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter advance amount"
              required
            />
          </div>
          <div className="mb-6">
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
            />
          </div>
  
          <div className="mb-6">
            <label
              htmlFor="ad"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Advance Date
            </label>
            <input
            value={new Date(booking?.advanceDate).toISOString()}
              id="Advancedate"
              name="Advancedate"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="24.05.26"
              required
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
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="24.05.26"
              required
            />
          </div>
          <div className="mb-6">
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
            />
          </div>
          <div className="mb-6">
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
            />
          </div>
  
          <div className="mb-6">
            <label
              htmlFor="remark"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Remarks
            </label>
            <input
              type="text"
              id="remark"
              name="remark"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Very Good"
              required
            />
          </div>
        </div>
      </form>
    );
  };
  
  export default ViewBooking;
  