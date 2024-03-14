'use client'

import { Box, styled } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.body.dark,
    color:'white',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})) as typeof Box