import { Box, Grid, Typography, formHelperTextClasses } from '@mui/material'
import React from 'react'
import { data } from './data.mock'
import Link from 'next/link'
import { ArrowDropLeft } from '@/_assets/icons'

export const TopBlogs = () => {

  const spacing = 4

  return (
    <Grid container>

      <Grid item container spacing={spacing} xs={12} lg={4}>

        {data.slice(0, 3).map(item => <Grid item xs={12}>
          <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: 1.5 }}>

            <img src={item.img} style={{ width: '100%', height: "100%", objectFit: 'cover' }} />

            <Box sx={{ position: 'absolute', justifyContent: 'flex-end', p: 2, boxSizing: 'border-box', color: 'white', display: 'flex', flexDirection: 'column', gap: 2, left: 0, top: 0, background: 'linear-gradient(0.61deg, rgba(0, 0, 0, 0.7) 0.56%, rgba(0, 0, 0, 0) 99.52%)', width: '100%', height: '100%' }}>
              <Typography fontWeight={500} fontSize={{ xs: 16, lg: 20 }} sx={{ WebkitLineClamp: 1, textOverflow: 'ellipsis', overflow: "hidden", display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>{item.title}</Typography>

              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography fontWeight={400} fontSize={{ xs: 14, lg: 16 }} sx={{ WebkitLineClamp: 2, textOverflow: 'ellipsis', overflow: "hidden", display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>{item.description}</Typography>
                <Link href={`/blog/${item.id}`} style={{ color: 'white' }} ><ArrowDropLeft width={40} height={40} style={{ flexShrink: 0 }} /></Link>
              </Box>

            </Box>

          </Box>

        </Grid>)}

      </Grid>


      <Grid item container spacing={spacing}>

        {data.slice(3, 5).map(item => <Grid item xs={6}>

        </Grid>)}

      </Grid>

    </Grid>
  )
}
