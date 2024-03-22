'use client'
import { BlogType } from '@/_types'
import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
    paddingRight: theme.spacing(2),
    borderRight: theme.palette.navy[25]
})) as typeof Box

export const BesideTitle = ({ activeTitleId, titles }: { titles: BlogType['subSections'], activeTitleId: string }) => {
    return (
        <Container>
            {titles?.map(t => <Typography fontSize={16} fontWeight={400} color={activeTitleId == t.id ? 'body.dark' : 'appText.light.secondary'}>
                {t.title}
            </Typography>)}
        </Container>
    )
}
