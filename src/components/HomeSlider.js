import React, { Component } from 'react';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'

class HomeSlider extends Component {
  render() {
    return (
      <div className="Home_Carousel">
        <OwlCarousel
        	className="owl-theme"
        	loop autoplay={true} margin={10} nav items={1} dots={false} navText={['<i class="fas fa-angle-left fa-3x"></i>', '<i class="fas fa-angle-right fa-3x"></i>']}
        >
        	<div className="item"><img src={banner1} /></div>
            <div className="item"><img src={banner2} /></div>
            <div className="item"><img src={banner3} /></div>
        </OwlCarousel>
      </div>
    );
  }
}

export default HomeSlider;
