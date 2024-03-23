'use client'

import React, { ReactNode, useState } from 'react'
import { CommentType } from '@/_types'
import { Avatar, Box, Button, TextField, Typography, styled } from '@mui/material'
import { createPortal } from 'react-dom'
import { Add, Close } from '@/_assets/icons'

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
    boxSizing:'border-box',
    ':placeholder-shown':{color:theme.palette.navy[25]}
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
    ':hover':{backgroundColor:theme.palette.grey[300]}
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




export const CommentPopUp = ({ mode, targetComment, children, blogTitle, blogImage }: { mode: 'add' | 'reply', targetComment?: CommentType, children: ReactNode, blogTitle: string, blogImage: string }) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    return (
        <>
            <Box onClick={() => setIsModalOpen(true)} sx={{ cursor: 'pointer' }}>
                {children}
            </Box>

            {isModalOpen && createPortal(<Box sx={{ display: 'flex', flexDirection: 'row' , justifyContent: 'center', backdropFilter: 'brightness(0.5)', zIndex: 4, position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', py: { xs: 8, lg: 7 }, px: { xs: 8, lg: 12 },boxSizing:'border-box' ,  gap: 4, flexDirection: 'column', alignItems: { xs: 'center', lg: 'center' }, minWidth: { xs: '60vw', lg: '400px' }, background: 'white', borderRadius: 6, position: 'relative' }}>

                    <CloseButton onClick={() => setIsModalOpen(false)}><Close width={20} height={20} /></CloseButton>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 5 }}>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, lg: 4 } }}>
                            <Typography fontSize={{ xs: 16, lg: 18 }} color='appText.black' fontWeight={700}>دیدگاه خود را برای این مقاله بنویسید</Typography>
                            {mode == 'reply' && <Typography fontSize={{ xs: 16, lg: 18 }} fontWeight={500}>در پاسخ به دیدگاه {targetComment?.fullname}</Typography>}
                            <Typography fontSize={{ xs: 16, lg: 20 }} color='appText.black' fontWeight={700}>{blogTitle}</Typography>
                        </Box>

                        <BlogImage src={blogImage} />

                    </Box>

                    <Textarea
                        rows={4}
                        placeholder='دیدگاه خود را بنویسید.'
                    />

                    <SendButton>
                        <Typography>ثبت دیدگاه</Typography>
                        <Add />
                    </SendButton>

                </Box>
            </Box>, document.body)}
        </>)
}
