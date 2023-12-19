import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import axios from "@/utils/axios";
import TailwindWrapper from "../dash/Components/Wrapper/TailwindWrapper";

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
  const [checkInDate,setCheckInDate] = useState<string>("");
  const [dueAmount, setDueAmount] = useState<string>("");
  const [selectedHotel, setSelectedHotel] = useState<any>();
  const [availableHotels, setAvailableHotels] = useState<any>([]);
// console.log("inputbooking", user);
  useEffect(() => {
    const getHotels = async () => {
      setLoading(true);
      try {
        setAvailableHotels(user.hotel);
        setLoading(false)
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
      if(formValues[key] === "Choose"){
        // console.log("formValues[key]", formValues[key]);
        toast.error("Please select a valid booking source");
      }
      if (formValues[key].trim() === "") {
        if(key !== "remark" && key !== "guestEmail"){
          toast.error("Please fill all the fields");
        }

        return;
      }
    });
    // console.log(formValues);


    const numberRegex = /^[0-9]+$/;
    const nameRegex = /^[a-zA-Z ]+$/;


    // if(formValues.guest_name.trim() === "" || formValues.startDate.trim() === "" || formValues.endDate.trim() === "" || formValues.roomCategory.trim() === "" || formValues.nor.trim() === "" || formValues.nop.trim() === "" || formValues.bookingAmount.trim() === "" || formValues.advanceAmount.trim() === "" || formValues.dueamount.trim() === "" || formValues.Advancedate.trim() === "" || formValues.paymentby.trim() === "" || formValues.plan.trim() === "" || formValues.cn.trim() === ""){
    //   toast.error("Please fill all the fields");
    //   return;
    // }


    if (formValues.nor.trim() === "") {
      toast.error("Please enter a valid number of rooms");
      return;
    }

    if (formValues.nop.trim() === "" ) {
      toast.error("Please enter a valid number of persons");
      return;
    }

    if (formValues.Advancedate.trim() === "") {
      toast.error("Please enter a valid advance date");
      return;
    }
    if (!formValues.accountType || formValues.accountType.trim() === "" ) {
      toast.error("Please enter a valid account type");
      return;
    }

    if (!formValues.plan || formValues.plan.trim() === "" ) {
      toast.error("Please enter a valid plan");
      return;
    }

    if (!formValues.paymentby || formValues.paymentby.trim() === "") {
      console.log("formValues.bookingSource", formValues.paymentby);
      toast.error("Please enter a valid booking source");
      return;
    }

    if (formValues.cn.trim() === "" || !numberRegex.test(formValues.cn) || formValues.cn.length !== 10) {
      toast.error("Please enter a valid contact number and don't include +91");
      return;
    }

    if(Number(formValues.advanceAmount) > Number(formValues.bookingAmount)) {
      console.log("formValues.advanceAmount", formValues.advanceAmount);
      console.log("formValues.bookingAmount", formValues.bookingAmount);
      toast.error("Advance amount should be less than booking amount")
      return;
    }




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
        bookingBy: user.name || user.username,
        accountType: formValues.accountType,
        plan: formValues.plan,
        contactNumber: formValues.cn,
        guestEmail: formValues.guestEmail,
        remarks: formValues.remark,
      });
      if (!data.error) {
        // console.log(data.booking);
        setBookingData((prev: any) => {
          return [data.booking, ...prev];
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
      className="p-6 items-center rounded-lg shadow md:flex-row md:max-w-xl  "
    >
      <TailwindWrapper>
     <div className="flex w-full mb-4">
        <p className="font-bold text-lg">Booking Details</p>
        <span
          onClick={() => onClose(false)}
          className="ml-auto cursor-pointer text-xl"
        >
          &times;
        </span>
        </div>
      <div className="grid gap-2 grid-cols-3 md:grid-cols-3">
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
            Hotel Name <span className="text-red-500">*</span>
          </label>
          <select
            onChange={(e) => {
              const hotel = availableHotels.find(
                (hotel: any) => hotel._id === e.target.value
              );
              setSelectedHotel(hotel);
              // console.log("hotel", hotel);
            }}
            id="hotel"
            name="hotel"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {/* <option selected>Choose</option> */}

            <option selected disabled>--Choose--</option>
            {availableHotels.map((hotel: any, index: number) => {
              return (
                <>
                <option className={"disabled:text-red-500 line-through p-2"} disabled={!hotel.isActive} value={hotel._id} key={index}>
                  {hotel.hotelName}
                </option>
                </>
              );
            })}
          </select>
        </div>
        <div>
          <label
            htmlFor="guest_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Guest Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="guest_name"
            name="guest_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            required
            onChange={(e)=> e.target.value =  e.target.value.toLocaleUpperCase()}
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
            type="text"
            id="cn"
            name="cn"
            className="bg-gray-50 border appearance-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            required
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
            id="startDate"
            name="startDate"
            type="date"
            value={checkInDate}
            onChange={(e)=>setCheckInDate(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            required
            min={user.role !== "ADMIN" ? new Date().toISOString().split("T")[0] : ""}
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
          disabled={!checkInDate}
            id="endDate"
            name="endDate"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           
            required
            min={checkInDate}
          />
        </div>
        
        <div>
          <label
            htmlFor="nor"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of Room <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nor"
            name="nor"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           
            required
          />
        </div>
        <div>
          <label
            htmlFor="nop"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of Person <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nop"
            name="nop"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            required
          />
        </div>
        <div>
          <label
            htmlFor="roomCategory"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Room Category <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            onChange={(e)=> e.target.value =  e.target.value.toLocaleUpperCase()}
            id="nop"
            name="roomCategory"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            required
          />
        </div>
        <div>
          <label
            htmlFor="plan"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Plan <span className="text-red-500">*</span>
          </label>
          <select
            id="plan"
            name="plan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected disabled>--Choose--</option>

            <option value="AP">AP</option>
            <option value="CP">CP</option>
            <option value="MAP">MAP</option>
            <option value="EP">EP</option>
          </select>

        </div>
        <div className="">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Booking Amount <span className="text-red-500">*</span>
          </label>
          <input
            name="bookingAmount"
            type="number"
            id="bookingAmount"
            value={bookingAmount}
            onChange={handleBookingAmountChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            required
          />
        </div>
        <div className="">
          <label
            htmlFor="da"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Advance Amount <span className="text-red-500">*</span>
          </label>
          <input
            name="advanceAmount"
            type="number"
            id="advanceAmount"
            value={advanceAmount}
            onChange={handleAdvanceAmountChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            required
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
            value={dueAmount}
            readOnly
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="">
          <label
            htmlFor="ad"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Advance Date <span className="text-red-500">*</span>
          </label>
          <input
          disabled={!checkInDate}
            id="Advancedate"
            name="Advancedate"
            type="date"
            max={checkInDate}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            required
            
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
           
            disabled
            defaultValue={user.name || user.username || "admin"}
            required
          />
        </div>
        <div>
          <label
            htmlFor="paymentby"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Booking Source <span className="text-red-500">*</span>
          </label>
          <select
          required
            id="paymentby"
            name="paymentby"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue="choose" selected disabled>--Choose--</option>
            <option value="Sayngo">SAYNGO</option>
            <option value="Booking.com">Booking.com</option>
            <option value="Agoda">Agoda</option>
            <option value="Cleartrip">Cleartrip</option>
            <option value="Yatra">Yatra</option>
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
        
       
        <div>
          <label
            htmlFor="plan"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Account type <span className="text-red-500">*</span>
          </label>
          <select
          required
            id="plan"
            name="accountType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected disabled>--Choose--</option>

            <option value="HOTEL">HOTEL</option>
            <option value="SAYNGO">SAYNGO</option>
            
          </select>
          
        </div>
        <div className="">
          <label
            htmlFor="bb"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Guest&apos;s email
          </label>
          <input
            type="email"
            id="bb"
            name="guestEmail"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
          />
        </div>

        <div className="">
          <label
            htmlFor="remark"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Remarks
          </label>
          <textarea
            cols={10}
            onChange={(e)=> e.target.value =  e.target.value.toLocaleUpperCase()}
            id="remark"
            name="remark"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            
          />
        </div>
        
      </div>

      <div className="flex gap-2 mt-4">
      <button
      disabled={loading}
        type="submit"
        className="defaultBtn"
      >
        {loading ? 'Please wait...' : 'Submit'}
      </button>
      <button
      disabled={loading}
        type="reset"
        className="defaultBtn"
      >
        Reset
      </button>
      </div>

      </TailwindWrapper>
    </form>
  );
};

export default InputBooking;
