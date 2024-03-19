import React from 'react'
import { Typography } from '@mui/material'
import { Slider } from './components/Slider'
import { Container } from './components/Container'





export const Resourses = () => {
    return (
        <Container>
            <Typography fontWeight={{ xs: 500, lg: 600 }} color={'appText.black'} align='center' fontSize={{ xs: 20, lg: 24 }}>مقالاتی برگرفته شده از مجلات معتبر:</Typography>
            <Slider />
        </Container>
    )
}
