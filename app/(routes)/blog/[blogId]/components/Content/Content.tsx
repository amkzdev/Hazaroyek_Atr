'use client'

import React from 'react'

import { Avatar, Box, Typography, styled } from '@mui/material'
import { BlogType } from '@types'
import { Tags } from './Tags'

const BlogImage = styled('img')(({ theme }) => ({
    borderRadius: theme.spacing(1.5),
    width: '90%',
    aspectRatio: 'auto'
})) as typeof Avatar


export const Content = ({ title, description, img, subSections, date, tags }: BlogType) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', pr: { lg: 3 }, gap: 4, borderRight: { lg: '1px solid #e2e2e2' } }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, alignItems: { xs: 'center', lg: 'start' }, textAlign: { xs: 'center', lg: 'right' } }}>

                <Typography fontWeight={700} fontSize={{ xs: 24, lg: 30 }} color='appText.black' >{title}</Typography>

                <Typography fontWeight={500} fontSize={{ xs: 16, lg: 20 }} color='navy.75' >{description}</Typography>

                <BlogImage src={img} />

            </Box>

            {subSections?.map(item => <Box className='blog-section' id={`section-${item.id}`} sx={{ display: 'flex', flexDirection: 'column', gap: 2, color: 'appText.light.primary' }}>
                <Typography fontSize={{ xs: 16, lg: 20 }} fontWeight={500}>{item.title}</Typography>
                <Box sx={{ fontSize: { xs: 14, lg: 16 } }} >
                    <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                </Box>

            </Box>)}

            <Typography fontSize={{ xs: 14, lg: 16 }} color='appText.light.secondary' align='left'>تالیف {date} </Typography>

            <Tags tags={tags} />

        </Box>
    )
}
