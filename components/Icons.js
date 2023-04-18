import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MpIcon from '@mui/icons-material/Mp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link'


const Icons = () => {
    return <>
   
           <Link href='https://www.facebook.com/' target="_blank" style={{
              textDecoration: 'none',
              color: 'black',
              
            }}>  <FacebookIcon sx={{ m: '10px' }}/></Link>     
      
        <Link href='https://twitter.com/' target="_blank" style={{
              textDecoration: 'none',
              color: 'black'}}><TwitterIcon sx={{ m: '10px' }} /></Link>
       <Link href='https://www.instagram.com/' target="_blank" style={{
              textDecoration: 'none',
              color: 'black',
              
            }}>  <InstagramIcon sx={{ m: '10px' }} /></Link>
         <Link href='https://www.pinterest.com/' target="_blank"  style={{
              textDecoration: 'none',
              color: 'black',
              
            }}><PinterestIcon sx={{ m: '10px' }} /></Link>
         <Link href='https://www.fb.com/' target="_blank" style={{
              textDecoration: 'none',
              color: 'black',
              
            }}><MpIcon sx={{ m: '10px' }} /></Link>
         <Link href='https://www.youtube.com/' target="_blank" style={{
              textDecoration: 'none',
              color: 'black',
              
            }}><YouTubeIcon sx={{ m: '10px' }} /></Link>
        
    </>
}
export default Icons