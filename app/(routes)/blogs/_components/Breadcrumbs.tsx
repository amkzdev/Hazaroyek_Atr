import { Typography, Breadcrumbs as MuiBread } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export const Breadcrumbs = () => {
    return (
        <MuiBread separator='>'>
            <Typography color='body.dark'>خانه</Typography>
            <Typography  color={'appText.light.secondary'}>وبلاگ</Typography>
        </MuiBread>
    )
}
