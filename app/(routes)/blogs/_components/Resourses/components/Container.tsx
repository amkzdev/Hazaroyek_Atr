'use client'

import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
        gap: theme.spacing(10)
    },
    gap: theme.spacing(7.5),
    alignItems: 'center'
})) as typeof Box