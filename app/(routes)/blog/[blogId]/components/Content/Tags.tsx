import { BlogType } from '@/_types'
import { Tag } from '@icons'
import { Box, Link, Typography, styled } from '@mui/material'
import React from 'react'


const TagComponent = styled(Link)(({ theme }) => ({
    padding: theme.spacing(1),
    borderColor: theme.palette.body.secondary,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: theme.spacing(1),
    color: theme.palette.body.secondary,
    textDecoration: 'none',
    backgroundColor: theme.palette.red[25],
    fontSize: 14,
    [theme.breakpoints.down('lg')]: {
        fontSize: 12
    }
})) as typeof Link

export const Tags = ({ tags }: { tags: BlogType['tags'] }) => {

    if (tags?.length == 0)
        return <></>
        
    return (
        <Box sx={{ borderRadius: 2.75, p: 2, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', lg: 'start' }, gap: 2, backgroundColor: 'body.light', flexWrap: 'wrap' }}>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5, color: 'appText.light.primary', alignItems: 'center' }}>
                <Tag />
                <Typography fontSize={{ xs: 14, lg: 20 }} fontWeight={500}>تگ های مقاله</Typography>

            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.75 }}>
                {tags?.map(i => <TagComponent href={`/category/${i.id}`}>{i.title}</TagComponent>)}
            </Box>

        </Box>
    )
}
