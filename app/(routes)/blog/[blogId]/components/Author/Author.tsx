'use client'

import React from 'react'

import { BlogAuthorType } from '@types'
import { Avatar as MuiAvatar, Box, Typography, styled, Link } from '@mui/material'
import { Insta, Telegram } from '@icons'

const Avatar = styled('img')(({ theme }) => ({
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    aspectRatio: '1',
    objectFit: 'cover',
    flexShrink: 0
})) as typeof MuiAvatar


const ItemFrame = styled(Link)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    color: theme.palette.appText.light.secondary,
    gap: theme.spacing(1),
    alignItems: 'center',
    fontSize: '16',
    fontWeight: '500',
    textDecoration: 'none'
})) as typeof Link


const Description = styled(Typography)(({ theme }) => ({
    WebkitLineClamp: 5,
    [theme.breakpoints.up('lg')]: {
        maxHeight: '6rem',
    },
    [theme.breakpoints.down('lg')]: {
        maxHeight: '6rem',
    },
    textAlign: 'right',
    // [theme.breakpoints.up('lg')]: {
    //     width: '700px'
    // },
    lineHeight: '1.5rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: "-webkit-box",
    WebkitBoxOrient: 'vertical',
    color: theme.palette.appText.light.primary
})) as typeof Typography


export const Author = ({ fullname, description, articlesNumber, img, instagram, telegram }: BlogAuthorType) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, px: { lg: 14 } , alignItems:'center' }}>

            <Avatar src={img} />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4.5, alignItems: {xs:'center' , lg:'start'} }}>


                <Typography color={'appText.black'} fontSize={{ xs: 18, lg: 20 }} fontWeight='500'>{fullname}</Typography>

                <Description fontSize={{ xs: 14, lg: 16 }} fontWeight={500} >{description}</Description>

                <Box sx={{ display: 'flex', flexDirection: {xs:'column', lg:'row'}, justifyContent: 'space-between', alignItems: 'center', gap: 6, width: '100%' }}>

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, justifyContent: 'space-between' }}>

                        <ItemFrame href={telegram}>
                            <Telegram />
                            <Typography>کانال تلگرام</Typography>
                        </ItemFrame>

                        <ItemFrame href={instagram}>
                            <Insta />
                            <Typography>کانال اینستاگرام</Typography>
                        </ItemFrame>

                    </Box>

                    <Typography color={'appText.black'} fontSize={{ xs: 20, lg: 24 }} fontWeight={600} >{articlesNumber} مقاله ثبت شده</Typography>

                </Box>

            </Box>
        </Box>
    )
}
