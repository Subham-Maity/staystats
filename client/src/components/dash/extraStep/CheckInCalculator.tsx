"use client";
import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectAllbookings} from "@/lib/features/bookingSlice";

export const CheckInCalculator=()=> {
    const [todayCheckIns,setTodayCheckIns]=useState(0);
    const bookingData = useSelector(selectAllbookings);

    return (
        <div></div>
    );
}