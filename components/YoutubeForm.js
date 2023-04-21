import React, { useEffect } from 'react'
import {useFieldArray, useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { async } from './../pages/posts/[lifestyleList]';

let rendered = 0
const YoutubeForm = () => {
    const form = useForm({
      defaultValues:async()=>{
       const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
       const data = await res.json()
       return {
        username:"Batman",
        email:data.email,
        channel:"",
        social:{
          twitter:'',
          facebook:""
        },
        phoneNumbers:["",""],
        phNumbers:[{
          number:''
        }],
        age:0,
        dob:new Date()
       }
      },
    })
    const {register,control,handleSubmit,formState,watch,getValue,setValue} = form
    const {errors} = formState;

    const {fields,append,remove} =useFieldArray({
      name:'phNumbers',
      control
    })

    const onSubmit =(data)=>{
    console.log('form submitted',data)
    }

    useEffect(()=>{
    const subscription=  watch((value)=>{
      
      })
      return () => watch ((value)=>subscription.unsubscribe)
    },[watch])
 // const watch1 =  watch();
    rendered++;
    const handleGetValue =()=>{
      console.log(getValues())
    }
    const handlesetValue =()=>{
      setValue("username","",{
        shouldDirty:true,
        shouldValidate:true,
        shouldTouch:true
      })
    }
return (
    <div>
        <form style={{display:'inline'}} onSubmit={handleSubmit(onSubmit)} noValidate>
            <h1>{rendered/2}</h1>
            {/* <h1>Watched Value:{JSON.stringify(watch1)}</h1> */}
        <div>    <label>Username</label>
            <input type='text' id='username' {...register("username",{required:{message:'username is required',value:true},
           
        })} /> <br/>
        
            <p style={{color:'red'}}>{errors.username?.message}</p>
            </div>
            <div>
            <label>Email</label>
            <input type='text' id='email' {...register("email",{
              pattern:{
                value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message:'Invalid email format'
              },
              validate:{
                notAdmin :(fieldValue)=>{
                  return fieldValue !== 'admin@example.com' || "Enter a different email address"
              },
              notBlackListed:(fieldValue)=>{
                return !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
              }
            }
              }
            )}/> 
            <p style={{color:'red'}}>{errors.email?.message}</p>
            </div>
            <div>
            <label>channel</label>
            <input type='text' id='channel'{...register("channel",{required:'channel is required'})}/>  <br/>
            <p style={{color:'red'}}>{errors.channel?.message}</p>
            </div>
            <div>
             <label>Twitter</label>
            <input type='text' id='twitter'{...register("social.twitter",{
              disabled:watch('channel')=== "",
            })}/>  <br/>
            </div>
            <div>
             <label>Facebook</label>
            <input type='text' id='facebook'{...register("social.facebook")}/>  <br/>
            </div>

            <div>
             <label>Primary phone number4</label>
            <input type='text' id='facebook'{...register("phoneNumbers.0")}/>  <br/>
            </div>

            <div>
             <label>Secondary phone number4</label>
            <input type='text' id='facebook'{...register("phoneNumbers.1")}/>  <br/>
            </div>

            <div>
              <label>List of Phone Number</label>
              <div>
                {
                fields.map((field,index)=> {
               return  ( <div key={field.id}>
                 <input type='text' {...register(`phNumbers.${index}.number`)}  />
                 {
                  index > 0 && (
                    <button type='button' onClick={()=>remove(index)}>remove</button>
                  )
                 }
                  </div>)
                })
                }
              </div>
              <button type='button' onClick={()=>append({number:""})}>Add phone number</button>
              
            </div>

            <div>
            <label>Age</label>
            <input type='number' id='age'{...register("age",{
               valueAsNumber:true},
              {required:{
             
              message:'channel is required',value:true}})}/>  <br/>
            <p style={{color:'red'}}>{errors.channel?.message}</p>
            </div>
            
            <div>
            <label>Dob</label>
            <input type='date' id='dob'{...register("dob",{
            valueAsDate:true
            },
              {required:{
             
              message:'dob is required',value:true}})}/>  <br/>
            <p style={{color:'red'}}>{errors.dob?.message}</p>
            </div>
            <button>submit</button>
            <button type='button' onClick={handleGetValue}>GetValue</button>
            <button type='button' onClick={handlesetValue}>setValue</button>
        </form >
        <DevTool control={control}/>
        </div>
  )
}
export default YoutubeForm
