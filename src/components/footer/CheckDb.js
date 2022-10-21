import React from 'react';
import './check.css'
import Vector2 from '../../assets/Vector2.svg'
import Vector3 from '../../assets/Vector3.svg'
import Instogram from '../../assets/Instogram.svg'


const Check = () => {
  return(
<div className='container'>
  <div className='check'>
    <div className='chek'>
        <h1>Follow Us.</h1>
        <p>We are always looking for new <br/>
          projects and collaborations.<br/> 
          Feel free to contact us.</p>
          <a href="" className='img-link'> 
          <a href="https://www.facebook.com/apple/"><img className="img__link" src={Vector2} alt="" /></a>
          <a href="https://twitter.com/apple"><img className="img__link" src={Vector3} alt="" /></a>
          <a href="https://www.instagram.com/apple/"><img className="img__link" src={Instogram} alt="" /></a>
           </a>
    </div>
    <div className='chec'>
        <h1>Contact Us.</h1>
        <p>One Apple Park Way <br/>
Cupertino, CA 95014</p>
        <p className='number'><a href="tel:+996(704)646665">+996(704)646665</a></p>
        <a href="https://support.apple.com/" className='ssylka'>support@apple.com</a>
    </div>
    
</div>
</div>
  )
}

export default Check