import React from 'react';
import './Responsive.css';
import Navbar from './Navbar'
import Record from './Records'
import Liquifer from './Liquiferpart';
import Cards from './Cards';
import Inputbe from './Inputbe';


const Roman = () => {
  return (
    <>
      
<Navbar/>
      
      <div className='teamview'>
        <img src="./src/assets/photos/main.jpg" alt="" />
      </div>

      <div className='texts'>
        <h2 className='font-2 lh-1 fw-bold'>FILM & MOVIE <br /><span>PRODUCTION</span></h2>
        <h1 className='font-1 fs-3 ls-2 fw-bold'>CINESTAR STUDIO</h1>
        <p>Nullam a placerat nibh, et posuere lacus. Etiam massa ex, imperdiet et lobortis et, posuere non tellus. <br /><span>Pellentesque finibus maximus sapien.</span></p>
      </div>

      <div className="awards d-flex h-100 align-items-center p-4">
        <img src="./src/assets/photos/award1.png" alt="" className='award1' />
        <img src="./src/assets/photos/award2.png" alt="" className='award2' />
        <img src="./src/assets/photos/award1.png" alt="" className='award3' />
      </div>

      <div className="card-body">
        <h5 className="card-title py-4">WE ARE THE BEST STUDIO PRODUCTION</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <Record/>

      <Liquifer/>

<Cards/>

<Inputbe/>
    </>
  );
}

export default Roman;




