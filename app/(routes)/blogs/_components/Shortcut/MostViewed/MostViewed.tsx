import { Box, Typography } from '@mui/material'
import React from 'react'
import { data } from './data.mock'
import { SingleBlog } from './components/SingleBlog'

export const MostViewed = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center', justifyContent: { xs: 'center', lg: 'start' } }}>
                <Box sx={{ backgroundColor: 'body.primary', width: '30px', height: "30px", borderRadius: '50%', display: { xs: "none", lg: 'flex' } }}></Box>
                <Typography color={'appText.black'} fontWeight={'bold'} fontSize={{ xs: 20, lg: 24 }}>پربازدید ترین ها</Typography>
            </Box>

            {data.map(blog => <SingleBlog {...blog} />)}

        </Box>
    )
}
