import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import { DateRangePicker } from "react-date-range";
import axios from "@/utils/axios";
import { toast } from "react-toastify";

type Props = {
    setFilterData: any
};

const Filter = ({setFilterData}: Props) => {
  const [hotels, setHotels] = React.useState<any>([]);
  const [filter,setFilter] = useState({
    guestName: "",
    hotelName: "",
    bookingSource: "",
    serialNumber: "",
    filterBy: "",
    dateRange: {}
  })
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
        // console.log(data);
        if (!data.error) {
          setHotels(data.hotels);
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
    filter.dateRange = ranges.selection
    
  };


  const handleSubmit = () => {
    // console.log(filter)
    setFilterData(filter)

  }
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
              onChange={(e) => filter.guestName = e.target.value}
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
              onChange={(e) => filter.hotelName = e.target.value}
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
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
                onChange={(e) => filter.bookingSource= e.target.value}
                id="paymentby"
                name="paymentby"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option defaultValue="choose">Choose</option>
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
              onChange={(e) => filter.serialNumber = e.target.value}
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="">
              {" "}
              <h1>Select</h1>
              <select
              onChange={(e) => {setisFilterOptionSelected(true); filter.filterBy = e.target.value} }
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option defaultValue="select">
                  --Select--
                </option>
                <option value="createdAt">Created</option>
                <option value="checkIndate">Arrival</option>

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
      <div className="mt-2">
        <button
        onClick={handleSubmit}
          type="submit"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
