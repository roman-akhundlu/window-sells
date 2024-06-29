import React from 'react'
import './Liquifer.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import { toggleOverlayMenu } from './overlaymenu'; // Import the function
import 'swiper/css/pagination';
import {  Navigation } from 'swiper/modules';

const Liquiferpart = () => {
  return (
    <>
       <section className='sliderman'>
        <div className='protexts'>
          <h5 className='lh-1 ls-2 fw-bold font-1'>PORTFOLIO</h5>
          <h4 className='quicksand cormorant'>FEATURED PROJECT</h4>
          <div className='videos'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              <SwiperSlide><img src="../src/assets/photos/movie1.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="../src/assets/photos/movie2.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="../src/assets/photos/movie3.jpg" alt="" /></SwiperSlide>
            </Swiper>
            <p className='longparagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus velit, iaculis quis mauris et,<br /> dignissim hendrerit ex. Nulla ultrices vel tellus lacinia pharetra. Integer commodo ligula lobortis <br /> sapien vehicula placerat eu id tellus. Ut faucibus neque eget dui rutrum, in hendrerit diam euismod. <br /> Nam congue diam nulla, vitae sagittis lorem bibendum eu. Curabitur eu ex pulvinar massa convallis <br /> ornare.</p>
            <p className='shortparagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, <br /> pulvinar dapibus leo. Proin interdum dignissim maximus. Interdum et malesuada fames ac ante <br /> ipsum primis in faucibus.</p>
            <a href="#" className='seeall roboto-bold'>SEE ALL PROJECT</a>
            <a href="#" className='startproject roboto-bold'>START THE PROJECT <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </section>

      <section className='hypnothis'>
        <div className='backimg'>
          <img src="../src/assets/photos/liquifer.png" alt="" />
          <h5 className='lh-1 ls-2 fw-bold font-1 firsth5'>SERVICES</h5>
          <h4 className='firsth4 quicksand cormorant'>WHAT SERVICE WE OFFER ?</h4>
        </div>

        <div className='service1'>
        <i class="fa-solid fa-film"></i>
        <h1 className='roboto-bold quicksand cormorant'>FILM PRODUCTION</h1>
        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Ut elit <br /> tellus, luctus nec ullamcorper mattis</p>
        </div>

        <div className='service2'>
        <i class="fa-solid fa-photo-film"></i>
          <h1 className='roboto-bold quicksand cormorant'>CREATIVE DIRECTION</h1>
          <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.  Ut elit <br /> tellus, luctus nec ullamcorper mattis</p>
        </div>

        <div className='service3'>
      <i class="fa-solid fa-video"></i>
      <h2 className='roboto-bold quicksand cormorant'>TVC PRODUCTION</h2>
      <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.  Ut elit <br /> tellus, luctus nec ullamcorper mattis</p>
       </div>

      <div className='service4'>
      <i class="fa-solid fa-music"></i>
      <h3 className='roboto-bold quicksand cormorant'>MUSIC VIDEO</h3>
      <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.  Ut elit <br /> tellus, luctus nec ullamcorper mattis</p>
       </div>
      </section>
    </>
  )
}

export default Liquiferpart