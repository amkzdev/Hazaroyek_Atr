import { Box, Typography } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'
import { Breadcrumbs } from './_components/Breadcrumbs'
import { Authors, PageContainer, Resourses, Title } from './_components'
import { Shortcut, Gift, Divider } from '@components'


export const metadata: Metadata = {
  title: 'صفحه مقالات'
}

export default function page() {
  return (
    <PageContainer>
      <Breadcrumbs />
      <Title />
      <Divider />
      <Resourses />
      <Divider />
      <Shortcut />
      <Gift />
      <Authors />
    </PageContainer>
  )
}
