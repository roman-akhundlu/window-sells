import React from 'react'
import './AboutUs.css'
import { Link } from 'react-router-dom'
import Records from '../components/Records'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';

const Aboutus = () => {
  return (
    <>
    <section className='blackimgsec'>
    <img src="../src/assets/photos/main.jpg" alt="" className='invisimg'/>
    <h1 className='quicksand cormorant'>ABOUT US</h1>
    <Link to="/" className='importlink roboto-bold quicksand cormorant'>Home</Link>
    <p className='roboto-bold quicksand cormorant'>/About Us</p>
</section>


<Records />


<div className="awardZ d-flex h-100 align-items-center p-4">
        <img src="../src/assets/photos/award1.png" alt="" className='awardA' />
        <img src="../src/assets/photos/award2.png" alt="" className='awardB' />
        <img src="../src/assets/photos/award1.png" alt="" className='awardTwin' />
      </div>

      <div className="card-first">
        <img src="../src/assets/photos/liquifer.png" alt="" className='liqucard'/>
        <h5 className="card-hfive quicksand cormorant">WE ARE THE BEST STUDIO <br /> PRODUCTION</h5>
        <p className="card-para">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
      </div>



      <section className='stories'>
        <h1 className='lh-1 ls-2 fw-bold font-1'>STORY</h1>
        <h2 className='quicksand cormorant'>STORY BEHIND CINESTAR</h2>
        <p className='firstparastor'>Aliquam ex lacus, venenatis id finibus ut, scelerisque at felis. Nulla facilisi. Sed <br /> fringilla enim consectetur cursus euismod. Sed vel magna in ex malesuada rhoncus <br /> ac a turpis.</p>
      <p className='secondparastor'>” Vivamus quam lectus, facilisis a massa facilisis, imperdiet maximus nunc. Integer <br /> ut metus eget lectus imperdiet pulvinar in ac urna “</p>
      <h3 className='roboto-medium quicksand cormorant'>DYAS KARDINAL</h3>
      <h4 className='roboto-medium'>CEO OF CINESTAR</h4>
      <img src="../src/assets/photos/rejissor.jpg" alt="" />
      </section>




<section className='thirdZtep'>
  <div className='contentContainer'>

  <div className='LeftUpperFooter'>
  <h1 className='ls-2 lh-1'>STUDIO</h1>
  <h2 className='quicksand cormorant'>CINESTAR STAGE</h2>
  <p className='LeftUpperPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, <br /> pulvinar dapibus leo.</p>
  </div>



  <div className='schedule'>
      <h2 className='description quicksand cormorant'>DESCRIPTION</h2>
      <p className='schedpara1'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</p>
      <h1 className='area quicksand cormorant'>AREA</h1>
      <p className='areapara'>21,550 sq ft</p>
    </div>


    <p className='LeftUpperPara2'>Fusce nec mauris purus. Vestibulum ut sagittis turpis, ac dapibus libero. Curabitur sed leo dictum, <br /> pellentesque lorem nec, sagittis magna. Proin dictum nisl nec volutpat convallis. Maecenas <br /> ullamcorper sed urna non tristique.</p>

    <Link to="/aboutus" className='roboto-bold MapLocation quicksand cormorant'>Map Location</Link>
  
  

  </div>
  <Swiper
   spaceBetween={30}
   centeredSlides={true}
   autoplay={{
     delay: 2500,
     disableOnInteraction: false,
   }}
 

   slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
  
   modules={[Autoplay, Pagination, Navigation]}
   className="mySwiper"
      >
        
        <SwiperSlide>
        <img src="../src/assets/photos/building1.jpg" alt="" className='building1' />
        </SwiperSlide>

        <SwiperSlide>
        <img src="../src/assets/photos/building2.jpg" alt="" className='building2'/>
        </SwiperSlide>
      </Swiper>
</section>


<section className='secondstep'>
        <h2 className='bigtwo roboto-thin quicksand cormorant'>HAVE IDEA IN YOUR MIND ? LET'S START YOUR PROJECT WITH <span>US</span></h2>
      <h3 className='cartoonyorange roboto-bold'>CINESTAR STUDIO, +123-456-789 OR HELLO@AWESOMESITE.COM</h3>
      <div className='sociallinks'>

      <a href="https://www.facebook.com/">
      <h4 className='facebook roboto-bold quicksand cormorant'>FACEBOOK</h4>
      </a>

      <a href="https://x.com/">
      <h4 className='twitter roboto-bold quicksand cormorant'>TWITTER</h4>
      </a>

      <a href="https://www.linkedin.com/">
      <h4 className='linkedin roboto-bold quicksand cormorant'>LINKEDIN</h4>
      </a>

      <a href="https://www.instagram.com/">
      <h4 className='instagram roboto-bold quicksand cormorant'>INSTAGRAM</h4>
      </a>

      <a href="https://www.youtube.com/">
      <h4 className='youtube roboto-bold quicksand cormorant'>YOUTUBE</h4>
      </a>
      </div>

      <img src="../src/assets/photos/liquifer.png" alt="" className='endbackimg'/>
      <img src="../src/assets/photos/logo.png" alt="" className='endmainimg' />
      <h6 className='endinghsix'>COPYRIGHT 2023 © CINESTAR | POWERED BY ROMETHEME STUDIO</h6>
      </section>




    </>
  )
}

export default Aboutus