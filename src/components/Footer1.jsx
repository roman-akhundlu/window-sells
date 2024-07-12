import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Footer1.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Footer1 = () => {
  return (
    <>
    <h1 className='ls-2 font-1 lh-1 fw-bold mainhone'>BLOG</h1>
    <h2 className='mainhtwo quicksand cormorant'>OUR LATEST BLOG</h2>
    <p className='mainparagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia sit amet nisi nec <br /> pellentesque. Ut vitae metus blandit, ornare dolor at, pretium ligula. Sed dapibus tortor nisl, quis <br /> pretium metus finibus ac.</p>
    <Swiper

slidesPerView={3}
spaceBetween={10}
breakpoints={{

  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 50,
  },

  1280: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
}}
        
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>    
        <div className="cardA">
  <div className="card-bodyA">
    <img src="../src/assets/photos/model.jpg" alt="" />
    <a href="#">
        <h5 className='link roboto-thin'>TAKING THE SCANS FOR THE MUSIC ALBUM BY RURI</h5>
        </a>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Integer lacinia sit amet nisi nec pellentesque.…</p>

</div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="cardB">
      <div className="card-bodyB">
        <img src="../src/assets/photos/Plan.jpg" alt="" />
        <a href="#">
            <h5 className='link2 roboto-thin'>TVC IS A DIFFERENT CHALLENGE WITH SOME DIFFICULTIES</h5>
            </a>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Integer lacinia sit amet nisi nec pellentesque.…</p>
    
    </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="cardC">
      <div className="card-bodyC">
        <img src="../src/assets/photos/making.jpg" alt="" />
        <a href="#">
            <h5 className='link3 roboto-thin'>THE STORY BEHIND MOVIE PRODUCTION THAT MAKES YOU FEEL IT.</h5>
            </a>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Integer lacinia sit amet nisi nec pellentesque.…</p>
    
    </div>
            </div>
            </SwiperSlide>
      </Swiper>

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

export default Footer1