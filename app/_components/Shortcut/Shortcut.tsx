import { Grid } from '@mui/material'
import React from 'react'
import { News } from './News/News'
import { MostViewed } from './MostViewed/MostViewed'

export const Shortcut = () => {
    return (
        <Grid container spacing={6} >
            <Grid item xs={12} lg={6}>
                <News />
            </Grid>
            <Grid item xs={12} lg={6}>
                <MostViewed />
            </Grid>
        </Grid>
    )
}
