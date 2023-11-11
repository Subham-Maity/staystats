"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import {UserData} from "@/lib/Types/Dashboard/types";
import {
  fetchAllBookingsAsync,
  selectAllbookings,
} from "@/lib/features/bookingSlice";
import {selectAllUsers} from "@/lib/features/userSlice";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch: AppDispatch = useDispatch();
  const UserData: UserData[] = useSelector(selectAllUsers);
  useEffect(() => {
    if (UserData) {
      dispatch(fetchAllBookingsAsync());
    }
  }, [dispatch, UserData]);

  return <>{children}</>;
};

export default UserProvider;
