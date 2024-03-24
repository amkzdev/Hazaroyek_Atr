import { CommentType } from '@types'
import React from 'react'
import { LevelOne } from './components/LevelOne'
import { Typography } from '@mui/material'

export const RepliesComponent = ({ replies }: { replies?: Array<CommentType> }) => {
  return (
    <>
      {replies?.length == 0 && <Typography>پاسخی یافت نشد!</Typography>}
      {replies?.map(c => <LevelOne {...c} />)}
    </>
  )
}
