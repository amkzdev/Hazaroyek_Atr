import React from 'react'

import { PremiumBadge } from '@icons'
import { Box, Typography } from '@mui/material'

export const SpecialComment = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' , color:'appText.light.primary', backgroundColor: 'rgba(255, 242, 217, 1)', border: '1px solid rgba(255, 204, 102, 1)', gap: 1, borderRadius: 3, p: 1 }}>
            <PremiumBadge />
            <Typography fontSize={{xs:12 , lg:15}} fontWeight={400}>نظر تخصصی</Typography>
        </Box>
    )
}
