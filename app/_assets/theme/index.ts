'use client'

import { createTheme } from "@mui/material/styles";
import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({ subsets: ["latin"] });

export const theme = createTheme({
    typography: {
        fontFamily: vazir.style.fontFamily
    },
    palette: {
        body: {
            dark: 'rgba(51, 51, 102, 1)',
            main: 'sdfds'
        },
        appText: {
            light: {
                primary: 'rgba(153, 153, 179, 1)',

            },
            black: 'rgba(48, 51, 55, 1)'
        },
        navy: {
            75: 'rgba(102, 102, 140, 1)'
        }
    }
})


declare module '@mui/material/styles' {
    interface Palette {
        body: Palette['primary'],
        appText: {
            light: Palette['primary'], black: string, navy: {
                75: string
            }
        }
    }

    interface PaletteOptions {
        body?: PaletteOptions['primary'],
        appText?: {
            light: { primary: string }, black: string, 
        };
        navy: {
            75: string
        }
    }
}