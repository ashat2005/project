import React from 'react'
import airpods from '../../assets/airpods.jpg'
import airpodspro from '../../assets/airpodspro.jpg'
import airpodsMax from '../../assets/airpodsMax.jpg'

const Airpods = () => {
    return(
        <div className='main'>
            <div className="container">
                <img className="airImg" src={airpodspro} alt="" />
                <div className="text">
                    <button className="btn">Новое</button>
                    <h1>
                        AirPods
                    </h1>
                    <p>3-го поколения</p>
                    <a href="">Подробнее</a>
                </div>
            </div>
            <div className="container-1">
                <img className="airpImg" src={airpods} alt="" />
                <div className='text-1'>
                    <h1>AirPods Pro</h1>
                    <a href="">Подробнее</a>
                </div>
            </div>
            <div className="container-2">
                <div className='text-2'>
                    <h1>AirPods Max</h1>
                    <p>Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.</p>
                    <a href="">Подробнее</a>
                    <img className="airMImg" src={airpodsMax} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Airpods