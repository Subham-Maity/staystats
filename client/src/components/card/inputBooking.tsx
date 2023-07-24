import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import axios from "@/utils/axios";

import { FaTimes } from "react-icons/fa";

interface BookingProps {
  user: any;
  setBookingData: (users: any) => void;
  onClose: (value: boolean) => void;
}

const InputBooking = ({ user, setBookingData, onClose }: BookingProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [bookingAmount, setBookingAmount] = useState<string>("");
  const [advanceAmount, setAdvanceAmount] = useState<string>("");
  const [dueAmount, setDueAmount] = useState<string>("");
  const [availableHotels, setAvailableHotels] = useState<any>([]);
// console.log("inputbooking", user);
  useEffect(() => {
    const getHotels = async () => {
      setLoading(true);
      try {
        setAvailableHotels(user.hotel);
      } catch (error: any) {
        setLoading(false);
        toast.error(error.message);
        console.log(error);
      }
    };
    getHotels();
  }, []);

  const handleBookingAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setBookingAmount(value);
    calculateDueAmount(value, advanceAmount);
  };

  const handleAdvanceAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setAdvanceAmount(value);
    calculateDueAmount(bookingAmount, value);
  };

  const calculateDueAmount = (booking: string, advance: string) => {
    const bookingValue = parseFloat(booking);
    const advanceValue = parseFloat(advance);

    if (!isNaN(bookingValue) && !isNaN(advanceValue)) {
      const due = bookingValue - advanceValue;
      setDueAmount(due.toFixed(2));
    } else {
      setDueAmount("");
    }
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValues: { [key: string]: string } = {};

    // Collect all the form field values
    formData.forEach((value, key) => {
      formValues[key] = value as string;
      if (formValues[key].trim() === "") {
        toast.error("Please fill all the fields");
        return;
      }
    });
    console.log(formValues);
    try {
      setLoading(true);
      const { data } = await axios.post("/booking/create-booking", {
        hotel: formValues.hotel,
        guestName: formValues.guest_name,
        checkInDate: formValues.startDate,
        checkOutDate: formValues.endDate,
        roomCategory: formValues.roomCategory,
        numberOfRooms: formValues.nor,
        numberOfPersons: formValues.nop,
        bookingAmount: formValues.bookingAmount,
        advanceAmount: formValues.advanceAmount,
        dueAmount: formValues.dueamount,
        advanceDate: formValues.Advancedate,
        bookingSource: formValues.paymentby,
        bookingBy: formValues.bb,
        plan: formValues.plan,
        contactNumber: formValues.cn,
        remarks: formValues.remark,
      });
      if (!data.error) {
        console.log(data.hotel);
        setBookingData((prev: any) => {
          return [...prev, data.hotel];
        });

        onClose(false);

        toast.success(data.message);
        formRef.current?.reset();
      } else {
        toast.error(data.error);
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
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
          <select
            id="hotel"
            name="hotel"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {/* <option selected>Choose</option> */}

            {availableHotels.map((hotel: any, index: number) => {
              return (
                <option value={hotel._id} key={index}>
                  {hotel.hotelName}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label
            htmlFor="guest_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Guest Name
          </label>
          <input
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
            id="startDate"
            name="startDate"
            type="date"
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
            htmlFor="roomCategory"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Room Category
          </label>
          <select
            name="roomCategory"
            id="paymentby"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Executive Double Room</option>
            <option value="US">Superior Double Room</option>
            <option value="CA">Premium Quad Triple</option>
          </select>
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
            value={bookingAmount}
            onChange={handleBookingAmountChange}
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
            value={advanceAmount}
            onChange={handleAdvanceAmountChange}
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
            value={dueAmount}
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
          <select
            id="paymentby"
            name="paymentby"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="US">Booking.com</option>
            <option value="CA">Agoda</option>
            <option value="FR">Cleartrip</option>
            <option value="DE">Yatra</option>
            <option value="DE">Sayango</option>
            <option value="DE">Offline</option>
            <option value="DE">Travel Agent</option>
            <option value="DE">Via.com</option>
            <option value="DE">Paytm</option>
            <option value="DE">Lxiogo</option>
          </select>
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
            value={user.name || user.username || "admin"}
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
          <select
            id="plan"
            name="plan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>AP</option>
            <option value="US">CP</option>
            <option value="CA">MAP</option>
            <option value="FR">EP</option>
          </select>
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

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default InputBooking;
