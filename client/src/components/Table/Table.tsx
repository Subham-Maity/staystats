"use client";
import React, { useEffect, useState } from "react";
import { MdWarningAmber } from "react-icons/md";
import { FiEdit, FiExternalLink } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import axios from "@/utils/axios";
import EditUser from "../card/EditUser";
interface TableProps {
  userData: {
    name?: string;
    phone?: string;
    email?: string;
    hotel?: string;
  }[];
  deleteUserHandler: (id: string) => void;
  setUserData: (users: any) => void;
  owner?: any;
}

const Table = ({
  userData,
  deleteUserHandler,
  setUserData,
  owner,
}: TableProps) => {
  console.log(userData, "userdata");
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [editingUserId, setEditingUserId] = useState<string>("");

  return (
    <div className="w-full">
      <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg cursor-pointer">
        <table className="w-full border-white border-2 text-sm text-left text-gray-500  dark:bg-inherit  dark:text-gray-400">
          <thead className="text-xs text-gray-400 uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              {/* <th scope="col" className="px-6 py-3">
              Password
            </th> */}
              {/* <th scope="col" className="px-6 py-3">
              Hotel
            </th> */}
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Options
              </th>
            </tr>
          </thead>
          <tbody className="rounded-xl">
            {userData.length === 0 && (
              <tr className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <MdWarningAmber className="text-4xl text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </tr>
            )}
            {userData.length > 0 && (
              <>
                {userData.map((user: any, index: number) => {
                  console.log(user.name);

                  return (
                    <tr
                      key={index}
                      className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                      >
                        {user.name || ""}
                      </th>
                      <td className="px-6 py-4">{user.phoneNumber || ""}</td>
                      <td className="px-6 py-4">{user.email || ""}</td>
                      {/* <td className="px-6 py-4"></td> */}
                      {/* <td className="px-6 py-4">{user.hotel || ""}</td> */}
                      <td className="px-6 py-4">{user.role || ""}</td>
                      <td className="px-6 py-4">
                        <div className="">
                          <button
                            // disabled={user.addedBy !== owner._id}
                            data-tip={"Preview Link"}
                            onClick= {()=>{
                              setShowEditModal(true)
                              setEditingUserId(user._id)
                            }}
                            className={`w-fit text-center p-2 shadow border bg-gray-100 text-green-500  hover:opacity-90 text-sm rounded-md mr-2 disabled:opacity-50`}
                          >
                            <FiEdit className="" />
                          </button>
                          <button
                            disabled={user.addedBy !== owner._id}
                            data-tip={"Delete User"}
                            onClick={() => deleteUserHandler(user._id)}
                            className={`w-fit text-center p-2 shadow border bg-gray-100 text-red-500  hover:opacity-90 text-sm rounded-md disabled:opacity-50`}
                          >
                            <RiDeleteBin6Line size={15} className="" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
      {showEditModal && editingUserId && (
        <div className="w-screen bg-black/50 h-screen absolute top-0 left-0 flex justify-center items-center overflow-hidden">
          <EditUser
            onClose={(value) => setShowEditModal(value)}
            setUserData={setUserData}
            editingUserId={editingUserId}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
