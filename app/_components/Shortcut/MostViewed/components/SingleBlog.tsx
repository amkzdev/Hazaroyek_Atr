'use client'
import { ArrowDropLeft, Chat, View } from '@icons'
import { Avatar, Box, Link, StyledComponentProps, Typography, styled } from '@mui/material'
import { BlogSingleItem } from '@types'
import React from 'react'


const BlogImage = styled('img')<React.ImgHTMLAttributes<HTMLImageElement>>(({ theme }) => ({
    borderRadius: theme.spacing(1.5),
    width: "250px",
    aspectRatio: 1,
    position: 'relative'
})) as typeof Avatar


const ViewMoreButton = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: theme.palette.body.dark,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(1),
})) as typeof Link

const ItemWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(1),
    color: 'white',
    alignItems: 'center',
    verticalAlign: 'middle',
    // [theme.breakpoints.down('lg')]: {
    //     fontSize: '12px'
    // },
    // [theme.breakpoints.up('lg')]: {
    //     fontSize: '12px'
    // }
})) as typeof Box


export const SingleBlog = ({ title, description, img, comments, date, id, view }: BlogSingleItem) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3, alignItems: { xs: 'center' } }}>
            {/* <img src={img} alt='سلام' style={{ height: '100%', width: 'auto' }} /> */}

            <Box sx={{ display: 'flex', position: 'relative' }}>
                <BlogImage src={img} />
                <Box sx={{ display: 'flex', color: 'white', position: 'absolute', bottom: '12px', left: '50%', gap: 4, transform: 'translateX(-50%)', background: 'red', p: 1, borderRadius: 2.5, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'space-around' }}>

                    <ItemWrapper>
                        <View />
                        <Typography variant='subtitle1' fontSize={{xs:14 , lg:16}}>{view}</Typography>
                    </ItemWrapper>

                    <ItemWrapper>
                        <Chat />
                        <Typography variant='subtitle1' fontSize={{xs:14 , lg:16}}>{comments}</Typography>
                    </ItemWrapper>

                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography color={'appText.black'} sx={{ height: { lg: '4rem' }, WebkitLineClamp: 2, textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical' }} fontWeight={500} fontSize={{ xs: 16, lg: 20 }}>{title} {description}</Typography>

                <Typography color='appText.light.primary' component={'p'} sx={{ WebkitLineClamp: 3, textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', height: '6rem' }}>{description}</Typography>

                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography color={'appText.light.secondary'} fontSize={{ xs: 10, lg: 14 }} >{date}</Typography>

                    <ViewMoreButton href={`/blog/${id}`} >
                        <Typography fontSize={{ xs: 12, lg: 16 }}>مشاهده مقاله</Typography>
                        <ArrowDropLeft />

                    </ViewMoreButton>

                </Box>

            </Box>


        </Box>
    )
}
