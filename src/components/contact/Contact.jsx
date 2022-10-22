import React, { useState } from 'react'
import './contact.scss'

export default function Contact() {
  const[message,setMessage]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assests/shake.svg" alt="" />
      </div>
      <div className="right">
       <div className="rightContainer">
       <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks , I 'll reply </span>}
        </form>
       </div>
      </div>
    </div>
  )
}
