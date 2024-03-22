import { Metadata } from 'next'
import React from 'react'
import { PageContainer } from './components/PageContainer'
import { Gift, Shortcut } from '@/_components'
import { Author, Breadcrumbs } from './components'
import { blogDetail} from './data.mock'

export const metadata: Metadata = {
    title: 'صفحه تک مقاله'
}

export default function page() {
    return (
        <PageContainer>
            <Breadcrumbs/>
            <Author {...blogDetail.author}/>
            <Gift/>
            <Shortcut/>
        </PageContainer>
    )
}
