'use client'
import React from 'react'
import { Box, styled } from '@mui/material'

export const Divider = styled(Box)(({theme})=>({
    backgroundColor:'rgba(229, 231, 235, 1)',
    width:'100%',
    height:'1px',
})) as typeof Box