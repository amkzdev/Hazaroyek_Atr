'use client'

import { CommentType } from '@/_types'
import React, { ReactNode, useEffect, useState } from 'react'
import { Box } from '@mui/material'

export const CommentPopUp = ({ mode, targetComment, children }: { mode: 'add' | 'reply', targetComment?: CommentType, children: ReactNode }) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    return (
        <>
            <Box onClick={() => setIsModalOpen(true)}>
                {children}
            </Box>
        </>)
}
