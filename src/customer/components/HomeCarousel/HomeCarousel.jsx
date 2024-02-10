import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Carouseldata } from './Carouseldata';




const HomeCarousel = () => {
    const items = Carouseldata.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image} alt=''/>)

    return (
    
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableDotsControls
    />
    )
}
export default HomeCarousel
