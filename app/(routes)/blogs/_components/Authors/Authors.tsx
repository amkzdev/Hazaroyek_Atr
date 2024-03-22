import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { authors } from './data.mock'
import { SingleAuthor } from './components/SingleAuthor'

export const Authors = () => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10  , px:{lg:8}}} >

      <Typography color={'appText.black'} align='center' fontSize={{ xs: 20, lg: 30 }} fontWeight={700}>نویسندگان مقالات</Typography>

      <Grid container spacing={10}>

        {authors.map(item => <Grid item xs={12} lg={4}>
          <SingleAuthor {...item} />
        </Grid>)}

      </Grid>

    </Box>
  )

}
