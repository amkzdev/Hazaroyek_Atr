import { Metadata } from 'next'
import React from 'react'
import { PageContainer } from './components/PageContainer'
import { Shortcut } from '@/_components'

export const metadata: Metadata = {
    title: 'صفحه تک مقاله'
}

export default function page() {
    return (
        <PageContainer>
            <Shortcut/>
        </PageContainer>
    )
}
