'use client'

import { Box, styled } from "@mui/material"

export const CenteredPage = styled(Box)({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    height:'100vh',
    justifyContent:'center'
}) as typeof Box