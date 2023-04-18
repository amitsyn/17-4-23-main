import Link from 'next/link'
import Chip from '@mui/material/Chip';

const Chips =()=>{
    const boxSX = {
        "&:hover": {
          border: "1px solid red",
          color: 'red',
          backgroundColor: 'lightblue'
        },
      };
    return <>
        <div sx={{marginTop:'20px'}}>
                <Link href="#">
                <Chip label="#Trending" sx={boxSX} />
                <Chip label="#Video" sx={boxSX}/>
                <Chip label="#Featured" sx={boxSX}/>
                <Chip label="#Gallery" sx={boxSX}/>
                <Chip label="#Celebrities" sx={boxSX}/>
              </Link>

              </div>
    </>
}
export default Chips