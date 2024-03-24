import { Avatar, Box, Grid, Typography } from '@mui/material'
import { CommentType } from '@types'
import React, { useState } from 'react'
import { CustomButton, IntractIcon } from '../../SingleComment'
import { ChevronDown, ChevronUp, Reply, ThumbsDown, ThumbsUp } from '@/_assets/icons'
import { CommentPopUp } from '../../CommentPopup/CommentPopUp'

export const LevelOne = (comment: CommentType) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { description, date, dislikeCount, fullname, id, img, likesCount, repliesCount, replies } = comment

    return (
        <>
            <Grid container spacing={2} sx={{ boxSizing: 'border-box', width: "100%" }} >

                <Grid order={1} item xs={8} lg={3}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2.5, alignItems: { xs: 'start', lg: 'center' } }}>
                        <Avatar src={img} sizes='60px' alt={fullname} sx={{ width: { xs: '50px', lg: '60px' }, height: { xs: '50px', lg: '60px' } }} />

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 1, flexWrap: 'wrap' }}>

                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5, alignItems: 'center' }}>
                                <Typography fontSize={{ xs: 14, lg: 16 }} fontWeight={700} color={'appText.light.primary'}> {fullname}</Typography>
                                {!!repliesCount && <Typography fontSize={{ xs: 12, lg: 14 }} color='appText.light.secondary'>{repliesCount} پاسخ</Typography>}
                            </Box>

                            <Typography align='center' sx={{ display: { xs: 'block', lg: 'none' } }} fontSize={{ xs: 12, lg: 14 }} color='appText.light.secondary'>{date}</Typography>


                            {!!repliesCount && <>

                                <CustomButton onClick={() => setIsOpen(!isOpen)}>
                                    <Typography fontSize={14}>{isOpen ? 'پنهان کردن پاسخ ها' : 'نمایش پاسخ ها'}</Typography>
                                    {isOpen ? <ChevronUp width={15} height={15} /> : <ChevronDown width={15} height={15} />}
                                </CustomButton></>}
                        </Box>

                    </Box>
                </Grid>

                <Grid order={{ xs: 3, lg: 2 }} item xs={12} lg={7}>
                    <Typography color='appText.light.primary' fontSize={{ xs: 12, lg: 14 }} sx={{ minHeight: '5.5rem' }}>{description}</Typography>
                </Grid>

                <Grid order={{ xs: 2, lg: 3 }} item xs={4} lg={2} sx={{ borderRight: { lg: '1px solid #e2e2e2' } }} alignItems={'stretch'} gap={2} display={'flex'} flexDirection={'column'}>

                    <Typography align='center' sx={{ display: { xs: 'none', lg: 'block' } }} fontSize={{ xs: 12, lg: 14 }} color='appText.light.secondary'>{date}</Typography>

                    <Box className='content' sx={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-around', gap: { xs: 1.5, lg: 0.5 }, alignItems: 'center' }}>
                        <IntractIcon color='alerts.success.light' onClick={() => alert('Like')}>
                            <ThumbsUp />
                            <Typography>{likesCount}</Typography>
                        </IntractIcon>

                        <IntractIcon color='alerts.light' onClick={() => alert('Dislike')} >
                            <ThumbsDown />
                            <Typography>{dislikeCount}</Typography>
                        </IntractIcon>

                        <CommentPopUp blogImage='' blogTitle='عنوان مقاله' mode='reply' targetComment={comment}>
                            <IntractIcon color='appText.light.primary' >
                                <Reply />
                                <Typography>پاسخ</Typography>
                            </IntractIcon>
                        </CommentPopUp>

                    </Box>
                </Grid>


            </Grid>
        </>
    )
}
