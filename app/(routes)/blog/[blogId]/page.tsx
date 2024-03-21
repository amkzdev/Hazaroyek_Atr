import { Metadata } from 'next'
import React from 'react'
import { PageContainer } from './components/PageContainer'
import { Gift, Shortcut } from '@/_components'
import { Breadcrumbs } from './components'

export const metadata: Metadata = {
    title: 'صفحه تک مقاله'
}

export default function page() {
    return (
        <PageContainer>
            <Breadcrumbs/>
            <Gift/>
            <Shortcut/>
        </PageContainer>
    )
}
