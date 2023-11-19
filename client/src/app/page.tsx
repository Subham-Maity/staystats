import Image from "next/image";
import Table from "@/components/Table/Table";
import Dashboard from "@/components/dash/Dashboard";
import React from "react";
import AdminProtector from "@/Protector/Admin";

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
                <Dashboard/>
            </AdminProtector>
        </div>
    );
}
