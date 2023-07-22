"use client"
import React, {useState} from "react";

const InputBooking = () => {
    const [bookingAmount, setBookingAmount] = useState<string>("");
    const [advanceAmount, setAdvanceAmount] = useState<string>("");
    const [dueAmount, setDueAmount] = useState<string>("");


    const handleBookingAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setBookingAmount(value);
        calculateDueAmount(value, advanceAmount);
    };


    const handleAdvanceAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAdvanceAmount(value);
        calculateDueAmount(bookingAmount, value);
    };


    const calculateDueAmount = (booking: string, advance: string) => {
        const bookingValue = parseFloat(booking);
        const advanceValue = parseFloat(advance);

        if (!isNaN(bookingValue) && !isNaN(advanceValue)) {
            const due = bookingValue - advanceValue;
            setDueAmount(due.toFixed(2));
        } else {
            setDueAmount("");
        }
    };

    return (
        <form
            className="p-6 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 "
        >
            <div className="grid gap-6 mb-6 md:grid-cols-3">
                <div>
                    <label htmlFor="first_name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hotel Name</label>
                    <input type="text" id="hotel_name"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Ex: Digha Saikatabas" required/>
                </div>
                <div>
                    <label htmlFor="first_name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Guest Name</label>
                    <input type="text" id="guest_name"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Ex: Subham" required/>
                </div>
                <div>
                    <label htmlFor="check_in_date"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check-in
                        Date</label>
                    <input id="startDate"
                           name="startDate"
                           type="datetime-local"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="08.08.2023" required/>
                </div>
                <div>
                    <label htmlFor="check_out_date"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check-out
                        Date</label>
                    <input id="endDate"
                           name="endDate"
                           type="datetime-local"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="09.09.2023" required/>
                </div>
                <div><label htmlFor="paymentby"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room
                    Category</label>
                    <select id="paymentby"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Executive Double Room</option>
                        <option value="US">Superior Double Room</option>
                        <option value="CA">Premium Quad Triple</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="nor"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of
                        Room</label>
                    <input type="text" id="nor"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="20" required/>
                </div>
                <div>
                    <label htmlFor="nop" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number
                        of Person</label>
                    <input type="number" id="nop"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="4" required/>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Booking Amount
                    </label>
                    <input
                        type="number"
                        id="bookingAmount"
                        value={bookingAmount}
                        onChange={handleBookingAmountChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter booking amount"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="da"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Advance Amount
                    </label>
                    <input
                        type="number"
                        id="advanceAmount"
                        value={advanceAmount}
                        onChange={handleAdvanceAmountChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter advance amount"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="da"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Due Amount
                    </label>
                    <input
                        id="duedate"
                        type="text"
                        value={dueAmount}
                        readOnly
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="ad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Advance
                        Date</label>
                    <input id="Advancedate"
                           name="endDate"
                           type="datetime-local"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="24.05.26" required/>
                </div>
                <div><label htmlFor="paymentby"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Booking
                    Source</label>
                    <select id="paymentby"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose</option>
                        <option value="US">Booking.com</option>
                        <option value="CA">Agoda</option>
                        <option value="FR">Cleartrip</option>
                        <option value="DE">Yatra</option>
                        <option value="DE">Sayango</option>
                        <option value="DE">Offline</option>
                        <option value="DE">Travel Agent</option>
                        <option value="DE">Via.com</option>
                        <option value="DE">Paytm</option>
                        <option value="DE">Lxiogo</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="bb" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Booking
                        By</label>
                    <input type="text" id="bb"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Someone" required/>
                </div>
                <div><label htmlFor="plan"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plan</label>
                    <select id="plan"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>AP</option>
                        <option value="US">CP</option>
                        <option value="CA">MAP</option>
                        <option value="FR">EP</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="cn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact
                        Number</label>
                    <input type="number" id="cn"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="+91 999999999" required/>
                </div>


                <div className="mb-6">
                    <label htmlFor="remark"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Remarks</label>
                    <input type="text" id="remark"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Very Good" required/>
                </div>
            </div>


            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
            </button>
        </form>
    );
};

export default InputBooking;
