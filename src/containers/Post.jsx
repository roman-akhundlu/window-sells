import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'


const Post = () => {
  return (
    <>
      <section className='blackimgsec2'>
    <img src="../src/assets/photos/main.jpg" alt="" className='invisimg2'/>
    <h1 className='quicksand cormorant'>SINGLE POST</h1>
    <Link to="/" className='importlink2 roboto-bold quicksand cormorant'>Home</Link>
    <p className='roboto-bold quicksand cormorant'>/Single Post</p>
</section>


<section className='firstlinkcard'>
<h1 className='quicksand cormorant'>CATEGORY</h1>
<Link to="/post" className='linkcard1 roboto-thin quicksand'>COMPANY POLICIES</Link>
<Link to="/post" className='linkcard2 roboto-thin quicksand'>PROCEDURES</Link>
<Link to="/post" className='linkcard3 roboto-thin quicksand'>PAYMENT OPTIONS</Link>
<Link to="/post" className='linkcard4 roboto-thin quicksand'>PRICING PLAN</Link>
<Link to="/post" className='linkcard5 roboto-thin quicksand'>ABOUT</Link>
</section>

<section className='firstlinkcard2'>
<img src="../src/assets/photos/liquifer.png" alt="" />
<h1 className='quicksand cormorant roboto-bold'>HAVE <br />  IDEA IN <br /> YOUR <br /> MIND?</h1>
<h2 className='roboto-bold'>LETS START YOUR <br /> PROJECT</h2>
<p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
<Link to="/post" className='roboto-bold ContactUs quicksand cormorant'>Contact Us</Link>
</section>

<section className='pdfdown'>
<h1 className='quicksand cormorant'>DOWNLOAD COMPANY <br /> POLICIES</h1>
<p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
<Link to="" className='roboto-bold pdf  quicksand cormorant'><i class="fa-solid fa-file-arrow-down"></i> DOWNLOAD PDF</Link>
</section>

<section className='postrightside'>
<img src="../src/assets/photos/model.jpg" alt="" />
<p className='postrightpara1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus quis risus ac lacinia. Phasellus vestibulum non ex quis porta. Proin non ligula <br /> tincidunt, porttitor ipsum ut, pellentesque tortor. Curabitur efficitur elit risus, sed blandit purus vestibulum congue. Ut pretium facilisis arcu, a sollicitudin <br /> est auctor sit amet. Vestibulum leo ex, faucibus sodales porta ac, aliquet non mauris. Vestibulum quis pulvinar leo. Phasellus semper eros orci, eu <br /> tincidunt erat mollis ut. Morbi dapibus ut felis sed porttitor. Etiam volutpat ex justo, at sagittis est mattis sit amet. Maecenas diam leo, egestas vitae tellus <br /> nec, mollis aliquam est. Donec id vehicula ligula, at fringilla sem. Etiam finibus sapien in nunc porta, ac euismod libero commodo. Duis efficitur nibh diam, <br /> quis dignissim elit lobortis vitae. Integer pulvinar maximus nisi ut scelerisque.</p>
<p className='postrightpara2'>Duis ultricies leo felis, a finibus turpis feugiat blandit. Proin tempus iaculis urna, vitae vehicula lorem malesuada quis. Duis ornare enim sollicitudin <br /> vehicula imperdiet. Quisque nunc nisi, pretium sed euismod vitae, aliquet eget metus. Morbi semper bibendum ligula, at euismod turpis pellentesque <br /> vitae. Aenean molestie nulla sed massa luctus facilisis. Nunc turpis risus, lacinia eget imperdiet vel, pellentesque sed diam. Quisque sem lectus, <br /> sollicitudin quis nibh ac, rhoncus dapibus risus. Vestibulum quam tellus, scelerisque ut ligula tempus, sodales dignissim nisl. Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
<p  className='postrightpara3'>Suspendisse dapibus, nisl eget pulvinar tincidunt, magna lorem feugiat ex, non volutpat leo quam ut metus. Aenean non enim vel ante ornare luctus. <br /> Maecenas urna nisl, blandit id gravida sed, sagittis eu tellus. Proin luctus sodales massa ut facilisis. Duis malesuada nunc vitae ultrices mollis. Sed <br /> dignissim congue leo at luctus. Integer quis rhoncus ex, id tincidunt nulla.</p>
<p className='postrightpara4'>Cras consectetur leo ac ligula eleifend condimentum. Phasellus gravida convallis quam, nec pretium ex mollis ac. Praesent egestas ex a rutrum vulputate. <br /> Mauris auctor accumsan nulla, dapibus pharetra nibh varius et. In placerat pharetra tempor. Nam mattis efficitur nunc, eget interdum elit sodales sed. <br /> Etiam eget accumsan orci, eu ornare nisl. Donec ut viverra augue.</p>
<p className='postrightpara5'>Nulla facilisi. Donec et lobortis nibh. Integer venenatis nisi in enim maximus, et lacinia neque iaculis. Morbi et eros in felis vehicula egestas sed et metus. <br /> Proin molestie massa non finibus volutpat. Maecenas accumsan suscipit mauris et malesuada. <br /> Quisque volutpat est quis arcu pellentesque aliquet. Vestibulum faucibus dictum nulla, sed ultrices nisl pulvinar at.</p>
<div className='border-bottom border-white my-4 bord '></div>
<div className='linkdiv'>
<a href='https://www.whatsapp.com/' type='_blank'>
  <i className='fa-brands fa-whatsapp'></i>
</a>

<a href='https://www.twitter.com/' type='_blank'>
  <i className='fa-brands fa-twitter'></i>
</a>

<a href='https://www.facebook.com/' type='_blank'>
  <i className='fa-brands fa-facebook'></i>
</a>
<h1>Share:</h1>

</div>

</section>


<section className='belowfooter'>
  <img src="../src/assets/photos/liquifer.png" alt="" />
<h1 className='ls-2'>STILL HAVE A DOUBT ?</h1>
<h2 className='quicksand cormorant'>WANTED TO SEE OUR PREVIOS <br /> PROJECT ?</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</p>
<Link to="" className='roboto-bold seeallproject  quicksand cormorant'>SEE ALL PROJECT</Link>
</section>


<section className='secondsteppost'>
        <h2 className='bigtwopost roboto-thin quicksand cormorant'>HAVE IDEA IN YOUR MIND ? LET'S START YOUR PROJECT WITH <span>US</span></h2>
      <h3 className='cartoonyorangepost roboto-bold'>CINESTAR STUDIO, +123-456-789 OR HELLO@AWESOMESITE.COM</h3>
      <div className='sociallinkspost'>

      <a href="https://www.facebook.com/">
      <h4 className='facebookpost roboto-bold quicksand cormorant'>FACEBOOK</h4>
      </a>

      <a href="https://x.com/">
      <h4 className='twitterpost roboto-bold quicksand cormorant'>TWITTER</h4>
      </a>

      <a href="https://www.linkedin.com/">
      <h4 className='linkedinpost roboto-bold quicksand cormorant'>LINKEDIN</h4>
      </a>

      <a href="https://www.instagram.com/">
      <h4 className='instagrampost roboto-bold quicksand cormorant'>INSTAGRAM</h4>
      </a>

      <a href="https://www.youtube.com/">
      <h4 className='youtubepost roboto-bold quicksand cormorant'>YOUTUBE</h4>
      </a>
      </div>

      <img src="../src/assets/photos/liquifer.png" alt="" className='endbackimgpost'/>
      <img src="../src/assets/photos/logo.png" alt="" className='endmainimgpost' />
      <h6 className='endinghsixpost'>COPYRIGHT 2023 © CINESTAR | POWERED BY ROMETHEME STUDIO</h6>
      </section>
    </>
  )
}

export default Post