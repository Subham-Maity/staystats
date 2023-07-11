import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Footer from "@/components/footer/Footer";
import Providers from "@/app/providers";

const inter = Inter({subsets: ["latin"]});

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
        <Providers>
            <Navbar/>
            {children}
            <Footer/>
        </Providers>
        </body>
        </html>
    );
}
