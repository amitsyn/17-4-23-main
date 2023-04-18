import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from 'next/link'
import Box from '@mui/material/Box';

export default function ImageList1() {
  return (

    <Box sx={{ display:'flex'}}>
     <Link href='#'>
     <img src='https://themeger.shop/html/katen/html/images/insta/insta-1.jpg'  />
     </Link>
     <Link href='#'>
     <img src='https://themeger.shop/html/katen/html/images/insta/insta-2.jpg'  />
     </Link>
     <Link href='#'>
     <img src='https://themeger.shop/html/katen/html/images/insta/insta-3.jpg'  />
     </Link>
     <Link href='#'>
     <img src='https://themeger.shop/html/katen/html/images/insta/insta-4.jpg'  />
     </Link>
     <Link href='#'>
     <img src='https://themeger.shop/html/katen/html/images/insta/insta-5.jpg'  />
     </Link>
     <Link href='#'>
     <img src='	https://themeger.shop/html/katen/html/images/insta/insta-6.jpg'  />
     </Link>
     </Box>
   
  );
}

