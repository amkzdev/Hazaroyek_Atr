'use client'
import React from 'react'
import { Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import { BlogType } from '@/_types';
import { SingleComment } from './SingleComment';


export const CommentsSlider = ({ comments  , blogImg , blogTitle}: { comments: BlogType['comments'], blogImg :string , blogTitle:string }) => {
    return (
        <Box sx={{width:'100%' }}>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                modules={[Navigation]}
                dir='ltr'
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        navigation:false
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 35,
                        navigation:true

                    },
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                        navigation:true
                    }
                }}
                style={{
                    ["--swiper-theme-color" as string]: "rgba(255, 204, 102, 1)",
                    // height:'300px'
                    // paddingBottom: '53px'
                }}
            >
                {comments?.map(item => <SwiperSlide style={{}}>
                    <SingleComment blogImage={blogImg} blogTitle={blogTitle}  {...item} />
                </SwiperSlide>)}
                {/* <SwiperSlide>sdfsdf</SwiperSlide> */}
                {/* <CustomSlide><Image alt='mag-1' src={mag1} fill style={{ objectFit: 'contain' }} /></CustomSlide>
                <CustomSlide><Image alt='mag-2' src={mag2} fill style={{ objectFit: 'contain' }} /></CustomSlide>
                <CustomSlide><Image alt='mag-3' src={mag3} fill style={{ objectFit: 'contain' }} /></CustomSlide>
                <CustomSlide><Image alt='mag-4' src={mag4} fill style={{ objectFit: 'contain' }} /></CustomSlide>
                <CustomSlide><Image alt='mag-5' src={mag5} fill style={{ objectFit: 'contain' }} /></CustomSlide> */}
            </Swiper>
        </Box>
    )
}
