"use client"
import React from 'react'
import Table from '@/components/Table/Table'
import InputHotel from "@/components/card/InputHotel";
const Hotels = () => {
    const userData = [
        {
            name: "John Doe",
            phone: "123-456-7890",
            email: "john@example.com",
            hotel: "Example Hotel",
        },
        {
            name: "Jane Smith",
            phone: "987-654-3210",
            email: "jane@example.com",
            hotel: "Another Hotel",
        },
        // Add more data items as needed
    ];
  return (

    <div className='flex w-full flex-col justify-center gap-4 items-center'>
        <h1 className='text-2xl font-bold'>Hotel Details</h1>
        <div className='flex w-full'>

        <Table userData={userData} />

        </div>
        <InputHotel/>
    </div>
  )
}

export default Hotels