import React from 'react'

import { HeaderContainer } from './components/HeaderContainer'
import { CustomLink } from '../CustomLink'
import { Box } from '@mui/material'

export const Header = () => {
  return (
    <HeaderContainer>
      هدر فروشگاه...
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <CustomLink href={'/blogs'}>صفحه لیست بلاگ</CustomLink>
        <CustomLink href={'/blog/sdfsd'}>صفحه تک بلاگ</CustomLink>
      </Box>
    </HeaderContainer>
  )
}
