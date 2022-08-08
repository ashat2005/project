import React, { Component } from "react";
import Slider from "react-slick";
import Content from '../products/Content'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        
        <Slider {...settings}>
          <div>
            <Content/>
          </div>
          <div>
            <Content/>
          </div>
          <div>
          <Content/>
          </div>
          <div>
          <Content/>
          </div>
          <div>
          <Content/>
          </div>
          <div>
          <Content/>
          </div>
        </Slider>
      </div>
    );
  }
}