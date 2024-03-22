import { Metadata } from 'next'
import React from 'react'
import { PageContainer } from './components/PageContainer'
import { Divider, Gift, Shortcut } from '@/_components'
import { Author, BesideTitle, Breadcrumbs, Content, RelatedBlogs } from './components'
import { blogDetail } from './data.mock'
import { Box, Grid } from '@mui/material'

export const metadata: Metadata = {
    title: 'صفحه تک مقاله'
}

export default function page() {
    return (
        <PageContainer>

            <Breadcrumbs />

            <Grid container spacing={4} >
                <Grid item xs={0} lg={3} sx={{ display: { xs: 'none', lg: 'flex' } }}>
                    <RelatedBlogs />
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Content {...blogDetail}/>
                </Grid>

                <Grid item xs={0} lg={2} sx={{ display: { xs: 'none', lg: 'flex' } }} >
                    <BesideTitle activeTitleId='2' titles={blogDetail.subSections} />
                </Grid>
            </Grid>

            <Divider />

            <Author {...blogDetail.author} />

            <Box sx={{ display: { lg: 'none', xs: 'flex' }, flexDirection: 'column', gap: 4 }}>
                <Divider />
                <RelatedBlogs />
            </Box>

            <Gift />

            <Shortcut />

        </PageContainer>
    )
}
