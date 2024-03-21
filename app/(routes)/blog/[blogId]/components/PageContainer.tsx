'use client'

import { Box, styled } from "@mui/material";

export const PageContainer = styled(Box)(({ theme  }) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]:{
        gap:theme.spacing(6)
    },
    gap: theme.spacing(4)
})) as typeof Box