"use client"
import React, {useEffect} from "react";
import {ThemeProvider} from "next-themes";

const Providers = ({children}: { children: React.ReactNode }) => {

    const [mounted, setMounted] = React.useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <>{children}</>
    return <ThemeProvider attribute="class">
        {children}
    </ThemeProvider>

};

export default Providers;