import React from 'react'

export default function Input({id,label,type,placeholder,erroMessage,register}) {
  return (
    <div className='input-group'>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} placeholder={placeholder} {...register} />
        <span className='error-message'>{erroMessage}</span>      
    </div>
  )
}
