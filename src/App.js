import React from 'react'
import Input from './pages/Input'
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
   username:yup
   .string()
   .required("User name is are field"),

  PhoneNumber:yup 
    .string()
    .required("Phone number is a required field")
    .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,"Phone number is not valid"),

  email:yup
   .string()
   .required("Email is a require field")
   .email("Email is not valid"),

  Password:yup
   .string()
   .min(6,"Passsword must be at least 6 charactors"),
});


export default function App() {

     const {handleSubmit , register , formState:{errors}} = useForm({
       resolver:yupResolver(schema)
     });

     console.log(errors);

     const formSubmit = (data) =>{
      console.log(data);
     }
 


  return (
    <div className='sign-up'>
      <h1>Sign Up</h1>
      <hr /><br />
      <form action="" onSubmit={handleSubmit(formSubmit)}>

         <Input
         id="username" 
         label="Username" 
         type="text" 
         placeholder={"Enter user name"} 
         register = {{...register("username")}}
         erroMessage={errors.username?.message}
         />

         <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"   
          register = {{...register("email")}}  
          erroMessage={errors.email?.message}    
         />

         <Input
          id="PhoneNumber"
          label="PhoneNumber"
          type="text"
          placeholder="Enter your Phone Number" 
          register = {{...register("PhoneNumber")}}  
          erroMessage={errors.PhoneNumber?.message}
         />

         <Input
          id="Password"
          label="Password"
          type="text"
          placeholder="Enter your password" 
          register = {{...register("Password")}}        
          erroMessage={errors.Password?.message}
         />

         <Input
          id="ConfirmPassword"
          label="Confirm password"
          type="text"
          placeholder="Confirm password"  
          register = {{...register("Confirm password")}}  
          erroMessage={errors.ConfirmPassword?.message}     
         />

    <button>Sign Up</button>

    <p><a href=""></a></p>

    

       



      </form>
    </div>
  )
}

