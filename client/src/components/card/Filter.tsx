"use client";
import {
  Button,
  Card,
  CardBody,
  Select as NextUISelect,
  SelectItem as NextUISelectItem,
} from "@nextui-org/react";
import React, { useContext, useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { Calendar as CalendarIcon, Home } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendars } from "@/components/ui/calendar";
import Context from "@/context/Context";

type Props = {
  setStayColor: any;
  getStayBookings: any;
  setFilterData: any;
  isFilterOpen: boolean;
  bookingStats: {
    totalBookingAmt: number;
    totalAdvanceAmt: number;
    totalDueAmt: number;
  };
};

const Filter = ({
  setStayColor,
  getStayBookings,
  setFilterData,
  isFilterOpen,
  bookingStats,
}: Props) => {
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

  const [stayHotels, setStayHotels] = useState({
    hotelName: "--select--",
  });
  const [isFilterOptionSelected, setisFilterOptionSelected] =
    useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selectionRange, setSelectionRange] = React.useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const { date, setDate } = useContext(Context);
  useEffect(() => {
    const getHotels = async () => {
      try {
        setLoading(true);
        const { data } = await axios.post(`/hotel/get-all-hotels`);
        const { data: users } = await axios.get(`/user/get-all-users`);

        if (!data.error) {
          setHotels(data.hotels);
          setUsers(users.users);
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
    const startDate = new Date(ranges.selection.startDate);
    const endDate = new Date(ranges.selection.endDate);

    startDate.setMinutes(
      startDate.getMinutes() - startDate.getTimezoneOffset(),
    );
    endDate.setMinutes(endDate.getMinutes() - endDate.getTimezoneOffset());

    setSelectionRange({ startDate, endDate, key: "selection" });

    setFilter({
      ...filter,
      dateRange: {
        startDate: new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate(),
          0,
          0,
          0,
        ),
        endDate: new Date(
          endDate.getFullYear(),
          endDate.getMonth(),
          endDate.getDate(),
          23,
          59,
          59,
        ),
      },
    });
  };

  const handleSubmit = () => {
    setFilterData(filter);
  };

  console.log(stayHotels.hotelName + "selected hotel");
  if (isFilterOpen) {
    return (
      <>
        <div className="rounded-md w-full flex-wrap flex justify-start items-start p-4 flex-col">
          <div className="flex  justify-between w-full lg:flex-row flex-col gap-4">
            <div className="flex flex-col gap-4 justify-start items-start">
              <div className="flex lg:justify-center lg:items-center gap-2 flex-wrap">
                <div className="">
                  <label htmlFor="" className="whitespace-nowrap">
                    Guest name
                  </label>
                  <input
                    value={filter.guestName}
                    onChange={(e) => {
                      setFilter({
                        ...filter,
                        guestName: e.target.value.toLocaleUpperCase(),
                      });
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
                      setFilter({ ...filter, hotelName: e.target.value });
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
                      setFilter({ ...filter, bookingSource: e.target.value });
                    }}
                    id="source-drop-down"
                    name=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={filter.bookingSource}
                  >
                    <option disabled selected value={"--select--"}>
                      --Select--
                    </option>
                    <option value="Booking.com">Booking.com</option>
                    <option value="Agoda">Agoda</option>
                    <option value="Cleartrip">Cleartrip</option>
                    <option value="Yatra">Yatra</option>
                    <option value="Sayngo">Sayngo</option>
                    <option value="Travel Agent">Travel Agent</option>
                    <option value="Via.com">Via.com</option>
                    <option value="Paytm">Paytm</option>
                    <option value="Lxiogo">Lxiogo</option>
                    <option value="GoMMT">GoMMT</option>
                    <option value="Expedia">Expedia</option>
                    <option value="Travelguru">Travelguru</option>
                    <option value="EaseMyTrip">EaseMyTrip</option>
                    <option value="Book on Google">Book on Google</option>
                    <option value="HappyEasyGo">HappyEasyGo</option>
                  </select>
                </div>
              </div>
              <div className="flex lg:justify-center lg:items-center gap-2 flex-wrap">
                <div>
                  <label htmlFor="" className="whitespace-nowrap">
                    Sl. no
                  </label>
                  <input
                    onChange={(e) => {
                      setFilter({ ...filter, serialNumber: e.target.value });
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
                      setFilter({ ...filter, addedBy: e.target.value });
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
                      setFilter({ ...filter, status: e.target.value });
                    }}
                    name=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={filter.status && filter.status}
                  >
                    <option disabled selected value={"--select--"}>
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
                      setFilter({ ...filter, filterBy: e.target.value });
                    }}
                    name=""
                    id="filterBy-drop-down"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={filter.filterBy && filter.filterBy}
                  >
                    <option disabled selected value={"--select--"}>
                      --Select--
                    </option>
                    <option value="createdAt">Created</option>
                    <option value="checkInDate">Arrival</option>

                    <option value="checkOutDate">Departure</option>
                    <option value="status">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>
            {isFilterOptionSelected && (
              <div className="flex overflow-y-scroll no-scrollbar flex-col gap-2">
                <h1 className="mb-2 font-bold">Select date range</h1>
                <DateRangePicker
                  className=" text-blue-600 rounded-xl dark:bg-gray-800"
                  showMonthAndYearPickers={true}
                  ranges={[selectionRange]}
                  onChange={handleSelect}
                />
              </div>
            )}
          </div>

          {isFilterOpen && (
            <div className="mt-2 flex gap-2 flex-col">
              <div className="mt-2 flex gap-2">
                <div className="flex justify-between ">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="defaultBtn">Stay</Button>
                    </PopoverTrigger>
                    <PopoverContent className="dark:bg-stone-800/80 bg-stone-300/50">
                      <Card
                        shadow="sm"
                        isPressable
                        className="border-none bg-background/70 dark:bg-default-100/50 "
                      >
                        <CardBody className="overflow-visible p-6 gap-4">
                          <div>
                            <NextUISelect
                              id="hotel-drop-down"
                              value={filter.hotelName}
                              label="Select hotel"
                              onChange={(e) => {
                                setStayHotels({
                                  ...filter,
                                  hotelName: e.target.value,
                                });
                              }}
                            >
                              {hotels.map((hotel: any) => (
                                <NextUISelectItem
                                  key={hotel._id}
                                  value={hotel._id}
                                >
                                  {hotel.hotelName}
                                </NextUISelectItem>
                              ))}
                            </NextUISelect>
                          </div>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                color="primary"
                                variant="faded"
                                className={cn(
                                  "w-[280px] justify-start text-left font-normal",
                                  !date && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? (
                                  format(date, "PPP")
                                ) : (
                                  <span>Select date</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                              <Select
                                onValueChange={(value) =>
                                  setDate(addDays(new Date(), parseInt(value)))
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                  <SelectItem value="0">Today</SelectItem>
                                  <SelectItem value="1">Tomorrow</SelectItem>
                                  <SelectItem value="3">In 3 days</SelectItem>
                                  <SelectItem value="7">In a week</SelectItem>
                                </SelectContent>
                              </Select>
                              <div className="rounded-md border">
                                <Calendars
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                />
                              </div>
                            </PopoverContent>
                          </Popover>
                          <Button
                            color="success"
                            variant="bordered"
                            startContent={<Home size={20} />}
                            onClick={() =>
                              getStayBookings(date, stayHotels.hotelName)
                            }
                          >
                            Stay
                          </Button>
                        </CardBody>
                      </Card>
                    </PopoverContent>
                  </Popover>
                </div>
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  disabled={
                    !filter.guestName &&
                    filter.hotelName === "--select--" &&
                    filter.bookingSource === "--select--" &&
                    !filter.serialNumber &&
                    filter.filterBy === "--select--" &&
                    filter.status === "--select--" &&
                    filter.addedBy === "--select--"
                  }
                  className="defaultBtn"
                >
                  Search
                </Button>

                <Button
                  onClick={() => {
                    setisFilterOptionSelected(false);

                    setStayHotels({
                      hotelName: "--select--",
                    });

                    setFilter({
                      guestName: "",
                      hotelName: "--select--",
                      bookingSource: "--select--",
                      serialNumber: "",
                      filterBy: "--select--",
                      dateRange: {},
                      status: "--select--",
                      addedBy: "--select--",
                    });
                    setStayColor(false);
                    setFilterData({
                      guestName: "",
                      hotelName: "",
                      bookingSource: "",
                      serialNumber: "",
                      filterBy: "",
                      dateRange: {},
                      status: "",
                      addedBy: "",
                    });
                  }}
                  type="submit"
                  className="defaultBtn"
                >
                  Reset
                </Button>
              </div>

              <div className="flex flex-col justify-center items-start">
                <div className="flex lg:flex-row flex-col gap-4">
                  <p>
                    Total Booking Amount - ₹{" "}
                    {Math.floor(bookingStats.totalBookingAmt)}
                  </p>
                  <h1 className="hidden lg:block"> | </h1>
                  <p>
                    Total Advance Amount - ₹{" "}
                    {Math.floor(bookingStats.totalAdvanceAmt)}
                  </p>

                  <h1 className="hidden lg:block"> | </h1>

                  <p>
                    Total Due Amount - ₹ {Math.floor(bookingStats.totalDueAmt)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
};

export default Filter;
