import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ShareIcon from '@mui/icons-material/Share';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MpIcon from '@mui/icons-material/Mp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Badge from '@mui/material/Badge';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import ImageList from '../components/ImageList1'
import Sidebar from '../components/Sidebar'
import Icons from '../components/Icons'
import Chips from '../components/Chips'
import Chip from '@mui/material/Chip';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from "react-redux";
import { iconAction } from "../store/icon-slice";
import sun24 from "../icons/sun-24.png";
import moon30 from "../icons/moon-30.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProductList({ products }) {
  const boxSX = {
    "&:hover": {
      border: "1px solid red",
      color: 'red',
      backgroundColor: 'lightblue'
    },
  };

  const dispatcher = useDispatch()

  let icon = useSelector(state => state.icon)
  console.log(icon)

  function changeIcon() {

    icon.icon === "moon" ? dispatcher(iconAction.iconSun()) : dispatcher(iconAction.iconMoon())

  }
  return (
    <>
    {/* <div> */}
    <Grid sx={{display:'flex' }}>
    <Grid xs={12} container spacing={1} sx={{display:'flex', margin:"10px"}} >
      {
        products.map(item =>
          
          <Grid  xs={4}  key={item.id} sx={{display:'flex',margin:'50px'}}>
          <Item>
          <Card sx={{ maxWidth: 1000  }}>
            <Link href={`posts/${item.id}`}>
            <CardMedia
              sx={{ height: 300 }}
              image="	https://themeger.shop/html/katen/html/images/posts/post-md-1.jpg"
              title="green iguana"
              on
            ><Button sx={{marginRight:'250px'}}>Lifestyle</Button></CardMedia></Link>
            <div style={{display:'flex' ,margin:'20px 20px'}}>  
            <Avatar
              alt="Remy Sharp"
              src="https://themeger.shop/html/katen/html/images/other/avatar-lg.png"
              sx={{ width: 30, height: 30, textAlign: 'center' }}/>
              <span >  Katen Doe</span>
              <h6 sx={{m:3 , p:3}}>20 March 2023</h6>
            </div>
            
            <CardContent sx={{textAlign:'center'}}>
              <Typography gutterBottom variant="h5" component="div">
                {item.title.rendered}
              </Typography>
              <Typography variant="body2" color="text.secondary" limit={10}>
              I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><ShareIcon/></Button>
              <Button size="small"><MoreHorizIcon/></Button>
            </CardActions>
          </Card>
          </Item> </Grid>        )} </Grid>

         <Grid xs={4} sx={{ marginRight: '50px', marginTop: '50px'}}>
          <Card >
            <CardContent sx={{ maxWidth: 450, textAlign: 'center', height: 350, marginLeft: '30px' }}>
              <Typography variant="h2" color="black" sx={{ marginLeft: '20px ' }} >
                Katen
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hello, We’re content writer who <br />is fascinated by content fashion, celebrity <br />and lifestyle. We helps clients bring the right content to the right people.
              </Typography>
              <CardMedia sx={{ margin: '20px 20px' }}>
                {/* <FacebookIcon sx={{ m: '10px' }}></FacebookIcon>
                <TwitterIcon sx={{ m: '10px' }} />
                <InstagramIcon sx={{ m: '10px' }} />
                <PinterestIcon sx={{ m: '10px' }} />
                <MpIcon sx={{ m: '10px' }} />
                <YouTubeIcon sx={{ m: '10px' }} /> */}
                <Icons/>
              </CardMedia>
            </CardContent></Card>
          <Card sx={{ marginLeft: '10px', marginTop: '10px' }}>
            <CardContent sx={{maxWidth: 400, textAlign: 'center', height: 400, padding: '10px', margin: '10px' }}>
              <Typography variant="h4" color="black" >
                Popular Posts
              </Typography>
              <div >
                <div style={{ margin: '20px 20px', display: 'flex' }}>
                  <Badge badgeContent={1} color="primary">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://themeger.shop/html/katen/html/images/other/avatar-lg.png"
                      sx={{ width: 30, height: 30, textAlign: 'center' }} />
                  </Badge>
                  <Typography variant="h6" color="black">
                  10 Ways To Immediately Start Selling Furniture<br />
                    <Typography variant='body1' sx={{ color: '#8F9BAD' }}>23 March 2023</Typography>
                  </Typography>
                </div>
                <div style={{ margin: '20px 20px', display: 'flex' }}>
                  <Badge badgeContent={2} color="primary">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://themeger.shop/html/katen/html/images/other/avatar-lg.png"
                      sx={{ width: 30, height: 30, textAlign: 'center' }} />
                  </Badge>
                  <Typography variant="h6" color="black">
                     3 Easy Ways To Make Your iPhone Faster <br />
                    <Typography variant='body1' sx={{ color: '#8F9BAD' }}>23 March 2023</Typography>
                  </Typography>                    </div>
                <div style={{ margin: '20px 20px', display: 'flex' }}>
                  <Badge badgeContent={3} color="primary">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://themeger.shop/html/katen/html/images/other/avatar-lg.png"
                      sx={{ width: 30, height: 30, textAlign: 'center' }} />
                  </Badge>
                  <Typography variant="h6" color="black">
                     An Incredibly Easy Method That Works For All<br />
                    <Typography variant='body1' sx={{ color: '#8F9BAD' }}>23 March 2023</Typography>
                  </Typography>
                </div>
              </div>

            </CardContent>
          </Card>
          <Card sx={{ height:500 , marginLeft: '20px', marginTop: '20px' }}>
            <CardContent sx={{ maxWidth: 450, height: 350, marginLeft: '30px' }}>
              <Typography variant="h4" color="black" sx={{ marginLeft: '20px ' }} >
                Explore Topics
              </Typography>
              <Link href='#'>
                <Typography variant="h6" sx={{ color: 'black', margin: '20px 20px' }}>
                  <ChevronRightIcon></ChevronRightIcon>LifeStyle</Typography>
                <Typography variant="h6" sx={{ color: 'black', margin: '20px 20px' }}>
                  <ChevronRightIcon></ChevronRightIcon>Inspiration</Typography>
                <Typography variant="h6" sx={{ color: 'black', margin: '20px 20px' }}>
                  <ChevronRightIcon></ChevronRightIcon>Fashion</Typography>
                <Typography variant="h6" sx={{ color: 'black', margin: '20px 20px' }}>
                  <ChevronRightIcon></ChevronRightIcon>Politic</Typography>
                <Typography variant="h6" sx={{ color: 'black', margin: '20px 20px' }}>
                  <ChevronRightIcon></ChevronRightIcon>Trending</Typography>
                <Typography variant="h6" sx={{ color: 'black', margin: '20px 20px' }}>
                  <ChevronRightIcon></ChevronRightIcon>Culture</Typography>
              </Link>

            </CardContent></Card>
            <Card sx={{ marginLeft: '20px', marginTop: '20px'}}>
            <CardContent sx={{ maxWidth: 450, textAlign: 'center', height: 350, marginLeft: '30px' }}>
              <Typography variant="h3" color="black" sx={{ marginLeft: '20px ' }} >
              Newsletter
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{marginTop:'20px'}}>
              Join 70,000 subscribers!
              </Typography>
              
          <TextField  label="Email address"  sx={{marginTop:'30px',border: 'solid 0px ',borderColor:'red'}} />
          <Stack spacing={2}  sx={{marginTop:'30px'}}>
              <Button >Signup</Button>
             </Stack>
             <Typography>By signing up, you agree to our 
              <Link href='#'>
              <Typography sx={{color:'red'}}>Privacy Policy</Typography>
               </Link>
               </Typography>
            </CardContent>
            </Card>
            <Card sx={{ marginLeft: '20px', marginTop: '20px',height: 400 }}>
            <CardContent sx={{ maxWidth: 450, textAlign: 'center', marginLeft: '30px' }}>
              <Typography variant="h3" color="black" sx={{ marginLeft: '20px ' }} >
               Celebration
              </Typography>
              <CardMedia
              sx={{ height: 200 }}
              image="	https://themeger.shop/html/katen/html/images/widgets/widget-carousel-1.jpg"
             
            />
                <div style={{ margin: '20px 20px', display: 'flex' }}>
                    <Typography variant="h6" color="black">
                    An Incredibly Easy Method That Works For All <br />
                    <Typography variant='body1' sx={{ color: '#8F9BAD' }}>23 March 2023</Typography>
                  </Typography>                    
                  </div>
            </CardContent>
            </Card>  
            <Card sx={{ marginLeft: '20px', marginTop: '20px'}}>
            <CardContent sx={{ maxWidth: 300, textAlign: 'center', height: 200, marginLeft: '30px' }}>
              <Typography variant="h4" color="black" sx={{ marginLeft: '20px ' }} >
                  Tag Clouds
              </Typography>
              <div sx={{marginTop:'20px'}}>
                {/* <Link href="#">
                <Chip label="#Trending" sx={boxSX} />
                <Chip label="#Video" sx={boxSX}/>
                <Chip label="#Featured" sx={boxSX}/>
                <Chip label="#Gallery" sx={boxSX}/>
                <Chip label="#Celebrities" sx={boxSX}/> */}
                <Chips/>
                
              {/* </Link> */}

              </div>
              
            </CardContent>
            </Card>
        </Grid>
      </Grid>
      {/* </div> */}
      <Link href='#'>
      <Stack spacing={2} sx={{width:'30%', margin:'auto' }}>

        <Pagination count={3} sx={{color:'orange'}}/>
      
      </Stack>
      </Link> 
      <Grid
            container
          // spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '40vh' }}
          >

            <Grid item xs={3}>
            <ImageList/>
            </Grid>   
      </Grid>
      {/* <Sidebar/> */}
      <div style={{ backgroundColor: icon.icon === "moon" ? "white" : "#000000b5" }} className={styles.container}>
      <main className={styles.main}>
        <div className='NavBar' > 
         
        </div>

        <div onClick={changeIcon} className='iconBox'>
          <Image
            width={30}
            height={30}
            objectFit="cover"
            src={icon.icon === 'moon' ? moon30 : sun24}
            alt="image"
          />
        </div>
      </main>
      </div> 
   </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://themeger.shop/wordpress/katen/catalog/wp-json/wp/v2/posts')
  const data = await res.json()
  return {
    props: {
      products: data
    }
  }
}
