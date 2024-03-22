'use client'

import React from 'react'
import { BlogAuthorType, BlogSingleItem } from '@/_types'
import { Avatar as MuiAvatar, Box, Typography, styled } from '@mui/material'
import Image from 'next/image'

const Avatar = styled('img')(({ theme }) => ({
    borderRadius: '50%',
    width: '200px',
    aspectRatio: '1',
    objectFit: 'cover'
})) as typeof MuiAvatar

export const SingleAuthor = ({ fullname, description, articlesNumber, img, instagram, telegram }: BlogAuthorType) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>

            <Avatar src={img} />

            <Typography color={'appText.black'} fontSize={{ xs: 16, lg: 20 }} fontWeight='500'>{fullname}</Typography>

            <Typography color={'appText.light.primary'} fontWeight={500} sx={{ WebkitLineClamp: 5, height: '7.5rem', textAlign: 'center', width: { lg: '350px' }, lineHeight: '1.5rem', overflow: 'hidden', textOverflow: 'ellipsis', display: "-webkit-box", WebkitBoxOrient: 'vertical' }} fontSize={{ xs: 14, lg: 16 }}>{description}{description}</Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>تلگرام</Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>اینستاگرام</Box>
            </Box>

            <Typography color={'appText.black'} fontSize={{ xs: 20, lg: 24 }} sx={{mt:3}} fontWeight={600} >{articlesNumber} مقاله ثبت شده</Typography>
        </Box>
    )
}
