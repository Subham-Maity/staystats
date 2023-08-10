interface Props {
    user?: {
        name?: string;
        email?: string;
        phoneNumber?: string;
        role?: string;
        hotel?: {
            _id: string;
            hotelName: string;
        }[]

    }
    onClose: (value: boolean) => void;
  }

  import Select from "react-select";
  
  import { FaTimes } from "react-icons/fa";
  import React, { useState, useEffect, useRef } from "react";
  
  const ViewUser = ({ user, onClose }: Props) => {
    // console.log( user, "userdata");

    return (
        <form
        
        className="p-6 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 w-full"
       
      >
        <div className="flex w-full mb-6">
        <p className="font-bold text-lg">User Details</p>
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
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-50"
              placeholder="Ex: Digha Saikatabas"
              value={user?.name}
              required
              disabled
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
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-50 ${
                ""
              } `}
              placeholder="+91 999999999"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              value={user?.phoneNumber}
              disabled
             
            />
          </div>
  
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-50"
              placeholder="hotel@company.com"
              value={user?.email}
              disabled
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Role
            </label>
            <input
              type="text"
              name="role"
              id="role"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-50"
              placeholder="hotel@company.com"
              value={user?.role}
              disabled
              required
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
  
          <div className="w-[340px]">
            <label
              htmlFor="hotel"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Hotel Name
            </label>
           
                        <textarea
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-50"
                        value={user?.hotel?.map((hotel:any)=>hotel.hotelName).join(", ") || "Deleted Hotel"}
                        disabled
                        ></textarea>
                    
            {/* <Select
              id="hotel"
              name="hotel"
              options={reactSelectOptions}
              isMulti
              value={!loading ? selectedHotels : ["Fetching..."]}
              onChange={handleHotelSelection}
              className="w-full"
              isDisabled={loading}
            /> */}
            {/* {availableHotels.length === 0 && (
              <div className="text-xs text-red-600 font-medium">
                No Hotels Available*
              </div>
            )} */}
          </div>
        </div>
      </form>
    );
  };
  
  export default ViewUser;
  