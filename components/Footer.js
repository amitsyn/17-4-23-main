import { Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MpIcon from '@mui/icons-material/Mp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Icons from '../components/Icons'

const Footer = () => {
  return (
   <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={4}>
      <Grid item xs>
      <Typography variant='h6'>© 2021 Katen. Template by ThemeGer.</Typography>
      </Grid>
      <Grid item xs={8} >
      {/* <FacebookIcon sx={{ m: '10px' }}></FacebookIcon>
           <TwitterIcon sx={{ m: '10px' }} />
           <InstagramIcon sx={{ m: '10px' }} />
           <PinterestIcon sx={{ m: '10px' }} />
           <MpIcon sx={{ m: '10px' }} />
           <YouTubeIcon sx={{ m: '10px' }} /> */}
           <Icons/>
      </Grid>
      
     
    </Grid>
  </Box>
  )
}

export default Footer
