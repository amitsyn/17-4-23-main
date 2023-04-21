import { TextField } from '@mui/material'
import { Formik ,Field,Form,ErrorMessage} from 'formik'
import React from 'react'
import * as Yup from 'yup'
import TextFiels from './TextFiels'
const  initialValues={
    name:'',
    email:'',
    channel:'',
    comments:'',
    address:'',
    social:{
        facebook:'',
        twitter:''
    }
   }
   const onSubmit =  values=>{
    console.log('Form data',values)
   }

  const validationSchema = Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string()
    .email('Invalid email format')
    .required('Required'),
    channel:Yup.string().required('Required')
})

const YoutubeFormik1 = () => {
 
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form > 
      <div>
        <label htmlFor='name' >Name</label>
        <Field 
        type='text' id='name' 
        name='name'
         style={{border:'2px solid black'}} placeholder='your name'></Field>
        <ErrorMessage name='name' component={TextFiels}/>
        </div>
        <div>
        <label htmlFor='email'>Email</label>
        <Field type='email' 
        id='email' name='email' 
       ></Field>
       <ErrorMessage name='email' style={{border:'2px solid black'}}>
        {
            (errMsg)=><div style={{color:'red'}}>
           errMsg
       </div>
        }
       </ErrorMessage>
                  </div>
         <div>
        <label htmlFor='channel' >channel</label>
        <Field 
        type='text' 
        id='channel' 
        name='channel' 
       style={{border:'2px solid black'}}></Field>
       <ErrorMessage name='channel'/>
         
         </div>

         <div>
        <label htmlFor='comments'>Commants</label>
        <Field as='textarea' 
        id='comments' name='comments' 
       ></Field></div>


       <div>
       <label htmlFor='address'>address</label>
        <Field  name='address' >
            {
                (props)=>{
                    const {field,form,meta} = props
                    console.log('rendered props',props)
                    return (
                    <div>
                    <input id='address' {...field}/>
                    {meta.touched && meta.error  ? <div>{meta.error}</div> : null}
                    </div>)
                }
            }
        </Field>
       </div>
       <div>
       <label htmlFor='facebook'>Facebook profile</label>
        <Field type='text' id='facebook' name='social.facebook'>

        </Field>
       </div>

       <div>
       <label htmlFor='twitter'>twitter profile</label>
        <Field type='text' id='twitter' name='social.twitter'>

        </Field>
       </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}
export default YoutubeFormik1
