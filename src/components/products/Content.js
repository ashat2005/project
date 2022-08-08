import React from "react"
import ContentItem from './Content-item'
import Airpods from '../../assets/Airpods.svg'
import Iphone from '../../assets/Iphone.svg'
import Apple_tv from '../../assets/Apple_tv.svg'
import Apple_card from '../../assets/Apple_card.svg'
// import Vector from '../../assets/Vector.svg'
import './Content.css'

const Content = ()=>{
  return (
    <main className="main">
      <div className="container">
      <div className="main_header">
      <h1>Check also</h1>
      {/* <p>See all <a className="img_link" href=""><img className="img_link" src={Vector} alt="" /></a></p> */}
      </div>
       <div className="main_product">
       <ContentItem title='AirPods'  price='$199.00' imgSrc={Airpods}/>
        <ContentItem title='Iphone XR'  price='$799.00' imgSrc={Iphone}/>
        <ContentItem title='Apple TV 4K'  price='$179.00' imgSrc={Apple_tv}/>
        <ContentItem title='Apple Card'  price='Free*' imgSrc={Apple_card}/>
       </div>
        </div>
    </main>
  )
}
export default Content