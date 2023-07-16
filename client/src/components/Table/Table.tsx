import React from 'react'

const Table = () => {
  return (
    
<div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                <th scope="col" className="px-6 py-3">
                    Password
                </th>
                <th scope="col" className="px-6 py-3">
                    Hotel
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Tuhin Bar
                </th>
                <td className="px-6 py-4">
                    01700000000
                </td>
                <td className="px-6 py-4">
                    traaxx@hotelbling.in
                </td>
                <td className="px-6 py-4">
                    123456
                </td>
                <td className="px-6 py-4">
                    Casa Angelina
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Tuhin Bar
                </th>
                <td className="px-6 py-4">
                    01700000000
                </td>
                <td className="px-6 py-4">
                    traaxx@hotelbling.in
                </td>
                <td className="px-6 py-4">
                    123456
                </td>
                <td className="px-6 py-4">
                    Casa Angelina
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Tuhin Bar
                </th>
                <td className="px-6 py-4">
                    01700000000
                </td>
                <td className="px-6 py-4">
                    traaxx@hotelbling.in
                </td>
                <td className="px-6 py-4">
                    123456
                </td>
                <td className="px-6 py-4">
                    Casa Angelina
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default Table