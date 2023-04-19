
import axios from 'axios';
import { useEffect,useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { async } from 'rxjs';
import { Input } from 'postcss';
import TextField from '@mui/material/TextField';


const User = () =>{
    const [data,setData] = useState([])
    const [store,setStore] = useState('')
    const [arr,setArr]= useState([])
     console.log(store)
     console.log(arr)

    const addPost=async ()=>{
      const post = {title:'New post'}
     await axios.post('https://jsonplaceholder.typicode.com/posts',post);
     setData([...data,post])
    }
    const handleDelete = async (post) => {
      await axios.delete('https://jsonplaceholder.typicode.com/posts' + "/" + post.id);

      setData( data.filter((p) => p.id !== post.id )
       );
      console.log(data)
    };
    
    console.log(data)
    const handleUpdate =async(post)=>{
      post.title = "Updated";
      await axios.put('https://jsonplaceholder.typicode.com/posts' + "/" + post.id);
      const postsClone = [...data];
      const index = postsClone.indexOf(post);
      postsClone[index] = { ...post };
      setData(postsClone);
    
      }
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
                setData(res.data)
        })
    },[])

    const handleAdd=()=>{
       setArr((e)=>{
        return ([e,...arr])
       })
       setStore('')
    }
    
   return <>
     <Button onClick={addPost}>ADD Item</Button>
      <table>
         <thead>
              <tr>
                <th>title</th>
                <th>Delete Item</th>
                <th>Update Item</th>
              </tr>    
        </thead>     
        <tbody>
             {
                 data.map(item=><tr>
                  <td><Typography>{item.title}</Typography></td>
                  <td><Button onClick={()=>handleDelete(item)}>Delete</Button></td>
                  <td><Button onClick={()=>handleUpdate(item)}>Update</Button></td>
                 </tr>)
             }
        </tbody>  
      </table>  
      <TextField  label="Outlined" variant="outlined" value={store} onChange={e=>setStore(e.target.value)}/>
      <Button onClick={handleAdd}>Add Items</Button>
      {
          arr.map((r,i)=><p key={i}>{r}</p>)
      }
   </>

}
export default User

User.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
      {/* <Footer /> */}
    </>
  )
}
