import React from 'react'
import accessories from '../../assets/accessories.jpg'
import Box from '../../assets/Box.svg'
const Accessories = () => {
    return(
        <div className='main'>
            <div className='container'>
                <div className='text'>
                    <h1>Аксессуары</h1>
                    <p>Выберите аксессуары для Mac.</p>
                </div>
                <div className='Img'>
                    <img className="img" src={accessories} alt="" />
                </div>
            </div>
            <div className="container-1">
                <div className='box'>
                    <img className="BoxImg" src={Box} alt="" />
                    <h1>Бесплатная доставка</h1>
                    <p>И бесплатный возврат.
                        Сроки доставки можно узнать
                        на странице оформления заказа.</p>
                        <a href="">Подробнее</a>
                </div>
            </div>
        </div>
    )
}
export default Accessories