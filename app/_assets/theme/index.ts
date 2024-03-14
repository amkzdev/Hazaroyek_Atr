'use client'

import { createTheme } from "@mui/material";
import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({ subsets: ["latin"] });

export const theme = createTheme({
    typography: {
        fontFamily: vazir.style.fontFamily
    }
})