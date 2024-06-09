import React from 'react';
import './Responsive.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { toggleOverlayMenu } from './overlaymenu'; // Import the function

const Roman = () => {
  return (
    <>
      <nav className="sticky-top navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./src/assets/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleOverlayMenu} // Attach the function here
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
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

      {/* Overlay Menu */}
      <div id="overlay-menu" className="overlay-menu">
        <ul className="overlay-menu-list">
          <li className="overlay-menu-item"><a href="#">HOMEPAGE</a></li>
          <li className="overlay-menu-item"><a href="#">ABOUT</a></li>
          <li className="overlay-menu-item"><a href="#">POST</a></li>
          <li className="overlay-menu-item"><a href="#">P.DETAILS</a></li>
        </ul>
      </div>

      <div className='teamview'>
        <img src="./src/assets/main.jpg" alt="" />
      </div>

      <div className='texts'>
        <h2 className='font-2 lh-1 fw-bold'>FILM & MOVIE <br /><span>PRODUCTION</span></h2>
        <h1 className='font-1 fs-3 ls-2 fw-bold'>CINESTAR STUDIO</h1>
        <p>Nullam a placerat nibh, et posuere lacus. Etiam massa ex, imperdiet et lobortis et, posuere non tellus. <br /><span>Pellentesque finibus maximus sapien.</span></p>
      </div>

      <div className="awards d-flex h-100 align-items-center p-4">
        <img src="./src/assets/award1.png" alt="" className='award1' />
        <img src="./src/assets/award2.png" alt="" className='award2' />
        <img src="./src/assets/award1.png" alt="" className='award3' />
      </div>

      <div className="card-body">
        <h5 className="card-title py-4">WE ARE THE BEST STUDIO PRODUCTION</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <section className='pluses'>
        <h1 className='font-1 fs-3 ls-2 fw-bold'>CINESTAR STUDIO</h1>
        <h2>HAVE IDEA FOR YOUR <br />PROJECT?</h2>
        <p className='truepara'>Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus <br /> in ante in, vehicula facilisis dui. Integer consequat consectetur est id blandit. Duis fermentum nulla <br /> non mi tempor elementum. Donec efficitur ac eros quis porta.</p>
        <img src="./src/assets/Plan.jpg" alt="" className='wider' />
        <h3>DO NOT HESITATE TO CHOOSE CINESTAR AS YOUR STUDIO <br /> PRODUCTION</h3>
        <p className='longpara'>Integer scelerisque nulla nec lectus dapibus gravida. Nulla sit amet leo vel orci <br /> convallis hendrerit. Donec eget enim pharetra, interdum tellus et, fringilla dolor. <br /> Duis eget imperdiet nisl. Sed quis convallis felis. Donec varius dictum purus, at <br /> ullamcorper eros dictum venenatis. Pellentesque dictum dictum quam vitae laoreet.</p>
        <h5 className='firstplus roboto-bold'>250+</h5>
        <h4 className='secondplus'>MOVIE PRODUCTION</h4>
        <h6 className='thirdplus roboto-bold'>78+</h6>
        <h2 className='fourthplus'>MUSIC VIDEO</h2>
      </section>

      <section className='sliderman'>
        <div className='protexts'>
          <h5 className='lh-1 ls-2 fw-bold font-1'>PORTFOLIO</h5>
          <h4>FEATURED PROJECT</h4>
          <div className='videos'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              <SwiperSlide><img src="./src/assets/movie1.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="./src/assets/movie2.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="./src/assets/movie3.jpg" alt="" /></SwiperSlide>
            </Swiper>
            <p className='longparagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus velit, iaculis quis mauris et,<br /> dignissim hendrerit ex. Nulla ultrices vel tellus lacinia pharetra. Integer commodo ligula lobortis <br /> sapien vehicula placerat eu id tellus. Ut faucibus neque eget dui rutrum, in hendrerit diam euismod. <br /> Nam congue diam nulla, vitae sagittis lorem bibendum eu. Curabitur eu ex pulvinar massa convallis <br /> ornare.</p>
            <p className='shortparagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, <br /> pulvinar dapibus leo. Proin interdum dignissim maximus. Interdum et malesuada fames ac ante <br /> ipsum primis in faucibus.</p>
            <a href="Resposive.jsx" className='seeall roboto-bold'>SEE ALL PROJECT</a>
            <a href="Resposive.jsx" className='startproject roboto-bold'>START THE PROJECT <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </section>

      <section className='hypnothis'>
        <div className='backimg'>
          <img src="./src/assets/liquifer.png" alt="" />
          <h5 className='lh-1 ls-2 fw-bold font-1 firsth5'>SERVICES</h5>
          <h4 className='firsth4'>WHAT SERVICE WE OFFER ?</h4>
        </div>

        <div className='service1'>
        <i class="fa-solid fa-film"></i>
        <h1 className='roboto-bold'>FILM PRODUCTION</h1>
        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Ut elit <br /> tellus, luctus nec ullamcorper mattis</p>
        </div>

        <div className='service2'>
        <i class="fa-solid fa-photo-film"></i>
          <h1 className='roboto-bold'>CREATIVE DIRECTION</h1>
          <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.  Ut elit <br /> tellus, luctus nec ullamcorper mattis</p>
        </div>

        <div className='service3'>
      <i class="fa-solid fa-video"></i>
      <h2 className='roboto-bold'>TVC PRODUCTION</h2>
      <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.  Ut elit <br /> tellus, luctus nec ullamcorper mattis</p>
       </div>

      <div className='service4'>
      <i class="fa-solid fa-music"></i>
      <h3 className='roboto-bold'>MUSIC VIDEO</h3>
      <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.  Ut elit <br /> tellus, luctus nec ullamcorper mattis</p>
       </div>
      </section>


      <section className='stories'>
        <h1 className='lh-1 ls-2 fw-bold font-1'>STORY</h1>
        <h2>STORY BEHIND CINESTAR</h2>
        <p className='firstparastor'>Aliquam ex lacus, venenatis id finibus ut, scelerisque at felis. Nulla facilisi. Sed <br /> fringilla enim consectetur cursus euismod. Sed vel magna in ex malesuada rhoncus <br /> ac a turpis.</p>
      <p className='secondparastor'>” Vivamus quam lectus, facilisis a massa facilisis, imperdiet maximus nunc. Integer <br /> ut metus eget lectus imperdiet pulvinar in ac urna “</p>
      <h3 className='roboto-medium'>DYAS KARDINAL</h3>
      <h4 className='roboto-medium'>CEO OF CINESTAR</h4>
      <img src="./src/assets/rejissor.jpg" alt="" />
      </section>
    </>
  );
}

export default Roman;




