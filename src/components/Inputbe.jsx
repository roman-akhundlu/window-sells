import React from 'react'
import './Input.css';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
  toast("✅WOW YOU CLICKED THE BUTTON ")
}




const Inputbe = () => {
  return (

    <>

       <section className='premaking'>
        <img src="../src/assets/photos/making.jpg" alt="" />
        <div className='imputtext'>
        <input type="text" placeholder='First Name' className='form-control p-3 namewrite' />
        <input type="text" placeholder='Last Name' className='form-control p-3 lastwrite' />
        <input type="email" placeholder='Email' className='form-control p-3 mail' />
        <input type="text" placeholder='Subject' className='form-control p-3 subwrite' />
        <textarea name="message" id="message" className='form-control message' placeholder='Message'></textarea>
      <button href="#" className='roboto-bold messager' onClick={notify}>Send Message</button>
      <p className='warning roboto-bold'>We will contact you back within 24 hours via email.</p>
      <ToastContainer/> 
        </div>

        <div className='problematicpart'>
        <h1 className='ls-2 lh-1 fw-bold font-1 contacts'>CONTACT</h1>
      <h2 className='callback roboto-bold quicksand cormorant'>REQUEST CALL BACK</h2>
      <p className='creativitypara'>Nulla facilisi. Praesent non mauris ac ligula ullamcorper vehicula. Praesent mollis, nibh in <span>venenatis</span><br /> iaculis, mauris eros iaculis quam, ut aliquam nisi nunc vitae quam. Fusce faucibus, felis at <br /> fermentum convallis, nunc neque aliquam turpis, ut varius ipsum nisi eu magna. Sed euismod <br /> laoreet nisi, eu iaculis elit scelerisque non.</p>
      <i class="fa-solid fa-phone"></i>
      <i class="fa-solid fa-envelope"></i>
      <i class="fa-solid fa-location-dot"></i>
      <h3 className='phonenumber'>+123-456-789</h3>
      <h4 className='emaddress'>hello@awesomesite.com</h4>
      <h5 className='ztreet'>99 Roving St., Big City, Pku 2345</h5>
      <h6 className='webzite'>@awesomesite.com</h6>
      <i class="fa-solid fa-user"></i>
        </div>
      
      </section>
    </>
  )
}

export default Inputbe