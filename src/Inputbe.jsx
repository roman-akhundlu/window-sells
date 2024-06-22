import React from 'react'
import './Input.css'

const Inputbe = () => {
  return (
    <>
       <section className='premaking'>
        <img src="./src/assets/photos/making.jpg" alt="" />
        <input type="text" placeholder='First Name' className='form-control p-3 namewrite' />
        <input type="text" placeholder='Last Name' className='form-control p-3 lastwrite' />
        <input type="email" placeholder='Email' className='form-control p-3 mail' />
        <input type="text" placeholder='Subject' className='form-control p-3 subwrite' />
        <textarea name="message" id="message" className='form-control message' placeholder='Message'></textarea>
      </section>
    </>
  )
}

export default Inputbe