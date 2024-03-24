'use client'

import { Box, styled } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.body.dark,
    color:'white',
    // height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
    // maxWidth:'1440px',
    margin: '0 auto',
    fontSize:20,
    gap:4,
    padding:'8px',
    textDecoration:'none !important',
})) as typeof Box