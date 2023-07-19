'use client'
import React, {useState, useEffect} from 'react'
import Table from '@/components/Table/Table'
import InputEmp from "@/components/card/InputEmp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Users = () => {
  const [user, setUser] = useState<any>({})
  const [accountType, setAccountType] = useState<string>('')

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    setUser(user)
    setAccountType(user?.role)
  }, [])


  return (
    <div className='flex w-full flex-col justify-center gap-4 items-center'>
        <h1 className='text-2xl font-bold'>User Details</h1>
        <div className='flex w-full'>

        <Table />
        </div>
        {accountType === 'ADMIN' && <InputEmp />}
        <ToastContainer theme="dark" position="bottom-center" autoClose={10000} />
    </div>
  )
};

export default Users