import { CommentType } from '@types'
import React from 'react'
import { LevelOne } from './components/LevelOne'

export const RepliesComponent = ({ replies }: { replies?: Array<CommentType> }) => {
  return (
    <>
      {replies?.map(c => <LevelOne {...c} />)}
    </>
  )
}
