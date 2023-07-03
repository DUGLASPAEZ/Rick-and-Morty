import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import style from "./Form.module.css"

export default function Form({login}) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i; 
    const regexPassword= new RegExp("[0-9]");

    const [inputs, setInputs] = useState({
        email:"",
        password:""
    })
    const[errors, setErrors] = useState({
        email:"",
        password:""
    })
    function validate(inputs){
     const errors ={}
     if(!inputs.email){
        errors.email = "It must be an email"
    } else if(!inputs.password){
        errors.password = "You must have a password"
    } else if(!regexEmail.test(inputs.email)){
        errors.email= "Must have a valid email"
    } else if(!regexPassword.test(inputs.password)){
        errors.password= "Must have a valid password"
    }
    return errors;
    }

    function handleChange(e){
   setInputs({
    ...inputs,
    [e.target.name]: e.target.value,
   });
   setErrors(
    validate({
        ...inputs,
        [e.target.name]: e.target.value,
    })
   );
    }
     function handleSubmit(e){
        e.prevent.defaul()
        const aux = Object.keys(errors)
        if(aux.length === 0){
            setInputs({
                email:"",
                password: "",
               }) 
               setErrors({
                email:"",
                password: "",
               }) 
               login(inputs)
         return alert ("ok")   
        }
         return alert("Error")
     }
  return (
    <div className={style.container}>
        <form onSubmit= {handleSubmit}> 

      <label>Email: </label>
      <input name="email" value={inputs.email} onChange={handleChange} placeholder='Your email'></input>
      <p className='danger'>{errors.email}</p>

      <label>Password: </label>
      <input name='password' value={inputs.password} onChange={handleChange} placeholder='Your password'></input>
      <p className='danger'>{errors.password}</p>
      {Object.keys(errors).length === 0 ? (
      <Link  to= "/home">
      <button type = "submit">Login in</button>
      </Link>
      ): null}
        </form>
 </div>
  )
}


