import React from 'react'

import { BlogType } from '@/_types'
import { Box, Typography } from '@mui/material'
import { CommentsSlider } from './components/CommentsSlider'

export const Comments = ({ commentsCount, commentsUserCount, comments }: BlogType) => {

    const isUserLoggedIn = false

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Typography fontSize={{ xs: 24, lg: 30 }} color='appText.black'>دیدگاه شما</Typography>
                {!!commentsCount && <Typography fontSize={{ xs: 16, lg: 20 }} color={'appText.light.secondary'}>{commentsCount} دیدگاه از {commentsUserCount} نفر</Typography>}
                {!isUserLoggedIn && <Typography color={'alerts.alert'} fontWeight={500} fontSize={{ xs: 16, lg: 20 }}>برای ثبت دیدگاه شما باید عضو وبسایت هزار و یک عطر باشید.</Typography>}
            </Box>

            <CommentsSlider comments={comments} />
        </Box>
    )
}
