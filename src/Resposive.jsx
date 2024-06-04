import React from 'react'
import './Responsive.css'

const Roman = () => {
  return (
    <>
    <nav className="sticky-top navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="./src/assets/logo.png" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item roboto-bold">
          <a className="nav-link active" aria-current="page" href="#">HOMEPAGE</a>
        </li>
        <li className="nav-item roboto-bold">
          <a className="nav-link active" href="#">ABOUT</a>
        </li>

        <li className="nav-item roboto-bold">
          <a className="nav-link active" href="#">POST</a>
        </li>

        <li className="nav-item roboto-bold">
          <a className="nav-link active" href="#">P.DETAILS</a>
        </li>
       
    
      </ul>

     
    
    </div>
  </div>
</nav>

<div className='teamview'>
<img src="./src/assets/main.jpg" alt="" />
</div>

<div className='texts'>
<h2 className=' font-2 lh-1 fw-bold'>FILM & MOVIE <br /><span>PRODUCTION</span></h2>
<h1 className=' font-1 fs-3 ls-2 fw-bold'>CINESTAR STUDIO</h1>
<p>Nullam a placerat nibh, et posuere lacus. Etiam massa ex, imperdiet et lobortis et, posuere non tellus. <br /> <span>Pellentesque finibus maximus sapien.</span> 
</p>
</div>


<div className="awards d-flex h-100 align-items-center p-4">
  <img src="./src/assets/award1.png" alt="" className='award1' />
  <img src="./src/assets/award2.png" alt="" className='award2 ' />
  <img src="./src/assets/award1.png" alt="" className='award3' />
</div>





<div class="card-body">
    <h5 class="card-title py-4">WE ARE THE BEST STUDIO PRODUCTION</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>


<section className='pluses'>
<h1 className=' font-1 fs-3 ls-2 fw-bold'>CINESTAR STUDIO</h1>
<h2>HAVE IDEA FOR YOUR <br />PROJECT ?</h2>
<p className='truepara'>Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus <br /> in ante in, vehicula facilisis dui. Integer consequat consectetur est id blandit. Duis fermentum nulla <br /> non mi tempor elementum. Donec efficitur ac eros quis porta.</p>
<img src="./src/assets/Plan.jpg" alt="" className='wider' />
<h3>DO NOT HESITATE TO CHOOSE CINESTAR AS YOUR STUDIO <br /> PRODUCTION</h3>
<p className='longpara'>Integer scelerisque nulla nec lectus dapibus gravida. Nulla sit amet leo vel orci <br /> convallis hendrerit. Donec eget enim pharetra, interdum tellus et, fringilla dolor. <br /> Duis eget imperdiet nisl. Sed quis convallis felis. Donec varius dictum purus, at <br /> ullamcorper eros dictum venenatis. Pellentesque dictum dictum quam vitae laoreet.</p>
<h5 className='firstplus roboto-bold'>250+</h5>
<h4 ClassName='secondplus'>MOVIE PRODUCTION</h4>
<h6 className='thirdplus roboto-bold'>78+</h6>
<h2 className='fourthplus'>MUSIC VIDEO</h2>
</section>

    </>


  )
}

export default Roman;











