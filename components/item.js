
import { Paper, Button } from '@mui/material'


function Item({ item1 }) {
    return (
        <Paper >
            <img src={item1.image} alt={item1.title} width="250px" heigth='250px' />
            <h2>{item1.title}</h2>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default Item