import React, { useState } from 'react'

import { CommentType } from '@types'
import { Avatar, Box, Button, Grid, Typography, styled } from '@mui/material'
import { ArrowDropLeft, ChevronDown, Minus, Reply, Substract, ThumbsDown, ThumbsUp } from '@/_assets/icons'
import { CommentPopUp } from './CommentPopup/CommentPopUp'
import { createPortal } from 'react-dom'
import { RepliesComponent } from './RepliesComponent/RepliesComponent'


const Container = styled(Grid)(({ theme }) => ({
    '& .content': {
        ':not(.open)': {
            backgroundColor: theme.palette.body.light,
        },
        padding: theme.spacing(2),
        borderRadius: theme.spacing(2),
        boxSizing: 'border-box',
        margin: '4px',
        direction: 'rtl',
        height: `calc(100% - ${theme.spacing(2)})`
    },
})) as typeof Grid


export const CustomButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(1),
    alignItems: 'center',
    color: theme.palette.body.dark,
    cursor: 'pointer',
    '& .MuiTypography-root': {

        fontWeight: 600
    }
})) as typeof Box


export const IntractIcon = styled(Box)(({ theme, color }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    alignItems: 'center',
    color: color?.toString(),
    cursor:'pointer'
})) as typeof Box


export const SingleComment = ({ blogImage, blogTitle, ...comment }: CommentType & { blogImage: string, blogTitle: string }) => {

    const { fullname, img, date, description, dislikeCount, id, likesCount, repliesCount , replies } = comment

    const [viewMore, setViewMore] = useState<boolean>(false)

    const [viewReplies, setViewReplies] = useState<boolean>(false)

    return (
        <Container container direction={'row'} justifyContent={'stretch'} >

            <Grid item xs={12} >
                <Box className='content' sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2.5, alignItems: 'center' }}>
                        <Avatar src={img} sizes='60px' alt={fullname} sx={{ width: { xs: '50px', lg: '60px' }, height: { xs: '50px', lg: '60px' } }} />

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>

                            <Typography fontSize={{ xs: 14, lg: 16 }} fontWeight={700} color={'appText.light.primary'}> {fullname}</Typography>
                            <Typography fontSize={{ xs: 12, lg: 14 }} color='appText.light.secondary'>{date}</Typography>
                        </Box>

                    </Box>

                    <Box sx={{ WebkitLineClamp: !viewMore ? 4 : 30000000, WebkitBoxOrient: !viewMore ? 'vertical' : 'unset', display: '-webkit-box', textOverflow: 'ellipsis', transition: 'all ease 1s', overflow: viewMore ? 'visible' : 'hidden', maxHeight: !viewMore ? { xs: '5rem', lg: '5.5rem' } : '100000px' }} >
                        <Typography color='appText.light.primary' fontSize={{ xs: 12, lg: 14 }} sx={{ minHeight: '5.5rem' }}>{description}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'space-between', alignItems: 'center' }}>

                        <CustomButton onClick={() => setViewMore(!viewMore)}>
                            {viewMore ? <Minus /> : <Substract />}
                            <Typography>{viewMore ? 'کمتر' : 'بیشتر'}</Typography>
                        </CustomButton>

                        <CommentPopUp mode='reply' blogImage={blogImage} blogTitle={blogTitle} targetComment={comment}>
                            <CustomButton >
                                <Typography>پاسخ</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', p: 0.5, background: 'white', borderRadius: '50%' }}>
                                    <Reply />
                                </Box>
                            </CustomButton>
                        </CommentPopUp>


                    </Box>

                </Box>
            </Grid>

            <Grid item xs={4}>
                <Box className='content' sx={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-around', gap: 1, alignItems: 'center' }}>
                    <IntractIcon color='alerts.success.light' >
                        <ThumbsUp />
                        <Typography>{likesCount}</Typography>
                    </IntractIcon>

                    <IntractIcon color='alerts.light' >
                        <ThumbsDown />
                        <Typography>{dislikeCount}</Typography>
                    </IntractIcon>
                </Box>

            </Grid>
            <Grid item xs={8}>
                <CustomButton onClick={() => repliesCount ? setViewReplies(!viewReplies) : null} component={Box} className={`content ${viewReplies ? 'open' : ''}`} >
                    {!!repliesCount
                        ? (
                            viewReplies ? <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: 'center' }}>
                                <Typography>پاسخ ها به دیدگاه {fullname}</Typography>
                                <ChevronDown />
                            </Box>
                                : <>
                                    <Typography>مشاهده {repliesCount} پاسخ</Typography>
                                    <ArrowDropLeft />
                                </>
                        )
                        : <Typography color={'navy.75'}>به دیدگاه پاسخی داده نشده.</Typography>}
                </CustomButton>

            </Grid>

            {viewReplies && !!document?.querySelector('#replayBox') && createPortal(<>
                <RepliesComponent replies={replies} />
            </>, document?.querySelector('#replayBox') as Element)}

        </Container>

    )
}
