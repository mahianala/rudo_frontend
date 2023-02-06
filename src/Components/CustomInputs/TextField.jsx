import React from 'react'
import './TextFiled.css'

const TextField = ({type = "text",name,placeholder,label,required,values,setValues}) => {
    const inputChangeHandler = (e)=>{
       let value = e.target.value;
       let name = e.target.name;
       setValues({...values,[name]:value})

    }
  return (
    <input 
       className='basic_input'
       required={required}
       type= {type}
       name={name}
       placeholder ={placeholder}
       onChange = {inputChangeHandler}
       value={values[name]||""}
     />
  )
}

export default TextField

