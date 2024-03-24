'use client'
import React, { ComponentProps } from 'react'
import { Box, BoxProps, StyledComponentProps, styled } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import { BlogType } from '@/_types';
import { SingleComment } from './SingleComment';
import { ChevronUp } from '@/_assets/icons';
import { OverridableComponent } from '@mui/material/OverridableComponent';

const NavButton = styled(Box)(({ theme, style }) => ({
    // aspectRatio: 1,
    color: 'white',
    backgroundColor: theme.palette.navy[25],
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [theme.breakpoints.up('lg')]: {
        display: 'flex',
    },
    display: 'none',
    borderRadius: '50%',
    padding: '4px',
    width: '2rem',
    height: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexWrap: 'nowrap',
    ...style
})) as typeof Box


export const CommentsSlider = ({ comments, blogImg, blogTitle }: { comments: BlogType['comments'], blogImg: string, blogTitle: string }) => {
    return (
        <Box sx={{ width: '100%', position: 'relative' }}>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                modules={[Navigation]}
                dir='rtl'
                navigation={{ nextEl: "#next-slide", prevEl: "#prev-slide", enabled: true }}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        // navigation: false
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 35,
                        // navigation: true

                    },
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                        // navigation: true
                    }
                }}
                style={{
                    ["--swiper-theme-color" as string]: "rgba(255, 204, 102, 1)",
                }}
            >
                {comments?.map(item => <SwiperSlide style={{}}>
                    <SingleComment blogImage={blogImg} blogTitle={blogTitle}  {...item} />
                </SwiperSlide>)}


            </Swiper>
            <NavButton style={{ right: '-3.5rem' }} id='next-slide'><ChevronUp style={{ transform: 'rotate(90deg)' }} /></NavButton>
            <NavButton style={{ left: '-3.5rem' }} id='prev-slide'><ChevronUp style={{ transform: 'rotate(-90deg)' }} /></NavButton>
        </Box>
    )
}
