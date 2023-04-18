import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography } from '@mui/material';
import useState from 'react'
import Link from 'next/link'

const Sidebar=()=> {
  const[isDrawerOpen,setIsDrawerOpen]=React.useState(false)
   return (
    <>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='logo'
        onClick={()=>setIsDrawerOpen(true)}
      ><MenuIcon/>
      </IconButton>
      <Drawer 
         anchor='right'
         open={isDrawerOpen}
        onClose={()=>setIsDrawerOpen(false)}>      
         <Box p={2} width='400px' textAlign='center' role='presentation'/>
          
           {/* <Link href='/posts/47' ><Typography variant='h6'sx={{color:'black',textdecoration :'none'}} > Home</Typography></Link>
           <Link href='/posts/47' ><Typography variant='h6'sx={{color:'black',textdecoration :'none'}} > Career</Typography></Link>
           <Link href='/posts/47' ><Typography variant='h6'sx={{color:'black',textdecoration :'none'}} > About</Typography></Link> */}

                <Button variant='contained' sx={{ color: 'orange', backgroud:'orange' }}>
                    <Link href='/#'  style={{textDecoration: 'none'}}>Home</Link></Button>
                <Button sx={{ color: '#9faabb'  }}>
                   <Link href='/lifestyle'  style={{textDecoration: 'none'}}>LifeStyle</Link>
                </Button>
                <Button sx={{ color: '#9faabb' }}>
                    <Link href='/inspiration'  style={{textDecoration: 'none'}}>Inspiration</Link>
                </Button>
                <Button sx={{ color: '#9faabb' }}> 
                    <Link href='/lifestyle'  style={{textDecoration: 'none'}}>Pages</Link>
                </Button>
                <Button sx={{ color: 'red' }}> 
                    <Link href='/inspiration'  style={{textDecoration: 'none'}} sx={{ color: 'red' }}>Contact</Link>
                </Button>
        </Drawer>
    </>
   )
}
export default Sidebar
  
