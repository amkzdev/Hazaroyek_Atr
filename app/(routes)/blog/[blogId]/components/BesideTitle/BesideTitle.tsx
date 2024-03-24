'use client'

import React, { useCallback, useEffect, useState } from 'react'

import { BlogType } from '@/_types'
import { Box, Typography, styled } from '@mui/material'

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
    paddingRight: theme.spacing(2),
    borderRight: theme.palette.navy[25],
    position:'sticky',
    top:'100px'
})) as typeof Box

export const BesideTitle = ({ titles }: { titles: BlogType['subSections'], activeTitleId?: string }) => {

    const [activeTitleId, setActiveTitle] = useState<string>(titles?.[0].id ?? '')

    const handleScroll = useCallback((event:Event) => {

        var nearestSection:  string= titles?.[0].id ?? ''

        
        document.querySelectorAll('.blog-section').forEach(e => {
            console.log(window.scrollY , e.getBoundingClientRect().bottom ,e.getBoundingClientRect().y , e.id.split('-')[1])
            if (window.scrollY  > e.getBoundingClientRect().y ) {
                nearestSection = e.id.split('-')[1] 
                return
            }
        })
        
        setActiveTitle(nearestSection ?? '')

    }, [])

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Container>
            {titles?.map(t => <Typography fontSize={16} fontWeight={activeTitleId == t.id ?  500 :400} color={activeTitleId == t.id ? 'body.dark' : 'appText.light.secondary'}>
                {t.title}
            </Typography>)}
        </Container>
    )
}
