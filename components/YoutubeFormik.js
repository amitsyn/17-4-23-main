import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
const  initialValues={
    name:'',
    email:'',
    channel:''
   }
   const onSubmit =  values=>{
    console.log('Form data',values)
   }

   const validate=values =>{
    //value.name value.email value.channel
     //errors.name errors.email errors.channel
     //error.name = 'this firld is required'
     let errors ={}

     if(!values.name){
        errors.name = 'Required'
     }
     if(!values.email){
        errors.email = 'Required'
     } else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email))
     {
        errors.email ='Invalid email format'
     }
     if(!values.channel){
        errors.channel = 'Required'
     }
      
     return errors
   }

const validationSchema = Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string()
    .email('Invalid email format')
    .required('Required'),
    channel:Yup.string().required('Required')
})

const YoutubeFormik = () => {
   const formik = useFormik({
       initialValues,
       onSubmit,
       validationSchema
       //validate
    })

    console.log('visitig filed',formik.touched)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}> 
      <div>
        <label htmlFor='name' >Name</label>
        <input 
        type='text' id='name' 
        name='name'
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        value={formik.values.name} style={{border:'2px solid black'}}></input>
        {formik.touched.name && formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null }
        </div>
        <div>
        <label htmlFor='email'>Email</label>
        <input type='email' 
        id='email' name='email' 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        value={formik.values.email} style={{border:'2px solid black'}}></input>
         {formik.touched.email && formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null }
         </div>
         <div>
        <label htmlFor='channel' >channel</label>
        <input 
        type='text' 
        id='channel' 
        name='channel' 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        value={formik.values.channel} style={{border:'2px solid black'}}></input>
         {formik.touched.channel && formik.errors.channel ? <div style={{color:'red'}}>{formik.errors.channel}</div>: null }
         </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default YoutubeFormik
