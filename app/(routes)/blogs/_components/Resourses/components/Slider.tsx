'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import { Box, styled } from '@mui/material';

import mag1 from '@assets/mags/1.png'
import mag2 from '@assets/mags/2.png'
import mag3 from '@assets/mags/3.png'
import mag4 from '@assets/mags/4.png'
import mag5 from '@assets/mags/5.png'
import Image from 'next/image';


const CustomSlide = styled(SwiperSlide)({
    position: 'relative',
    height: '50px'
}) as typeof SwiperSlide



const Container = styled(Box)({
    width: '100%',
    height: '500px'
}) as typeof Box


export const Slider = () => {
    return (
        <Container >

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                dir='ltr'
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 35
                    },
                    1000: {
                        slidesPerView: 5,
                        spaceBetween: 50
                    }
                }}
                style={{
                    ["--swiper-theme-color" as string]: "rgba(255, 204, 102, 1)",
                    paddingBottom: '53px'
                }}
            >
                <CustomSlide><Image alt='mag-1' src={mag1} fill style={{ objectFit: 'contain' }} /></CustomSlide>
                <CustomSlide><Image alt='mag-2' src={mag2} fill style={{ objectFit: 'contain' }} /></CustomSlide>
                <CustomSlide><Image alt='mag-3' src={mag3} fill style={{ objectFit: 'contain' }} /></CustomSlide>
                <CustomSlide><Image alt='mag-4' src={mag4} fill style={{ objectFit: 'contain' }} /></CustomSlide>
                <CustomSlide><Image alt='mag-5' src={mag5} fill style={{ objectFit: 'contain' }} /></CustomSlide>
            </Swiper>

        </Container>
    )
}
