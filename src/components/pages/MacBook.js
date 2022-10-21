import React from 'react'
import Macbook from '../../assets/Macbook.png'
const MacBook = ()=>{
    return(
        <div className='main'>
            <div className="container">
                <div className="MacText">
                    <h1>MacBook Pro</h1>
                    <p>Суперсила профессионалов.</p>
                    <a href="">Подробнее</a>
                </div>
                <div className="MacImg">
                    <img className="Macimg" src={Macbook} alt="" />
                </div>
            </div>
        </div>
    )
}
export default MacBook