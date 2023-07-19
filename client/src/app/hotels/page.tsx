"use client"
import React from 'react'
import Table from '@/components/Table/Table'
import InputHotel from "@/components/card/InputHotel";
const Hotels = () => {
  return (
    <div className='flex w-full flex-col justify-center gap-4 items-center'>
        <h1 className='text-2xl font-bold'>Hotel Details</h1>
        <div className='flex w-full'>

        <Table />

        </div>
        <InputHotel/>
    </div>
  )
}

export default Hotels