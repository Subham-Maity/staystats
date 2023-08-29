interface Props {
  lead?: {
    _id?: string;
    guestName?: string;
    checkInDate?: string;
    checkOutDate?: string;
    numberOfPerson?: string;
    numberOfRooms?: string;
    contactNumber?: string;
    area?: string;
    budget?: string;
    specialRequirements?: string;
    status?: string;
    createdBy?: { name?: string; username?: string };
    approvedBy?: { name?: string; username?: string };
    isCancelled?: boolean;
    serialNumber?: string;
  };
  onClose: (value: boolean) => void;
}

import Select from "react-select";

import { FaTimes } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";

const ViewLead = ({ lead, onClose }: Props) => {
  // console.log( lead, "userdata");

  return (
    <form className="p-6 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 w-full">
      <div className="flex w-full mb-6">
        <p className="font-bold text-lg">Lead Details</p>
        <span
          onClick={() => onClose(false)}
          className="ml-auto cursor-pointer text-xl"
        >
          &times;
        </span>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <label
            htmlFor="guest_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Guest Name
          </label>
          <input
            type="text"
            name="guest_name"
            id="guest_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ex: Digha Saikatabas"
            value={lead?.guestName}
            required
            disabled
          />
        </div>
        <div>
          <label
            htmlFor="check_in_date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Check-in Date <span className="text-red-500">*</span>
          </label>
          <input
            id="check_in_date"
            name="check_in_date"
            type="text"
            value={new Date(lead?.checkInDate || "").toDateString()}
            disabled
            className="uppercase bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="08.08.2023"
          />
        </div>
        <div>
          <label
            htmlFor="check_out_date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Check-out Date <span className="text-red-500">*</span>
          </label>
          <input
            id="check_out_date"
            name="check_out_date"
            type="text"
            value={new Date(lead?.checkOutDate || "").toDateString()}
            disabled
            className="uppercase bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="09.09.2023"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="+91 999999999"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value={lead?.contactNumber}
            disabled
          />
        </div>
        <div className="">
          <label
            htmlFor="nop"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of Persons <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="nop"
            id="nop"
            value={lead?.numberOfPerson}
            disabled
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Eg. 4"
          />
        </div>
        <div className="">
          <label
            htmlFor="nor"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of Rooms <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="nor"
            id="nor"
            value={lead?.numberOfRooms}
            disabled
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Eg. 2"
          />
        </div>
        <div className="">
          <label
            htmlFor="cn"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="cn"
            name="cn"
            value={lead?.contactNumber}
            disabled
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+91 999999999"
          />
        </div>
        <div>
          <label
            htmlFor="area"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Area <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="area"
            id="area"
            value={lead?.area}
            disabled
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="budget"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Budget <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="budget"
            id="budget"
            disabled
            value={lead?.budget}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="createdBy"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Generated By <span className="text-red-500">*</span>
          </label>
          <input
            type="createdBy"
            name="createdBy"
            id="createdBy"
            disabled
            value={lead?.createdBy?.name || lead?.createdBy?.username || ""}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="approvedBy"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Approved By <span className="text-red-500">*</span>
          </label>
          <input
            type="approvedBy"
            name="approvedBy"
            id="approvedBy"
            disabled
            value={lead?.approvedBy?.name || lead?.approvedBy?.username || "Not approved yet"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="">
          <label
            htmlFor="specialReq"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Special Requirements
          </label>
          <textarea
            cols={8}
            value={lead?.specialRequirements}
            disabled
            id="specialReq"
            name="specialReq"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Well well well"
          />
        </div>

        {/* <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div> */}

      </div>
    </form>
  );
};

export default ViewLead;
