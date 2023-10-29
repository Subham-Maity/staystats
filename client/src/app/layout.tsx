import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DefaultLayout from "@/app/defaultLayout";
import Footer from "@/components/footer/Footer";
import Providers from "@/app/providers";
import ThemeSwitcher from "@/components/mode/Switcher";
import { ReduxProviders } from "@/lib/provider";
import BookingProvider from "@/components/dash/Provider/Booking/BookingProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sayngo",
  description: "Store Your Internal Data",
  // icons: [
  //     { rel: "icon", url: "./sayngo.png" },
  // ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="class">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Store Your Internal Data" />
        {/* <link rel="icon" href="/sayngo.png"/> */}
      </head>
      <Providers>
        <body
          className={`${inter.className} overflow-hidden dark:bg-[#25293c]`}
        >
          <ReduxProviders>
            <DefaultLayout>
              <BookingProvider>{children}</BookingProvider>
            </DefaultLayout>
          </ReduxProviders>
        </body>
      </Providers>
    </html>
  );
}
