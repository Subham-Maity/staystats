import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Footer from "@/components/footer/Footer";
import Providers from "@/app/providers";
<<<<<<< HEAD
=======
import ThemeSwitcher from "@/components/Mode/ThemeSwitcher";
>>>>>>> bce41e2f8d6989c2c13dce4254fbba75ad9726cd

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
<<<<<<< HEAD
        <Providers>
            <Navbar/>
            {children}
            <Footer/>
        </Providers>
=======
        <Navbar/>
        <Providers>
            <ThemeSwitcher/>
            {children}
        </Providers>

        <Footer/>
>>>>>>> bce41e2f8d6989c2c13dce4254fbba75ad9726cd
        </body>
        </html>
    );
}
