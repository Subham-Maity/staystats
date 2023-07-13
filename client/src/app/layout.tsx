import React from "react";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DefaultLayout from "@/app/defaultLayout";
import Footer from "@/components/footer/Footer";
import Providers from "@/app/providers";
import ThemeSwitcher from "@/components/mode/Switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stay Stats",
  description: "Store Your Internal Data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
