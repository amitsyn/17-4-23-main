import { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import YoutubeForm from '@/components/YoutubeForm';

function Forms() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editingPost, setEditingPost] = useState(null);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data));
  }, []);
  
  console.log(editingPost)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      // if editingPost is truthy, update the existing post
      axios.put(`https://jsonplaceholder.typicode.com/posts/${editingPost.id}`, {
        title,
        body,
      })
        .then((res) => {
          const updatedPosts = posts.map((post) =>
            post.id === editingPost.id ? res.data : post
          );
          setPosts(updatedPosts);
          setEditingPost(null);
          setTitle('');
          setBody('');
        });
    } else {
      // if editingPost is falsy, create a new post
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
      })
        .then((res) => {
          setPosts([...posts, res.data]);
          setTitle('');
          setBody('');
        });
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setTitle(post.title);
    setBody(post.body);
  };

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
      });
  };

  return (
    <div>
      <Typography variant='h4'>Blog Posts</Typography>
      <Grid container xs={12} spacing={2} sx={{display:'flex'}}>
      <Grid item xs={6}>
          <Item>
          {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Button onClick={() => handleEdit(post)}>Edit</Button>
            <Button onClick={() => handleDelete(post.id)}>Delete</Button>
          </li>
        ))}
          </Item>
     </Grid>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
       <Grid item xs={4} >
      <Typography>{editingPost ? 'Edit' : 'Create New'} Post</Typography>
               <Item>
          <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Body:
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>
        <br />
        <Button type="submit">{editingPost ? 'Update' : 'Create'} Post</Button>
        {editingPost && (
          <Button type="Button" onClick={() => setEditingPost(null)}>
            Cancel Edit
          </Button>
        )}
      </form>
          </Item>
        </Grid>
        </Grid>
        {/* <YoutubeForm/> */}
    </div>
  );
}
export default Forms

Forms.getLayout = function pageLayout(page) {
    return (
      <>
        {page}
        {/* <Footer /> */}
      </>
    )
  }

