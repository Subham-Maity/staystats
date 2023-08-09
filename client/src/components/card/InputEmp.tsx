"use client";
import axios from "@/utils/axios";
import Select from "react-select";
import React, { useState, useEffect, useRef } from "react";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

interface Props {
  setUserData: (users: any) => void;
  onClose: (value: boolean) => void;
}

const InputEmp = ({ setUserData, onClose }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [availableHotels, setAvailableHotels] = useState<any>([]);
  const [selectedHotels, setSelectedHotels] = useState<any>([]);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [reactSelectOptions, setReactSelectOptions] = useState<any>([]);

  useEffect(() => {
    const getHotels = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/hotel/get-all-hotels");
        if (!data.error) {
          setAvailableHotels(data.hotels);
          let options = data.hotels.map((hotel: any) => {
            return { value: hotel._id, label: hotel.hotelName };
          });
          setReactSelectOptions(options);
        } else {
          // toast.error(data.error);
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

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
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

    const numberRegex = /^[0-9]+$/;
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    
    if(formValues.password.trim() === "" || formValues.first_name.trim() === "" || formValues.email.trim() === ""){
      toast.error("Please fill all the fields");
      return;
    }




    if(formValues.phone.length !== 10 ){
      toast.error("Please enter a valid phone number and don't include +91");
      return;
    }

    if(formValues.first_name.trim() =="" && !nameRegex.test(formValues.first_name)){
      toast.error("Please enter a valid name");
      return;
    }

    if(formValues.email.trim() == "" && !emailRegex.test(formValues.email)){
      toast.error("Please enter a valid email");
      return;
    }

    

    try {
      setLoading(true);
      const { data } = await axios.post("/user/create-user", {
        name: formValues.first_name,
        username: formValues.email,
        phoneNumber: formValues.phone,
        email: formValues.email,
        password: formValues.password,
        hotel: selectedHotels.map((hotel: any) => hotel.value),
        role: "SUBADMIN",
      });
      if (!data.error) {
        // const { data } = await axios.post("/user/get-users");
          setUserData((prev: any) => {
            return [data.user, ...prev ];
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

  const handleHotelSelection = (selectedOptions: any) => {
    setSelectedHotels(selectedOptions);
  };

  return (
    <form
      ref={formRef}
      className="p-6 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 w-full"
      onSubmit={handleSubmit}
    >
     <div className="flex w-full mb-6">
        <p className="font-bold text-lg">User Details</p>
        <FaTimes
          onClick={() => onClose(false)}
          className="ml-auto cursor-pointer"
        />
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ex: Digha Saikatabas"
            required
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+91 999999999"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="hotel@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="text-gray-700 w-full p-2.5 rounded-md border-[1.5px] focus:border-indigo-400 focus:outline-none text-sm pr-10"
                  placeholder="Enter new password"
                  name="password"
                  
                  
                  required
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                  onClick={handleShowPassword}
                >
                  {showPassword ? (
                    <RiEyeLine size={20} />
                  ) : (
                    <RiEyeCloseLine size={20} />
                  )}
                </div>
              </div>
        </div>

        <div className="w-[340px]">
          <label
            htmlFor="hotel"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hotel Name
          </label>
          <Select
            id="hotel"
            name="hotel"
            options={reactSelectOptions}
            isMulti
            value={selectedHotels}
            onChange={handleHotelSelection}
            className="w-full"
          />
          {availableHotels.length === 0 && (
            <div className="text-xs text-red-600 font-medium">
              No Hotels Available*
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
        disabled={loading || availableHotels.length === 0 || selectedHotels.length === 0}
      >
        Submit
      </button>
    </form>
  );
};

export default InputEmp;
