import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './item'
import caurosol from '../helper/Caurosal.json'


function Example(props)
{
       return (
        <Carousel>
            {
                caurosol.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}
export default Example