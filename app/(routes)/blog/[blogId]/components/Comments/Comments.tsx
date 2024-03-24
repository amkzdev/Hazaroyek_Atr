import React from 'react'

import { BlogType } from '@/_types'
import { Box, Typography } from '@mui/material'
import { CommentsSlider } from './components/CommentsSlider'
import { CommentPopUp } from './components/CommentPopup/CommentPopUp'
import { Plus } from '@/_assets/icons'

export const Comments = ({ commentsCount, commentsUserCount, comments, img, title }: BlogType) => {

    const isUserLoggedIn = false

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Typography fontSize={{ xs: 24, lg: 30 }} color='appText.black'>دیدگاه شما</Typography>
                {!!commentsCount && <Typography fontSize={{ xs: 16, lg: 20 }} color={'appText.light.secondary'}>{commentsCount} دیدگاه از {commentsUserCount} نفر</Typography>}
                {!isUserLoggedIn && <Typography color={'alerts.alert'} fontWeight={500} fontSize={{ xs: 16, lg: 20 }}>برای ثبت دیدگاه شما باید عضو وبسایت هزار و یک عطر باشید.</Typography>}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'start', width: '100%' }}>

                <CommentPopUp mode='add' blogImage={img} blogTitle={title}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, float: 'right', color: 'appText.light.primary', alignItems: 'center', flexShrink: 0 }} >
                        <Plus />
                        <Typography fontWeight={500} fontSize={{ xs: 16, lg: 20 }}>اضافه کردن دیدگاه</Typography>
                    </Box>
                </CommentPopUp>
            </Box>

            <CommentsSlider blogImg={img} blogTitle={title} comments={comments} />

            <Box id='replayBox' sx={{ display: 'flex', flexDirection: 'column', gap: 6  , px:{xs:2 , lg:6}, boxSizing:'border-box' , width:'100%' }}> </Box>
        </Box>
    )
}
