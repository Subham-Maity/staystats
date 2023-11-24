import React from "react";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import DefaultLayout from "@/app/defaultLayout";
import Footer from "@/components/footer/Footer";
import Providers from "@/app/providers";
import ThemeSwitcher from "@/components/mode/Switcher";
import {ReduxProviders} from "@/lib/provider";
import BookingProvider from "@/components/dash/Provider/Booking/BookingProvider";
import UserProvider from "@/components/dash/Provider/User/UserProvider";
import HotelProvider from "@/components/dash/Provider/Hotel/HotelProvider";
import ContextProvider from "@/context/ContextProvider";
import AdminProtector from "@/Protector/Admin";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Sayngo",
    description: "Store Your Internal Data",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="class">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            <meta name="description" content="Store Your Internal Data"/>
        </head>
        <Providers>
            <body
                className={`${inter.className} overflow-hidden dark:bg-[#25293c]`}
            >
            <ReduxProviders>
                <ContextProvider>
                    <DefaultLayout>
                            <HotelProvider>
                                <UserProvider>
                                    <BookingProvider>
                                        {children}
                                    </BookingProvider>
                                </UserProvider>
                            </HotelProvider>
                        </DefaultLayout>
                </ContextProvider>
            </ReduxProviders>
            </body>
        </Providers>
        </html>
    );
}
