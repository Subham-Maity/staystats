import React from 'react'
import Table from '@/components/Table/Table'

const Users = () => {
  return (
    <div className='flex w-full flex-col justify-center gap-4 items-center'>
        <h1 className='text-2xl font-bold'>User Details</h1>
        <div className='flex w-full'>

        <Table />
        </div>
    </div>
  )
}

export default Users