'use client'

import { Box, Typography, styled } from '@mui/material'
import React from 'react'


const Container = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2.5), 
    textAlign: 'center'
})) as typeof Box



export const Title = () => {
    return (
        <Container>
            <Typography variant='h3' color={'appText.black'} fontWeight={'bold'} fontSize={{ xs: 24, lg: 30 }}>وبلاگ هزار و یک عطر</Typography>
            <Typography variant='subtitle2' color={'navy.75'} fontSize={{ xs: 16, lg: 20 }}>گزیده‌ای از برترین مقالات تخصصی و آموزشی در مورد عطرهای روز دنیا برای آشنایی ، بحس و تبادل درباره آن‌ها. نوشته شده و یا ترجمه شده توسط برترین متخصصین عطر ایران</Typography>
        </Container>
    )
}
