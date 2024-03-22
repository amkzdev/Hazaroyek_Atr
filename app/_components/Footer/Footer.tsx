'use client'

import { Box, styled } from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.body.dark,
    color:'white',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // maxWidth:'1440px',
    margin: '0 auto',
    fontSize:20
})) as typeof Box



export const Footer = () => {
  return (
    <FooterContainer>فوتر فروشگاه</FooterContainer>
  )
}
