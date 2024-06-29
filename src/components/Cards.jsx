import React from 'react'
import './Cards.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import { toggleOverlayMenu } from './overlaymenu'; // Import the function
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';

const Cards = () => {
  return (
    <>
    
    <section className='stories'>
        <h1 className='lh-1 ls-2 fw-bold font-1'>STORY</h1>
        <h2 className='quicksand cormorant'>STORY BEHIND CINESTAR</h2>
        <p className='firstparastor'>Aliquam ex lacus, venenatis id finibus ut, scelerisque at felis. Nulla facilisi. Sed <br /> fringilla enim consectetur cursus euismod. Sed vel magna in ex malesuada rhoncus <br /> ac a turpis.</p>
      <p className='secondparastor'>” Vivamus quam lectus, facilisis a massa facilisis, imperdiet maximus nunc. Integer <br /> ut metus eget lectus imperdiet pulvinar in ac urna “</p>
      <h3 className='roboto-medium quicksand cormorant'>DYAS KARDINAL</h3>
      <h4 className='roboto-medium'>CEO OF CINESTAR</h4>
      <img src="../src/assets/photos/rejissor.jpg" alt="" />
      </section>


      <div className='reviews'>
        <h1 className='lh-1 ls-2 fw-bold font-1 openingtext'>TESTIMONIAL</h1>
          <h2 className='openingbig quicksand cormorant'>WHAT THEY SAY ABOUT OUR STUDIO ?</h2>
          <p className='openingpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      <div className=' d-flex slidersticks'>
      <Swiper
   spaceBetween={30}
   centeredSlides={true}
   autoplay={{
     delay: 2500,
     disableOnInteraction: false,
   }}
 

   slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
  
   modules={[Autoplay, Pagination, Navigation]}
   className="mySwiper"
      >
        <SwiperSlide>
        <div className="card1">
  <div className="card-body1">
  <i class="fa-solid fa-star star6"></i>
  <i class="fa-solid fa-star star7"></i>
  <i class="fa-solid fa-star star8"></i>
  <i class="fa-solid fa-star star9"></i>
  <i class="fa-solid fa-star star10"></i>
  <p>Pellentesque habitant morbi tristique senectus et netus et <br /> malesuada fames ac turpis egestas. Quisque eget metus <br /> id eros varius venenatis ut sed mauris. Aliquam tempus</p>
  <h5>DYAS KARDINAL</h5>
  <h4>Designation</h4>
  <i class="fa-solid fa-quote-right"></i>
</div>
</div>
        </SwiperSlide>



        <SwiperSlide>
        <div className="card3">
  <div className="card-body1">
  <i class="fa-solid fa-star star6"></i>
  <i class="fa-solid fa-star star7"></i>
  <i class="fa-solid fa-star star8"></i>
  <i class="fa-solid fa-star star9"></i>
  <i class="fa-solid fa-star star10"></i>
  <p>Pellentesque habitant morbi tristique senectus et netus et <br /> malesuada fames ac turpis egestas. Quisque eget metus <br /> id eros varius venenatis ut sed mauris. Aliquam tempus</p>
  <h5>HENDRIK MARELA</h5>
  <h4>Designation</h4>
  <i class="fa-solid fa-quote-right"></i>
</div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="card4">
  <div className="card-body1">
  <i class="fa-solid fa-star star6"></i>
  <i class="fa-solid fa-star star7"></i>
  <i class="fa-solid fa-star star8"></i>
  <i class="fa-solid fa-star star9"></i>
  <i class="fa-solid fa-star star10"></i>
  <p>Pellentesque habitant morbi tristique senectus et netus et <br /> malesuada fames ac turpis egestas. Quisque eget metus <br /> id eros varius venenatis ut sed mauris. Aliquam tempus</p>
  <h5>DEKASYAH KARDIS</h5>
  <h4>Designation</h4>
  <i class="fa-solid fa-quote-right"></i>
</div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="card5">
  <div className="card-body1">
  <i class="fa-solid fa-star star6"></i>
  <i class="fa-solid fa-star star7"></i>
  <i class="fa-solid fa-star star8"></i>
  <i class="fa-solid fa-star star9"></i>
  <i class="fa-solid fa-star star10"></i>
  <p>Pellentesque habitant morbi tristique senectus et netus et <br /> malesuada fames ac turpis egestas. Quisque eget metus <br /> id eros varius venenatis ut sed mauris. Aliquam tempus</p>
  <h5>PAYAH SHA</h5>
  <h4>Designation</h4>
  <i class="fa-solid fa-quote-right"></i>
</div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="card6">
  <div className="card-body1">
  <i class="fa-solid fa-star star6"></i>
  <i class="fa-solid fa-star star7"></i>
  <i class="fa-solid fa-star star8"></i>
  <i class="fa-solid fa-star star9"></i>
  <i class="fa-solid fa-star star10"></i>
  <p>Pellentesque habitant morbi tristique senectus et netus et <br /> malesuada fames ac turpis egestas. Quisque eget metus <br /> id eros varius venenatis ut sed mauris. Aliquam tempus</p>
  <h5>BERLIN SENDUN</h5>
  <h4>Designation</h4>
  <i class="fa-solid fa-quote-right"></i>
</div>
</div>
        </SwiperSlide>
      </Swiper>
      </div>

      </div>
    </>
  )
}

export default Cards