import React from 'react'
import Logo from '../../assets/logo.svg'
import watch from '../../assets/watch.jpg'
const Watch = () => {
return(
    <div className='main'>
        <div className="container">
        <img className='logoimg'  src={Logo} alt="" />
        <div className='text'>
            <h1>
            Показывают <br/>
            максимум.
            </h1>
            <a href="">Подробнее</a>
        </div>
        <img className="watchimg " src={watch} alt="" />
        </div>
    </div>
)
}
export default Watch