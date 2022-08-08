import React from 'react'
import Logo from '../../assets/logo.svg'
import './header.css'
const Header = ()=>{
    return (
        <header className="header">
           <div className='container'>
            <div className="header_nav">
                <div className='hedaer_logo'>
                    <a href="https://www.apple.com/ru/watch/"><img  src={Logo} alt="" /></a>
                </div>
                
                <div className='menu'>
            <a href="https://www.apple.com/shop/buy-watch"> Apple Watch </a>
            <a href="https://www.apple.com/ipad/">iPad</a>
            <a href="https://www.apple.com/airpods/">AirPods</a>
            <a href="https://www.apple.com/iphone/">iPhone</a>
            <a href="https://www.apple.com/tv-home/">TV & Home</a>
                </div>
            
            </div>
           
           
           </div>
        </header>
    )
}

export default Header