import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from 'next/link'
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const Buttons = () => {
    const matches = useMediaQuery('(min-width:400px)');
  return (
    <>
    <ButtonGroup variant="text" sx={{ display: 'flex', marginLeft: '450px',marginTop:'20px', marginBottom:'20px' }}>
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
            </ButtonGroup>
            <span>{`(min-width:600px) matches: ${matches}`}</span>
            </> )
}
export default Buttons
