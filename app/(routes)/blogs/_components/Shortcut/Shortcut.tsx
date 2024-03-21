import { Grid } from '@mui/material'
import React from 'react'
import { News } from './News/News'

export const Shortcut = () => {
    return (
        <Grid container gap={6}>
            <Grid item xs={12} lg={6}>
                <News />
            </Grid>
            <Grid item xs={12} lg={6}>

            </Grid>
        </Grid>
    )
}
