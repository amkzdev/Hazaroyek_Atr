'use client'

import React, { ReactNode, useState } from 'react'
import { CommentType } from '@/_types'
import { Avatar, Box, Button, TextField, Typography, styled } from '@mui/material'
import { createPortal } from 'react-dom'
import { Add, Close } from '@/_assets/icons'
import { SuccessAdded } from '../SuccessAdded'

const BlogImage = styled('img')(({ theme }) => ({
    width: '240px',
    aspectRatio: '1',
    borderRadius: theme.spacing(2.5),
    objectFit: 'contain'
})) as typeof Avatar


const Textarea = styled('textarea')(({ theme }) => ({
    border: "1px solid #e2e2e2",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2.5),
    fontFamily: theme.typography.fontFamily,
    outline: 'none',
    fontSize: theme.spacing(2),
    width: '100%',
    boxSizing: 'border-box',
    ':placeholder-shown': { color: theme.palette.navy[25] }
})) as typeof TextField



const CloseButton = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.5),
    borderRadius: '50%',
    background: theme.palette.gray[75],
    position: 'absolute',
    left: theme.spacing(2.5),
    top: theme.spacing(2.5),
    aspectRatio: 1,
    cursor: 'pointer',
    display: 'flex',
    ':hover': { backgroundColor: theme.palette.grey[300] }
})) as typeof Box



const SendButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
    gap: theme.spacing(1.25),
    color: 'white',
    fontSize: theme.spacing(2),
    background: theme.palette.body.dark,
    width: 'fit-content',
    ":hover": {
        background: theme.palette.body.dark,
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
        padding: `${theme.spacing(7)} ${theme.spacing(12)}`,
        minWidth: '800px'
    },
    padding: `${theme.spacing(8)} ${theme.spacing(8)}`,
    boxSizing: 'border-box',
    gap: theme.spacing(4),
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '60vw',
    backgroundColor: 'white',
    borderRadius: theme.spacing(3),
    position: 'relative'
})) as typeof Box



export const CommentPopUp = ({ mode, targetComment, children, blogTitle, blogImage }: { mode: 'add' | 'reply', targetComment?: CommentType, children: ReactNode, blogTitle: string, blogImage: string }) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const [isCommentAdded, setCommentStatus] = useState<boolean>(false)

    return (
        <>
            <Box onClick={() => setIsModalOpen(true)} sx={{ cursor: 'pointer' }}>
                {children}
            </Box>

            {isModalOpen && !isCommentAdded && createPortal(<PopUpContainer>
                <PopUpContent>

                    <CloseButton onClick={() => setIsModalOpen(false)}><Close width={20} height={20} /></CloseButton>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 5 }}>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, lg: 4 } }}>
                            <Typography fontSize={{ xs: 16, lg: 18 }} color='appText.black' fontWeight={700}>دیدگاه خود را برای این مقاله بنویسید</Typography>
                            {mode == 'reply' && <Typography color={'navy.75'} fontSize={{ xs: 16, lg: 18 }} fontWeight={500}>در پاسخ به دیدگاه {targetComment?.fullname}</Typography>}
                            <Typography fontSize={{ xs: 16, lg: 20 }} color='appText.black' fontWeight={700}>{blogTitle}</Typography>
                        </Box>

                        <BlogImage src={blogImage} />

                    </Box>

                    <Textarea
                        rows={4}
                        placeholder='دیدگاه خود را بنویسید.'
                    />

                    <SendButton onClick={() => setCommentStatus(true)}>
                        <Typography>ثبت دیدگاه</Typography>
                        <Add />
                    </SendButton>

                </PopUpContent>
            </PopUpContainer>
                , document.body)}


            {isCommentAdded && <SuccessAdded toggleOpen={() => setCommentStatus(false)} />}
        </>)
}
