import React from 'react'
import { Link } from 'react-router-dom'
import './PortfolioDetail.css'

const PortfolioDetail = () => {
  return (
    <>
    <section className='blackimgsec3'>
    <img src="../src/assets/photos/main.jpg" alt="" className='invisimg3'/>
    <h1 className='quicksand cormorant'>PROJECT DETAIL</h1>
    <Link to="/" className='importlink3 roboto-bold quicksand cormorant'>Home</Link>
    <p className='roboto-bold quicksand cormorant'>/Project Detail</p>
</section>

<section className='portfoliosec3'>
<h1 className='quicksand cormorant'>DAUGHTER VS MOM</h1>
<h2 className='roboto-bold ls-2 lh-1 fw-bold'>THE STORY BETWEEN DAUGHTER AND MOM</h2>
<h3 className='roboto-thin'>RELEASE DATE : 30 FEBRUARY 2023</h3>
<p className='postpara1'>Nunc iaculis molestie sollicitudin. In a convallis diam, non scelerisque ipsum. Aenean ac turpis <br /> imperdiet, laoreet elit eu, viverra lacus. Praesent venenatis fermentum mollis. Etiam ultrices, ex at <br /> fringilla condimentum, arcu felis ultrices eros, id faucibus turpis ligula eu libero. Nulla et ultricies <br /> eros.</p>
<p className='postpara2'>Donec tincidunt erat a diam euismod pharetra. Vestibulum nec nisi eu mi viverra consequat nec non <br /> purus. Curabitur porta, felis at sollicitudin euismod, eros ipsum tincidunt massa, quis congue ipsum <br /> nisl ut risus. Praesent pharetra augue eget nibh fermentum, ut efficitur lectus posuere.</p>
</section>



<div className='schedulepost'>
  <div className='firstpart'>
  <h2 className='artist quicksand cormorant'>ARTIST</h2>
      <div className='hthreediv'>
      <h3 className='artistdown1'>Tyas Widagdo</h3>
      <h3 className='artistdown2'>Elsa Verina</h3>
      <h3 className='artistdown3'>Payad Smasi</h3>
      <h3 className='artistdown4'>Berlin Sendum</h3>
      </div>
  </div>
   

      <div className='secondpart'>
      <h1 className='script quicksand cormorant'>SCRIPT BY</h1>
      <div className='hfourdiv'>
        <h4>Hendrik Morella</h4>
      </div>
      </div>
     
     <p className='lastparapost'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, <br /> pulvinar dapibus leo.</p>
    </div>

    <section className='swippost'>
<img src="../src/assets/photos/movie3.jpg" alt="" className='bigimgpost' />
<h6 className='quicksand cormorant'>BEHIND THE SCENE</h6>
<img src="../src/assets/photos/cutdub.jpg" alt="" className='cutdubpost'/>
<img src="../src/assets/photos/rejissor.jpg" alt="" className='rejissorpost'/>
    </section>


    <section className='upperfooterpost'>
<img src="../src/assets/photos/liquifer.png" alt="" />
<h1 className='ls-2 roboto-bold'>HAVE IDEA IN YOUR MIND ?</h1>
<h2 className='quicksand cormorant'>LETS HAVE A PROJECT WITH <br /> CINESTAR STUDIO</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</p>
    <Link to="/">Contact Us</Link>
    </section>

   
    <section className='secondstepproject'>
        <h2 className='bigtwoproject roboto-thin quicksand cormorant'>HAVE IDEA IN YOUR MIND ? LET'S START YOUR PROJECT WITH <span>US</span></h2>
      <h3 className='cartoonyorangeproject roboto-bold'>CINESTAR STUDIO, +123-456-789 OR HELLO@AWESOMESITE.COM</h3>
      <div className='sociallinksproject'>

      <a href="https://www.facebook.com/">
      <h4 className='facebookproject roboto-bold quicksand cormorant'>FACEBOOK</h4>
      </a>

      <a href="https://x.com/">
      <h4 className='twitterproject roboto-bold quicksand cormorant'>TWITTER</h4>
      </a>

      <a href="https://www.linkedin.com/">
      <h4 className='linkedinproject roboto-bold quicksand cormorant'>LINKEDIN</h4>
      </a>

      <a href="https://www.instagram.com/">
      <h4 className='instagramproject roboto-bold quicksand cormorant'>INSTAGRAM</h4>
      </a>

      <a href="https://www.youtube.com/">
      <h4 className='youtubeproject roboto-bold quicksand cormorant'>YOUTUBE</h4>
      </a>
      </div>

      <img src="../src/assets/photos/liquifer.png" alt="" className='endbackimgproject'/>
      <img src="../src/assets/photos/logo.png" alt="" className='endmainimgproject' />
      <h6 className='endinghsixproject'>COPYRIGHT 2023 © CINESTAR | POWERED BY ROMETHEME STUDIO</h6>
      </section>
    </>
  )
}

export default PortfolioDetail


