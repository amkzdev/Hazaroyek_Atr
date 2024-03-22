import { CommentType } from '@types'
import { Box, Grid, styled } from '@mui/material'
import React from 'react'


const Container = styled(Grid)(({ theme }) => ({
    '& .MuiGrid-item': {
        backgroundColor: theme.palette.body.light,
        // padding: theme.spacing(2),
        // margin:'2px',
        borderRadius: theme.spacing(3)
    },
    height:'300px',
    background:'red'
})) as typeof Grid

export const SingleComment = ({ fullname }: CommentType) => {
    return (
        <Container container  direction={'row-reverse'}>

            <Grid item xs={12}>
                {fullname}
            </Grid>

            <Grid item xs={3}>
                لایک دیس
            </Grid>

            <Grid item xs={9}>
                مشاهده پاسخ ها
            </Grid>

        </Container>

    )
}
