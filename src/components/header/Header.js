import React from 'react'
// import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import {Link} from 'react-router-dom'
// import AppleWatch from '../pages/aplleWatch/aplleWatch';
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
                <nav>
          <ul className='menu'>
            <li>
              <Link className='text' to="/macbook">MacBook </Link>
            </li>
            <li>
              <Link className='text' to="/accessories">Accessories</Link>
            </li>
            <li>
              <Link className='text' to="/airpods">AirPods</Link>
            </li>
            <li>
              <Link className='text' to="/ipad">iPad</Link>
            </li>
            <li>
              <Link className='text' to="/watch">Watch</ Link>
            </li>
          </ul>
        </nav>
              </div>
           </div>
        </header>
    )
}

export default Header