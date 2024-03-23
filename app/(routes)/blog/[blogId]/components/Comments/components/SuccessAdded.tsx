'use client'

import React from 'react'

import { Box, Button, Typography, styled } from '@mui/material'
import { createPortal } from 'react-dom'
import { ReadMessage } from '@/_assets/icons'


const IgnoreButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
    gap: theme.spacing(1.25),
    fontSize: theme.spacing(2),
    borderColor: theme.palette.body.dark,
    borderStyle: 'solid',
    borderWidth: '2px',
    color: theme.palette.body.dark,
    borderRadius: theme.spacing(1.5),
    width: 'fit-content',
    ":hover": {
        background: 'white',
    }
})) as typeof Button


const PopUpContainer = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'row',
    justifyContent: 'center',
    backdropFilter: 'brightness(0.5)',
    zIndex: 4,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    alignItems: 'center'
})) as typeof Box


const PopUpContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
        padding: `${theme.spacing(8)} ${theme.spacing(8)}`,
    },
    padding: `${theme.spacing(8)} ${theme.spacing(8)}`,
    boxSizing: 'border-box',
    gap: theme.spacing(3),
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '80vw',
    backgroundColor: 'white',
    borderRadius: theme.spacing(3),
    position: 'relative',
    textAlign: 'center'
})) as typeof Box



export const SuccessAdded = ({ toggleOpen }: { toggleOpen: Function }) => {

    return (
        <>

            {createPortal(<PopUpContainer>
                <PopUpContent>

                    <ReadMessage width={48} height={48} color='rgba(98, 197, 120, 1)' />

                    <Typography fontSize={{ xs: 16, lg: 20 }} color='appText.black' fontWeight={700}>دیدگاه شما با موفقیت ثبت شد.</Typography>

                    <Typography fontSize={{ xs: 14, lg: 18 }} color='appText.black' fontWeight={500}>پس از تایید توسط کارشناسان در وب سایت قرار خواهد گرفت.</Typography>

                    <IgnoreButton onClick={() => toggleOpen()}>متوجه شدم</IgnoreButton>
                </PopUpContent>

            </PopUpContainer>
                , document.body)}
        </>)
}
