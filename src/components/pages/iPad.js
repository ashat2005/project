import React from 'react'
import iPadL from '../../assets/iPad.jpg'
import iPadR from '../../assets/iPadR.jpg'
const iPad = () => {
return(
    <div className='main'>
        <div className="container">
            <div className="IMGR">
                <img className='imgiPadR' src={iPadR} alt="" />
            </div>
            <div className='text'>
                <h1>iPad</h1>
                <h2>MINI</h2>
                <p>Мегамощь. <br/> Миниразмер.</p>
                <a href="">Подробнее</a>
            </div>
        </div>
        <div className="container-1">
            <div className="IMGL">
                <img className='imgiPadL' src={iPadL} alt="" />
            </div>
            <div className='text-1'>
                <h1>iPad</h1>
                <p>Лёгкий путь к большим <br/> возможностям.</p>
                <a href="">Подробнее</a>
            </div>
        </div>
    </div>
)
}
export default iPad