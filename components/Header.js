import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MpIcon from '@mui/icons-material/Mp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import Icons from '../components/Icons'
import Buttons from './Buttons';

const Header = () => {
   
    return (
        <div>
            <div >
                {/* <Box sx={{ flexGrow: 1, color: 'white' }} > */}
                <AppBar position="static" sx={{ color: 'black', backgroundColor: 'white' }}>
                    <Grid container spacing={3} display='flex'>
                        <Grid sm={4} sx={{ marginTop: '50px', color: 'black' }} >
                            <Icons/>
                        </Grid>
                        <Grid sm={4} sx={{ marginTop: '50px' }} >
                            <Stack >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://themeger.shop/html/katen/html/images/other/avatar-lg.png"
                                    sx={{ width: 50, height: 50, textAlign: 'center' }}
                                />
                                <Typography variant='h4'>Katen <span style={{ color: 'red', width: '10px', height: '10px' }} >.</span></Typography>
                                <Typography variant='h6' style={{ color: '#9faabb' }}>Professional Writer & Personal Blogger</Typography>
                            </Stack>
                        </Grid>
                        <Grid sm={4} sx={{ marginTop: '50px' }}  >
                            <Stack display='-webkit-box' sx={{ marginRight: '20px' }}>
                                <Link href='/search'>
                                <SearchIcon sx={{ m: '20px' }} />
                                </Link>
                                {/* <DensityMediumIcon sx={{ m: '20px' }}/> */}
                                <Sidebar/>
                            </Stack>
                        </Grid>

                    </Grid>
                </AppBar>
                {/* </Box> */}
            </div>
            {/* <ButtonGroup variant="text" sx={{ display: 'flex', marginLeft: '450px',marginTop:'20px', marginBottom:'20px' }}>
                <Button variant='contained' sx={{ color: 'orange', backgroud:'orange' }}>
                    <Link href='/#'  style={{textDecoration: 'none'}}>Home</Link></Button>
                <Button sx={{ color: '#9faabb' }}>
                   <Link href='/lifestyle'  style={{textDecoration: 'none'}}>LifeStyle</Link>
                </Button>
                <Button sx={{ color: '#9faabb' }}>
                    <Link href='/inspiration'  style={{textDecoration: 'none'}}>Inspiration</Link>
                </Button>
                <Button sx={{ color: '#9faabb' }}> 
                    <Link href='/lifestyle'  style={{textDecoration: 'none'}}>Career</Link>
                </Button>
                <Button sx={{ color: 'red' }}> 
                    <Link href='/inspiration'  style={{textDecoration: 'none'}}  sx={{ color: 'red' }}>Contact</Link>
                </Button>
            </ButtonGroup> */}
            <Buttons/>
            <Box
                sx={{
                    width: '100%',
                    height: 150,
                    backgroundColor: '#F1F8FF',
                    textAlign: 'center'
                }}>
                <h2>Lifestyle</h2>
                <h6 style={{ color: '#9faabb' }}>Home/Lifestyle</h6>
            </Box>

        </div>
    )
}
export default Header


