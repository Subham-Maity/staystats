"use client"
<<<<<<< HEAD
import React, {useEffect} from "react";
import {ThemeProvider} from "next-themes";

const Providers = ({children}: { children: React.ReactNode }) => {

    const [mounted, setMounted] = React.useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <>{children}</>
    return <ThemeProvider>
        {children}
    </ThemeProvider>

};

export default Providers;
=======
import React from 'react';
import {ThemeProvider} from "next-themes";

const Providers = ({children}: { children: React.ReactNode }) => {
    return <ThemeProvider>{children}</ThemeProvider>
}
export default Providers;
>>>>>>> bce41e2f8d6989c2c13dce4254fbba75ad9726cd
