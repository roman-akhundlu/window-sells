import React from 'react'
import './Records.css';

const Records = () => {
  return (
    <>
    <section className='pluses'>
        <h1 className='font-1 fs-3 ls-2 fw-bold'>CINESTAR STUDIO</h1>
        <h2 className='quicksand cormorant pluseshtwo'>HAVE IDEA FOR YOUR <br />PROJECT?</h2>
        <p className='truepara'>Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus <br /> in ante in, vehicula facilisis dui. Integer consequat consectetur est id blandit. Duis fermentum nulla <br /> non mi tempor elementum. Donec efficitur ac eros quis porta.</p>
        <img src="../src/assets/photos/Plan.jpg" alt="" className='wider' />
        <h3 className='quicksand cormorant'>DO NOT HESITATE TO CHOOSE CINESTAR AS YOUR STUDIO <br /> PRODUCTION</h3>
        <p className='longpara'>Integer scelerisque nulla nec lectus dapibus gravida. Nulla sit amet leo vel orci <br /> convallis hendrerit. Donec eget enim pharetra, interdum tellus et, fringilla dolor. <br /> Duis eget imperdiet nisl. Sed quis convallis felis. Donec varius dictum purus, at <br /> ullamcorper eros dictum venenatis. Pellentesque dictum dictum quam vitae laoreet.</p>
        <h5 className='firstplus roboto-bold quicksand cormorant'>250+</h5>
        <h4 className='secondplus quicksand cormorant'>MOVIE PRODUCTION</h4>
        <h6 className='thirdplus roboto-bold quicksand cormorant'>78+</h6>
        <h2 className='fourthplus quicksand cormorant'>MUSIC VIDEO</h2>
      </section>
    </>
  )
}

export default Records