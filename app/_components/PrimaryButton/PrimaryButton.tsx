'use client'

import { Button, styled } from '@mui/material'

export const PrimaryButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    borderRadius:theme.spacing(1),
    backgroundColor:theme.palette.body.dark,
    color:theme.palette.appText.dark.support,
    padding:theme.spacing(1.5),
    ":hover":{
        backgroundColor:theme.palette.body.dark,
    },
    fontSize:theme.spacing(2)
})) as typeof Button
