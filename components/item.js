import { Paper, Button } from '@mui/material'


function Item({ item }) {
    return (
        <Paper >
            <img src={item.image} alt={item.title} width="250px" heigth='250px' />
            <h2>{item.title}</h2>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default Item