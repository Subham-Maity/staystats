import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import { DateRangePicker } from "react-date-range";
import axios from "@/utils/axios";
import { toast } from "react-toastify";

type Props = {
  setFilterData: any;
};

const Filter = ({ setFilterData }: Props) => {
  const [hotels, setHotels] = React.useState<any>([]);
  const [users, setUsers] = React.useState<any>([]);

  const [filter, setFilter] = useState({
    guestName: "",
    hotelName: "--select--",
    bookingSource: "--select--",
    serialNumber: "",
    filterBy: "--select--",
    status: "--select--",
    addedBy: "--select--",
    dateRange: {},
  });
  const [isFilterOptionSelected, setisFilterOptionSelected] =
    useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selectionRange, setSelectionRange] = React.useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  useEffect(() => {
    const getHotels = async () => {
      try {
        setLoading(true);
        const { data } = await axios.post(`/hotel/get-all-hotels`);
        const {data: users} = await axios.get(`/user/get-users`);
        // console.log(data);
        if (!data.error) {
          setHotels(data.hotels);
          setUsers(users.users)
          //   console.log(hotels)
        } else {
          toast.error(data.error);
        }
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        toast.error(error.message);
        console.log(error);
      }
    };
    getHotels();
  }, []);

  const handleSelect = (ranges: any) => {
    // console.log(ranges)
    setSelectionRange(ranges.selection);
    filter.dateRange = ranges.selection;
  };

  const handleSubmit = () => {
    // console.log(filter)
    setFilterData(filter);
  };
  return (
    <div className="rounded-md shadow-lg w-full flex justify-start items-start p-4 flex-col">
      <h1 className="font-bold text-xl mb-2">Filter</h1>

      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-4 justify-start items-start">
          <div className="flex justify-center items-center gap-2">
            <div className="">
              <label htmlFor="" className="whitespace-nowrap">
                Guest name
              </label>
              <input
              value={filter.guestName}
                onChange={(e) => {
                  setFilter({...filter, guestName: e.target.value})
                }}
                placeholder="Enter guest name"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="">
              <label htmlFor="" className="whitespace-nowrap">
                Hotel name
              </label>
              <select
                onChange={(e) => {
                  setFilter({...filter, hotelName: e.target.value})
                }}
                name=""
                id="hotel-drop-down"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={filter.hotelName && filter.hotelName}
              >
                <option disabled selected value={"--select--"}>
                  --Select--
                </option>
                {hotels.map((hotel: any, index: any) => {
                  return (
                    <option key={hotel._id} value={hotel._id}>
                      {hotel.hotelName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="">
              <label htmlFor="" className="whitespace-nowrap">
                Booking source
              </label>
              <select
                onChange={(e) => {
                  setFilter({...filter, bookingSource: e.target.value})
                }}
                id="source-drop-down"
                name=""

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={filter.bookingSource}
              >
                <option disabled selected value={'--select--'}>
                  --Select--
                </option>
                <option value="Booking.com">Booking.com</option>
                <option value="Agoda">Agoda</option>
                <option value="Cleartrip">Cleartrip</option>
                <option value="Yatra">Yatra</option>
                <option value="Sayngo">Sayngo</option>
                <option value="Offline">Offline</option>
                <option value="Travel Agent">Travel Agent</option>
                <option value="Via.com">Via.com</option>
                <option value="Paytm">Paytm</option>
                <option value="Lxiogo">Lxiogo</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div>
              <label htmlFor="" className="whitespace-nowrap">
                Sl. no
              </label>
              <input
                onChange={(e) => {
                  setFilter({...filter, serialNumber: e.target.value})
                }}
                type="number"
                value={filter.serialNumber}
                placeholder="Enter serial number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="">
              <label htmlFor="" className="whitespace-nowrap">
                Added By
              </label>
              <select
                onChange={(e) => {
                  setFilter({...filter, addedBy: e.target.value})
                  // console.log(e.target.value)
                }}
                name=""
                id="hotel-drop-down"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={filter.addedBy && filter.addedBy}
              >
                <option disabled selected value={"--select--"}>
                  --Select--
                </option>
                {users.map((user: any, index: any) => {
                  // console.log(user)
                  return (
                    <option key={user._id} value={user._id}>
                      {user.name || user.username}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="">
              {" "}
              <h1>Status</h1>
              <select
                onChange={(e) => {
                  setisFilterOptionSelected(true);
                  setFilter({...filter, status: e.target.value})
                }}
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={filter.status && filter.status}

              >
                <option disabled selected value={'--select--'}>
                  --Select--
                </option>
                <option value="CONFIRMED">Confirmed</option>
                <option value="CANCELLED">Cancelled</option>


              </select>
            </div>
            <div className="">
              {" "}
              <h1>Date Range By</h1>
              <select
                onChange={(e) => {
                  setisFilterOptionSelected(true);
                  setFilter({...filter, filterBy: e.target.value})
                }}
                name=""
                id="filterBy-drop-down"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={filter.filterBy && filter.filterBy}

              >
                <option disabled selected value={'--select--'}>
                  --Select--
                </option>
                <option value="createdAt">Created</option>
                <option value="checkInDate">Arrival</option>

                <option value="checkOutDate">Departure</option>
                <option value="updatedAt">Cancelled</option>

              </select>
            </div>
          </div>
        </div>
        {isFilterOptionSelected && (
          <div className="flex flex-col">
            <h1 className="mb-2 font-bold">Select date range</h1>
            <DateRangePicker
              showMonthAndYearPickers={true}
              ranges={[selectionRange]}
              onChange={handleSelect}
            />
          </div>
        )}
      </div>
      <div className="mt-2 flex gap-2">
        <button
          onClick={handleSubmit}
          type="submit"
          disabled={
            !filter.guestName && filter.hotelName === "--select--" && filter.bookingSource === "--select--" && !filter.serialNumber && filter.filterBy === "--select--" && filter.status === "--select--" && filter.addedBy === "--select--"
          }
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
        >
          Search
        </button>
        <button
          onClick={()=>{
            setisFilterOptionSelected(false)
            setFilter({
              guestName: "",
              hotelName: "--select--",
              bookingSource: "--select--",
              serialNumber: "",
              filterBy: "--select--",
              dateRange: {},
              status: "--select--",
              addedBy: "--select--",
            })
            setFilterData({
              guestName: "",
              hotelName: "",
              bookingSource: "",
              serialNumber: "",
              filterBy: "",
              dateRange: {},
              status: "",
              addedBy: "",
            })
          }}
          type="submit"
          className=" text-blue-700 border-2 border-blue-700 inset-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700 disabled:opacity-50 hover:text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
