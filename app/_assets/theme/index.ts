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
            light: 'rgba(240, 240, 240, 1)',
            main: 'black',
            primary: 'rgba(255, 204, 102, 1)',
            secondary: 'rgba(102, 0, 0, 1)',
        },
        appText: {
            light: {
                primary: 'rgba(51, 51, 102, 1)',
                secondary: 'rgba(153, 153, 179, 1)'

            },
            dark: {
                support: 'rgba(255, 204, 153, 1)'
            },
            black: 'rgba(48, 51, 55, 1)'
        },
        navy: {
            25:'rgba(204, 204, 217, 1)',
            75: 'rgba(102, 102, 140, 1)'
        },
        red:{
            25:'rgba(217, 191, 191, 1)'
        }
    }
})


declare module '@mui/material/styles' {
    interface Palette {
        body: Palette['primary'] & { primary: string  , secondary: string},
        navy: {
            25:string
            75: string,
        },
        red:{
            25:string
        }
        appText: {
            light: Palette['primary'] & { primary: string, secondary: string },
            black: string,
            dark: {
                support: string
            }
        }
    }

    interface PaletteOptions {
        body?: PaletteOptions['primary'] & { primary: string , secondary: string},
        appText?: {
            light: { primary: string, secondary: string },
            black: string,
            dark: {
                support: string
            }
        },
        red:{
            25:string
        }
        navy: {
            25:string
            75: string,
        }
    }
}