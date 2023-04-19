import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Paper from '@mui/material/Paper';
import caurosol from '../helper/Caurosal.json'
import Button from '@mui/material/Button';

export function ItemList({ item }) {
    return (
        <Paper sx={{ width: '90%',
            height:'60%', margin:'20px' }} >
            <img src={item.image} alt={item.title} width="500px" heigth='500px'  />
            <h2>{item.title}</h2>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}


function Example(props)
{
       return (
        <Carousel >
            {
                caurosol.map( item => <ItemList key={item.id} item={item} /> )
            }
        </Carousel>
    )
}
export default Example

