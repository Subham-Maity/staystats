"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import Table from "@/components/Table/Table";
import InputEmp from "@/components/card/InputEmp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "@/utils/axios";
import { FaPlus } from "react-icons/fa";
import { fetchOwner } from "@/utils";
import ViewUser from "@/components/card/ViewUsers";
import { BiLink, BiSearch } from "react-icons/bi";
import { FcNext, FcPrevious } from "react-icons/fc";
import { CiSquareRemove } from "react-icons/ci";

const Users = () => {
  let router = useRouter();
  const PAGE_LIMIT = 10;
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState(""); // {users: [], usersCount: 0}
  const [owner, setOwner] = useState<any>({});
  const [accountType, setAccountType] = useState<string>("");
  const [userData, setUserData] = useState<any>([]);
  const [usersCount, setUsersCount] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [user, setUser] = useState<object>({});
  const [showViewModal, setShowViewModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [reloadData, setReloadData] = useState<boolean>(false);

  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem("user") || "{}")?._id;
    let updateUser = async () => {
      const user = await fetchOwner(userId);

      if(user.role !== "ADMIN"){
        window.location.href = "/bookings"
      }
      if (user && user._id) {
        setOwner(user);
        localStorage.setItem("user", JSON.stringify(user));
        setAccountType(user?.role);
      } else {
        toast.error("You are not authorized to view this page");
        localStorage.removeItem("user");
        router.replace("/login");
      }
    };
    updateUser();
  }, []);


  const getUsersBySearch = async (e?: any) => {
    e && e.preventDefault();
    try {
      if (searchText?.trim()?.length > 0) {
        let { data } = await axios.get(
          `/user/get-users/search?&query=${searchText}`
        );
        // console.log("forms", data);
        if (!data.error) {
          // setSearchResults(data);
          setUserData(data.users);
        } else {
          toast.error(data.error);
        }
      }
    } catch (error) {
      console.log("Error getting forms", error);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `/user/get-users?page=${page}&limit=${PAGE_LIMIT}`
        );
        console.log(data);
        if (!data.error) {
          setUserData(data.users);
          setUsersCount(data.usersCount);
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

    searchText.trim().length > 0 ? getUsersBySearch() : getUsers();
  }, [page, PAGE_LIMIT, reloadData]);

  const deleteUserHandler = async (id: string) => {
    try {
      const { data } = await axios.post(`/user/delete-user`, {
        id,
      });
      if (!data.error) {
        toast.success(data.message);
        const { data: users } = await axios.get(
          `/user/get-users?page=${page}&limit=${PAGE_LIMIT}`
        );
        if (!data.error) {
          setUserData(users.users);
          setUsersCount(users.usersCount);
        } else {
          toast.error(data.error);
        }
      } else {
        toast.error(data.error);
      }
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex w-full flex-col justify-center gap-4 items-center overflow-hidden">
        <div className="flex w-full justify-between mt-6">
          <h1 className="text-2xl font-bold">User Details</h1>
          <button
            onClick={() => setShowModal(true)}
            type="submit"
            className=" flex  gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaPlus size={20} />
            <p>Add User</p>
          </button>
        </div>
        <div className="md:h-[40px] my-4 sm:my-6 text-gray-600 flex flex-col md:flex-row items-center w-full">
          <div className="h-full flex flex-row  items-center mr-auto">
            <div className="flex flex-row h-full text-gray-700">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="border p-3 shadow hover:bg-gray-200 cursor-pointer hover:opacity-90 rounded-l-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FcPrevious />
              </button>
              <button
                disabled={page * PAGE_LIMIT >= usersCount}
                onClick={() => setPage(page + 1)}
                className="border p-3 shadow hover:bg-gray-200 cursor-pointer hover:opacity-90 rounded-r-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FcNext />
              </button>
            </div>
            {/* <div className="ml-4 py-2 px-2 h-full border shadow rounded text-xs font-medium"> */}
            {/* <Select
              id="hotel"
              name="hotel"
              options={[
                { value: "all", label: "All Users" },
                ...userData.map((user: any) => ({
                  value: user._id,
                  label: user.username,
                })),
              ]}
              isMulti
              value={"coming soon"}
              onChange={() => {
                toast.info("Search feature is not available yet");
                // handleHotelSelection()
              }}
              className="w-[80px] outline-none ml-4 px-2 h-full shadow rounded text-xs font-medium"
              isDisabled={loading}
            /> */}
            {/* </div> */}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getUsersBySearch(e);

              // toast.info("Search feature is not available yet");
            }}
            className="w-full h-full text-xs mt-2 md:mt-0"
          >
            <div className="ml-auto border shadow md:w-[500px] h-full flex flex-row rounded-md overflow-hidden">
              <input
                placeholder="Search Users..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full h-full py-2 px-4   outline-none text-gray-700 "
              />
              <button
                className="min-w-[40px] flex justify-center items-center bg-blue-700 text-white cursor-pointer hover:opacity-90"
                onClick={(e) => {
                  getUsersBySearch(e);
                  // e.preventDefault();
                  // toast.info("Search feature is not available yet");
                }}
              >
                <BiSearch className="text-xl" />
              </button>
          <div className="min-w-[40px] flex items-center justify-center">
            <CiSquareRemove
              size={40}
              className=" text-red-500 cursor-pointer"
              onClick={() => {
                setSearchText("");
                setReloadData(!reloadData);
              }}
            />
          </div>
            </div>
          </form>
        </div>
        <div className="flex w-full">
          <Table
            setShowModal={(value) => setShowViewModal(value)}
            getUser={(user) => setUser(user)}
            userData={userData}
            setUserData={setUserData}
            deleteUserHandler={deleteUserHandler}
            owner={owner}
            loading={loading}
          />
        </div>
        <ToastContainer
          theme="dark"
          position="bottom-center"
          autoClose={10000}
        />
      </div>
      {showViewModal && (
        <div className="w-full bg-black/50 h-screen fixed top-0 left-0 flex justify-center items-center overflow-hidden">
          <ViewUser onClose={(value) => setShowViewModal(value)} user={user} />
        </div>
      )}
      {showModal && (
        <div className="w-full bg-black/50 h-screen fixed top-0 left-0 flex justify-center items-center overflow-hidden">
          {accountType === "ADMIN" && (
            <InputEmp
              onClose={(value) => setShowModal(value)}
              setUserData={setUserData}
            />
          )}
        </div>
      )}
      <div className="w-full flex flex-row justify-between items-center py-3 border-t-2">
        <div>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="mr-2 py-2 px-4 border rounded-md text-sm font-medium border-gray-300 text-gray-500 cursor-pointer hover:opacity-90 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            disabled={page * PAGE_LIMIT >= usersCount}
            onClick={() => setPage(page + 1)}
            className="py-2 px-4 border rounded-md text-sm font-medium border-gray-300 text-gray-500 cursor-pointer hover:opacity-90 disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <div className="text-gray-500 text-sm">
          {" "}
          <div>{`Page ${page} of ${Math.ceil(usersCount / PAGE_LIMIT)}`}</div>
        </div>
      </div>
    </>
  );
};

export default Users;
