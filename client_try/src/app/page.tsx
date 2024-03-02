import Image from "next/image";
import Table from "@/components/Table/Table";
import Dashboard from "@/components/dash/Dashboard";
import React from "react";
import AdminProtector from "@/Protector/Admin";
import HotelProvider from "@/components/dash/Provider/Hotel/HotelProvider";
import UserProvider from "@/components/dash/Provider/User/UserProvider";
import BookingProvider from "@/components/dash/Provider/Booking/BookingProvider";

export default function Home() {
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
    <div>
      <AdminProtector>
        <HotelProvider>
          <UserProvider>
            <BookingProvider>
              <Dashboard />
            </BookingProvider>
          </UserProvider>
        </HotelProvider>
      </AdminProtector>
    </div>
  );
}
