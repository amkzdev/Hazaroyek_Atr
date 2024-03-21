'use client'
import React from 'react'

import { PrimaryButton } from '@/_components'
import { Box, Typography, styled } from '@mui/material'
import womanGift from '@assets/images/woman-gift.png'
import Image from 'next/image'

const ImageFrame = styled(Box)(({ theme }) => ({
    position: 'relative',
    [theme.breakpoints.up('md')]: {
        height: '400px',
        width: '500px'
    },
    height: 'auto',
    width: '95%',
    aspectRatio: 1
})) as typeof Box


const Container = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.body.light,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: { flexDirection: 'row' },
    [theme.breakpoints.down('md')]: { flexDirection: 'column' },
    width: '100%',
    [theme.breakpoints.up('md')]: { padding: theme.spacing(8)  , paddingRight: 0},
    boxSizing:'border-box'
})) as typeof Box



const FirstRow = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: { order: 1 },
    order: 2,
    position: 'relative',
    boxSizing: 'border-box',
    [theme.spacing('md')]: { paddingLeft: 0 },
    paddingLeft: theme.spacing(12),
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'row',
    flex: 1
})) as typeof Box



export const Gift = () => {
    return (
        <Container>

            <FirstRow>
                <ImageFrame>
                    <Image src={womanGift} alt='gift' fill style={{ objectFit: 'contain', aspectRatio: 1 }} />
                </ImageFrame>
            </FirstRow>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 7 }, alignItems: 'center', justifyContent: 'center', p: 6, order: { xs: 1, md: 2 } }}>
                <Typography color={'appText.black'} fontSize={{ xs: 24, md: 30 }} fontWeight={'bold'}>یک هدیه برای شما...</Typography>
                <Typography variant='subtitle2' fontWeight={500} color={'navy.75'} align='center' sx={{ maxWidth: { md: '600px' } }} fontSize={{ xs: 16, md: 20 }}>گزیده‌ای از برترین مقالات تخصصی و آموزشی در مورد عطرهای روز دنیا برای آشنایی ، بحس و تبادل درباره آن‌ها. نوشته شده و یا ترجمه شده توسط برترین متخصصین عطر ایران</Typography>
                <PrimaryButton href='/#'>ثبت نام و ثبت ایمیل</PrimaryButton>
            </Box>

        </Container>
    )
}
