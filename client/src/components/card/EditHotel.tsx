interface Props {
  setHotelData: (users: any) => void;
  onClose: (value: boolean) => void;
  editingHotelDataProps?: any;
  hotelData?: any;
}

import { FaTimes } from "react-icons/fa";

import { toast } from "react-toastify";
import axios from "@/utils/axios";
import React, { useState, useEffect, useRef } from "react";

const EditHotel = ({
  setHotelData,
  onClose,
  editingHotelDataProps,
  hotelData,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [editingHotelData, setEditingHotelData] = useState<any>({});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setEditingHotelData(editingHotelDataProps);
  }, [editingHotelDataProps]);

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
      const { data } = await axios.post("/hotel/update-hotel", {
        id: editingHotelData._id,
        hotelName: formValues.hotelName,
        location: formValues.location,
        ownerName: formValues.ownerName,
        ownerContact: {
          phone: formValues.phoneNumber,
          email: formValues.email,
        },
        bank: formValues.bank,
        GSTNumber: formValues.GSTNumber,
        panNumber: formValues.panNumber,
        aadharNumber: formValues.aadharNumber,
        tradeLicense: formValues.tradeLicense,
        otherDocuments: formValues.otherDocuments,
        frontOfficeContact: formValues.frontOfficeContact,
      });
      if (!data.error) {
        // const { data } = await axios.post("/user/get-users");
        const hotelIndex = hotelData.findIndex(
          (hotel: any) => hotel._id === editingHotelDataProps._id
        );

        // If the user is found in the array, replace the data at that index
        if (hotelIndex !== -1) {
          setHotelData((prev: any) => {
            const updatedHotelData = [...prev];
            updatedHotelData[hotelIndex] = data.user;
            return updatedHotelData;
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
      <FaTimes
        onClick={() => onClose(false)}
        className="ml-auto cursor-pointer"
      />
      <div className="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hotel Name
          </label>
          <input
            type="text"
            name="hotelName"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ex: Digha Saikatabas"
            required
            value={editingHotelData.hotelName}
            onChange={(e) => {
              setEditingHotelData((prev: any) => {
                return { ...prev, hotelName: e.target.value };
              });
            }
            }
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Location
          </label>
          <input
            name="location"
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ex: Digha"
            required
            value={editingHotelData.location}
            onChange={(e) => {
              setEditingHotelData((prev: any) => {
                return { ...prev, location: e.target.value };
              });
            }}
            
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Owner Name
          </label>
          <input
            name="ownerName"
            type="text"
            id="company"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Subham"
            required
            value={editingHotelData.ownerName}
            onChange={(e) => {
              setEditingHotelData((prev: any) => {
                return { ...prev, ownerName: e.target.value };
              });
            }}
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
            name="phoneNumber"
            // type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+91 999999999"
            required
            value={editingHotelData.ownerContact?.phone}
            onChange={(e) => {
              setEditingHotelData((prev: any) => {
                return {
                  ...prev,
                  ownerContact: { ...prev.ownerContact, phone: e.target.value },
                };
              });
            }}
          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Bank
          </label>
          <input
            name="bank"
            type="text"
            id="bank"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="State Bank"
            required
            value={editingHotelData.bank}
            onChange={(e) => {
              setEditingHotelData((prev: any) => {
                return { ...prev, bank: e.target.value };
              });
            }}
          />
        </div>
        <div>
          <label
            htmlFor="visitors"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            GST Number
          </label>
          <input
            name="GSTNumber"
            type="text"
            id="visitors"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="GST Number"
            required
            value={editingHotelData.GSTNumber}
            onChange={(e) => {
              setEditingHotelData((prev: any) => {
                return { ...prev, GSTNumber: e.target.value };
              });
            }}
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
            name="email"
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="hotel@company.com"
            required
            value={editingHotelData.ownerContact?.email}
            onChange={(e) => {
              setEditingHotelData((prev: any) => {
                return {
                  ...prev,
                  ownerContact: { ...prev.ownerContact, email: e.target.value },
                };
              });
            }}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pan Number
          </label>
          <input
            name="panNumber"
            type="text"
            id="pan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="AAAAA 1234A"
            required
            value={editingHotelData.panNumber}
            onChange={(e) => {
              setEditingHotelData((prev: any) => {
                return {
                  ...prev,
                  panNumber: e.target.value,
                };
              });
            }}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Aadhar Number
          </label>
          <input
            name="aadharNumber"
            type="number"
            id="adhar"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="2625-2331-7140"
            required
            value={editingHotelData.aadharNumber}
            onChange={(e) => {
              setEditingHotelData((prev: any) => {
                return {
                  ...prev,
                  aadharNumber: e.target.value,
                };
              });
            }}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Trade License
          </label>
          <input
            name="tradeLicense"
            type="text"
            id="Tread"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="2625-2331-7140"
            required
            value={editingHotelData.tradeLicense}
            onChange={(e) => {
              setEditingHotelData((prev: any) => {
                return {
                  ...prev,
                  tradeLicense: e.target.value,
                };
              });
            }}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Other Documents
          </label>
          <input
            name="otherDocuments"
            type="text"
            id="Other Documents"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Other Document"
            required
            value={editingHotelData.otherDocuments}
            onChange={(e) => {
              setEditingHotelData((prev: any) => {
                return {
                  ...prev,
                  otherDocuments: e.target.value,
                };
              });
            }}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Front Office Contact
          </label>
          <input
            name="frontOfficeContact"
            type="text"
            id="Other Documents"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Other Document"
            required
            value={editingHotelData.frontOfficeContact}
            onChange={(e) => {
              setEditingHotelData((prev: any) => {
                return {
                  ...prev,
                  frontOfficeContact: e.target.value,
                };
              });
            }}
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

export default EditHotel;
