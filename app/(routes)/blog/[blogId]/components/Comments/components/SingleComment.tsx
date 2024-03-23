import { CommentType } from '@types'
import { Avatar, Box, Button, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import { Add, Plus, Reply, Substract } from '@/_assets/icons'
import { CommentPopUp } from './CommentPopup/CommentPopUp'


const Container = styled(Grid)(({ theme }) => ({
    '& .content': {
        backgroundColor: theme.palette.body.light,
        padding: theme.spacing(2),
        // margin:'2px',
        borderRadius: theme.spacing(2),
        boxSizing: 'border-box',
        margin: '4px',
        direction: 'rtl'
    },
    // height:'300px',
    // background: 'red',
})) as typeof Grid


const CustomButton = styled(Button)(({ theme }) => ({
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



export const SingleComment = ({ blogImage , blogTitle ,  ...comment}: CommentType & { blogImage: string, blogTitle: string }) => {

    const { fullname, img, date, description, dislikeCount, id, likesCount  } = comment

    return (
        <Container container direction={'row-reverse'} >

            <Grid item xs={12}>
                <Box className='content' sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2.5, alignItems: 'center' }}>
                        <Avatar src={img} sizes='60px' alt={fullname} sx={{ width: { xs: '50px', lg: '60px' }, height: { xs: '50px', lg: '60px' } }} />

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>

                            <Typography fontSize={{ xs: 14, lg: 16 }} fontWeight={700} color={'appText.light.primary'}> {fullname}</Typography>
                            <Typography fontSize={{ xs: 12, lg: 14 }} color='appText.light.secondary'>{date}</Typography>
                        </Box>

                    </Box>

                    <Box >
                        <Typography color='appText.light.primary' fontSize={{ xs: 12, lg: 14 }}>{description}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'space-between', alignItems: 'center' }}>

                        <CustomButton>
                            <Substract />
                            <Typography>بیشتر</Typography>
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
                <Box className='content'>
                    {dislikeCount}
                    {likesCount}
                </Box>

            </Grid>
            <Grid item xs={8}>
                <Box className='content'>{fullname}</Box>

            </Grid>


        </Container>

    )
}
