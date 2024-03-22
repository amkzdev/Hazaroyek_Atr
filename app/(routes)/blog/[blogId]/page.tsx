import { Metadata } from 'next'
import React from 'react'
import { PageContainer } from './components/PageContainer'
import { Divider, Gift, Shortcut } from '@/_components'
import { Author, Breadcrumbs } from './components'
import { blogDetail } from './data.mock'
import { Grid } from '@mui/material'

export const metadata: Metadata = {
    title: 'صفحه تک مقاله'
}

export default function page() {
    return (
        <PageContainer>
            <Breadcrumbs />
            <Grid container spacing={4}>
                <Grid xs={0} lg={2}>
                    Related
                </Grid>

                <Grid xs={12} lg={8}>
                    Content
                </Grid>

                <Grid xs={0} lg={2}>
                    Titles
                </Grid>
            </Grid>
            <Divider />
            <Author {...blogDetail.author} />
            <Gift />
            <Shortcut />
        </PageContainer>
    )
}
