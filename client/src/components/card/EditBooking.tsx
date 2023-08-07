interface Props {
    setBookingData: (users: any) => void;
    onClose: (value: boolean) => void;
    editingBookingDataProps?: any;
    bookingData?: any;
  }
  
  import { FaTimes } from "react-icons/fa";
  
  import { toast } from "react-toastify";
  import axios from "@/utils/axios";
  import React, { useState, useEffect, useRef } from "react";
  
  const EditBooking = ({
    setBookingData,
    onClose,
    editingBookingDataProps,
    bookingData,
  }: Props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [editingBookingData, setEditingBookingData] = useState<any>({});
    const formRef = useRef<HTMLFormElement>(null);
  
    console.log(editingBookingData)
    useEffect(() => {
      setEditingBookingData(editingBookingDataProps);
    }, [editingBookingDataProps]);
  
    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
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
  
      try {
        setLoading(true);
        const { data } = await axios.post("/booking/update-booking", {
          id: editingBookingData._id,
          guestName: formValues.guest_name,
          checkInDate: formValues.checkInDate,
          checkOutDate: formValues.checkOutDate,
          roomCatagory: formValues.roomCategory,
          numberOfRooms: formValues.nor,
            numberOfPersons: formValues.nop,
          bookingAmount: formValues.bookingAmount,
            advanceAmount: formValues.advanceAmount,
            dueAmount: formValues.dueamount,
            advanceDate: formValues.Advancedate,
            bookingSource: formValues.bookingSource,
            booikingBy: formValues.bb,
            plan: formValues.plan,
            contactNumber: formValues.cn,
            remarks: formValues.remark,
        });
        if (!data.error) {
          // const { data } = await axios.post("/user/get-users");
          const bookingIndex = bookingData.findIndex(
            (hotel: any) => hotel._id === editingBookingDataProps._id
          );
  
          // If the user is found in the array, replace the data at that index
          if (bookingIndex !== -1) {
            setBookingData((prev: any) => {
              const updatedBookingData = [...prev];
              updatedBookingData[bookingIndex] = data.user;
              return updatedBookingData;
            });
          }
  
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
        onSubmit={handleUpdate}
        className="p-6 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 "
      >
        <div className="flex w-full mb-6">
        <p className="font-bold text-lg">Booking Details</p>
        <FaTimes
          onClick={() => onClose(false)}
          className="ml-auto cursor-pointer"
        />
        </div>
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
              
            />
          </div> */}
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
              // value={editingBookingData.hotel.hotelName || "Deleted hotel"}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ex: Digha Saikatabas"
              
              
            />
            
          </div> */}
          <div>
            <label
              htmlFor="guest_name"
              className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Guest Name
            </label>
            <input
            value={editingBookingData.guestName}
              type="text"
              id="guest_name"
              name="guest_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ex: Subham"
              
              onChange={(e) => {
                setEditingBookingData((prev: any) => {
                  return { ...prev, guestName: e.target.value };
                }
                );
              }}
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
            // value={new Date(editingBookingData.checkInDate)?.toISOString().slice(0,10) ?? new Date().toISOString().split("T")[0]}
            
              id="startDate"
              name="checkInDate"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="08.08.2023"
              
              min={new Date().toISOString().slice(0,10)}
              onChange={
                (e) => {
                  setEditingBookingData((prev: any) => {
                    return { ...prev, checkInDate: e.target.value };
                  }
                  );
                }
              }
              
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
            // value={new Date(editingBookingData.checkOutDate).toISOString().slice(0,10)}
              id="endDate"
              name="checkOutDate"
              type="date"
              // value={editingBookingData.checkOutDate}
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="09.09.2023"
              onChange={
                (e) =>
                setEditingBookingData((prev: any) =>{
                  return {...prev, checkOutdate: e.target.value}
                }) 
              }
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
              name="roomCategory"
              type="text"
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
              
              
              value={editingBookingData.roomCategory}
              onChange={(e) => setEditingBookingData((prev : any) => {return {...prev,roomCategory: e.target.value}})}
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
              
              onChange={
                (e)=> setEditingBookingData((prev:any) => {return {...prev,numberOfRooms: e.target.value}})
              }
              value={editingBookingData.numberOfRooms}
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
              
              
              value={editingBookingData.numberOfPersons}
              onChange={
                (e) => setEditingBookingData((prev:any) => {return {...prev,numberOfPersons: e.target.value}})
              }
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
              type="text"
              id="bookingAmount"
              value={editingBookingData.bookingAmount}
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter booking amount"
              
              onChange={
                (e) => setEditingBookingData((prev:any) => {return {...prev,bookingAmount: e.target.value}})
              }
              
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
              type="text"
              id="advanceAmount"
              value={editingBookingData.advanceAmount}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter advance amount"
              
              onChange={
                (e) => setEditingBookingData((prev:any) => {return {...prev,advanceAmount: e.target.value}})
              }
              
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
              value={editingBookingData.dueAmount}
              readOnly
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
              onChange={
                (e) => setEditingBookingData((prev:any) => {return {...prev,dueAmout: e.target.value}})
              }
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
            value={editingBookingData.advanceDate}
              id="Advancedate"
              name="Advancedate"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="24.05.26"
              
              onChange={
                (e) => setEditingBookingData((prev:any) => {return {...prev,advanceDate: e.target.value}})
              }
            />
          </div>
          <div>
          <label
              htmlFor="ad"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Booking source
            </label>
          <select
            id="paymentby"
            name="paymentby"
            onChange={(e)=> setEditingBookingData((prev:any) => {return {...prev,bookingSource: e.target.value}})}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue={editingBookingData.bookingSource}>{editingBookingData.bookingSource}</option>
            <option value="Booking.com">Booking.com</option>
            <option value="Agoda">Agoda</option>
            <option value="Cleartrip">Cleartrip</option>
            <option value="Yatra">Yatra</option>
            <option value="Sayngo">Sayango</option>
            <option value="Offline">Offline</option>
            <option value="Travel Agent">Travel Agent</option>
            <option value="Via.com">Via.com</option>
            <option value="Paytm">Paytm</option>
            <option value="Lxiogo">Lxiogo</option>
          </select>
          </div>
          {/* <div className="mb-6">
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
              
              
              value={editingBookingData.booikingBy}
            />
          </div> */}
          <div>
            <label
              htmlFor="plan"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Plan
            </label>
            <select
            onChange={(e)=> setEditingBookingData((prev:any) => {return {...prev,plan: e.target.value}})}
            id="plan"
            name="plan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected value={editingBookingData.plan}>{editingBookingData.plan}</option>
            ,<option value="AP">AP</option>
            <option value="CP">CP</option>
            <option value="MAP">MAP</option>
            <option value="EP">EP</option>
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
              
              value={editingBookingData.contactNumber}
              onChange={
                (e) => setEditingBookingData((prev:any) => {return {...prev,contactNumber: e.target.value}})
              }
              
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
            value={editingBookingData.remarks}
              type="text"
              id="remark"
              name="remark"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Very Good"
              
              onChange={
                (e) => setEditingBookingData((prev:any) => {return {...prev,remarks: e.target.value}})
              }
              
            />
          </div>
        </div>
        <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
        disabled={loading}
      >
        Update
      </button>
      </form>
    );
  };
  
  export default EditBooking;
  