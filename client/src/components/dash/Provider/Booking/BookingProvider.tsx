"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { BookingData } from "@/lib/Types/Dashboard/types";
import {
  fetchAllBookingsAsync,
  selectAllbookings,
} from "@/lib/features/bookingSlice";
import {fetchAllUsersAsync} from "@/lib/features/userSlice";
import {fetchAllHotelsAsync} from "@/lib/features/hotelSlice";

const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch: AppDispatch = useDispatch();
  const bookingData: BookingData[] = useSelector(selectAllbookings);
  useEffect(() => {
    if (bookingData) {
      dispatch(fetchAllBookingsAsync());
      dispatch(fetchAllUsersAsync());
      dispatch(fetchAllHotelsAsync());
    }
  }, [dispatch, bookingData]);

  return <>{children}</>;
};

export default BookingProvider;
