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


export const Gift = () => {
    return (
        <Box sx={{ backgroundColor: 'body.light', display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, width: '100%', p: { md: 8 }, pr: { md: 0 } }}>
            <Box sx={{ order: { xs: 2, md: 1 }, position: 'relative', boxSizing: 'border-box', pl: { xs: 12, md: 0 }, display: 'flex', justifyContent: 'start', flexDirection: 'row', flex: 1 }}>
                <ImageFrame>
                    <Image src={womanGift} alt='gift' fill style={{ objectFit: 'contain', aspectRatio: 1 }} />
                </ImageFrame>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 7 }, alignItems: 'center', justifyContent: 'center', p: 4, order: { xs: 1, md: 2 } }}>
                <Typography color={'appText.black'} fontSize={{ xs: 24, md: 30 }} fontWeight={'bold'}>یک هدیه برای شما...</Typography>
                <Typography variant='subtitle2' fontWeight={500} color={'navy.75'} align='center' sx={{ maxWidth: { md: '600px' } }} fontSize={{ xs: 16, md: 20 }}>گزیده‌ای از برترین مقالات تخصصی و آموزشی در مورد عطرهای روز دنیا برای آشنایی ، بحس و تبادل درباره آن‌ها. نوشته شده و یا ترجمه شده توسط برترین متخصصین عطر ایران</Typography>
                <PrimaryButton>ثبت نام و ثبت ایمیل</PrimaryButton>
            </Box>

        </Box>
    )
}
