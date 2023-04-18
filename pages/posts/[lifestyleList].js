
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ShareIcon from '@mui/icons-material/Share';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from 'next/link';
import Footer from '@/components/Footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MpIcon from '@mui/icons-material/Mp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Badge from '@mui/material/Badge';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chips from'../../components/Chips'
import Icons from '../../components/Icons'



const LifestyleList = ({ post }) => {
  const boxSX = {
    "&:hover": {
      border: "1px solid red",
      color: 'red',
      backgroundColor: 'lightblue'
    },
  };
  return (
    <>
      <Typography variant='h3' sx={{ margin: '20px 20px ' }}>{post.title.rendered}</Typography>
      <div style={{ display: 'flex', marginLeft: '20px 20px' }}>
        <Avatar
          alt="Remy Sharp"
          src="https://themeger.shop/html/katen/html/images/other/avatar-lg.png"
          sx={{ width: 30, height: 30, textAlign: 'center',marginLeft: '25px' }} />
        <Typography variant='h6' sx={{ marginLeft: '25px' }}>Katen Doe</Typography>
        <Typography sx={{ marginLeft: '40px' }}> 20 March 2023</Typography>
      </div>

      <Grid display='flex' padding='20px 20px' margin='20px 20px'>
        <Grid xs={8}>
          <Card sx={{ maxWidth: 1000 }}>
            <CardMedia
              sx={{ height: 800 }}
              image="	https://themeger.shop/html/katen/html/images/posts/post-md-1.jpg"
              title={post.title.rendered}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.content.rendered}
              </Typography>
              <Typography variant='h4' sx={{ margin: '20px 20px' }}>{post.slug}</Typography>
              <Typography variant="body2" color="text.secondary">
                {post.content.rendered}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} >
          <Card sx={{ marginLeft: '20px', marginTop: '20px'}}>
            <CardContent sx={{ maxWidth: 400, textAlign: 'center', height: 300, marginLeft: '30px' }}>
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
          <Card sx={{ marginLeft: '20px', marginTop: '20px' }}>
            <CardContent sx={{ maxWidth: 400, textAlign: 'center', height: 400, padding: '30px', margin: '30px' }}>
              <Typography variant="h4" color="black" sx={{ margin: '10px 10px' }} >
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
                    {post.title.rendered} <br />
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
                    {post.title.rendered} <br />
                    <Typography variant='body1' sx={{ color: '#8F9BAD' }}>23 March 2023</Typography>
                  </Typography>                    
                  </div>
                <div style={{ margin: '20px 20px', display: 'flex' }}>
                  <Badge badgeContent={3} color="primary">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://themeger.shop/html/katen/html/images/other/avatar-lg.png"
                      sx={{ width: 30, height: 30, textAlign: 'center' }} />
                  </Badge>
                  <Typography variant="h6" color="black">
                    {post.title.rendered} <br />
                    <Typography variant='body1' sx={{ color: '#8F9BAD' }}>23 March 2023</Typography>
                  </Typography>
                </div>
              </div>

            </CardContent>
          </Card>
          <Card sx={{ height:400 , marginLeft: '20px', marginTop: '20px' }}>
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
                    {post.title.rendered} <br />
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
                <Chip label="#Celebrities" sx={boxSX}/>
              </Link> */}
              <Chips/>
              </div>
              
            </CardContent></Card>

        </Grid>
      </Grid>
    </>
  )
}
export default LifestyleList
export async function getStaticPaths() {
  const res = await fetch('https://themeger.shop/wordpress/katen/catalog/wp-json/wp/v2/posts')
  const data = await res.json()

  const paths = data.map(post => {
    return {
      params: {
        lifestyleList: `${post.id}`
      }
    }
  })
  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps(context) {
  const { params } = context
  const res = await fetch(`https://themeger.shop/wordpress/katen/catalog/wp-json/wp/v2/posts/${params.lifestyleList}`)
  const data = await res.json()
  return {
    props: {
      post: data
    }
  }
}

LifestyleList.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}