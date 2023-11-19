"use client";
import React, { useEffect, useState } from "react";
import { fetchOwner } from "@/utils";
import { toast } from "react-toastify";
import {useRouter} from "next/navigation";


const AdminProtector =  ({ children }: { children: React.ReactNode }) => {

    const [accountType, setAccountType] = useState("");
    const [owner, setOwner] = useState({});
    const router = useRouter();

    useEffect(() => {
        let userId = JSON.parse(localStorage.getItem("user") || "{}")?._id;
        let updateUser = async () => {
            const user = await fetchOwner(userId);
            if (user && user._id && user.isActive) {
                setOwner(user);
                localStorage.setItem("user", JSON.stringify(user));
                setAccountType(user?.role);
            } else {
                toast.error("You are not authorized to view this page");
                localStorage.removeItem("user");
                localStorage.removeItem("authToken");

                router.push("/login");
            }
        };
        updateUser();
    }, []);

    useEffect(() => {
        if (accountType && accountType !== "ADMIN") {
            router.push("/bookings");
        }
    }, [accountType, router]);

    return accountType === "ADMIN" ? children : null;
};

export default AdminProtector;
