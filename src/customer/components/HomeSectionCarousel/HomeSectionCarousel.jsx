import React, { useState } from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const HomeSectionCarousel = ({ data,sectionName }) => {
    const[activeIndex,setActiveIndex]=useState(0);

    const responsive={
        0:{items:1},
        720:{items:3},
        1024:{items:5}
    }
    const items= data.slice(0,10).map((item)=><HomeSectionCard product={item}/>);

    const syncActiveIndex=({items})=> setActiveIndex(items)
  return (
    <div className='relative px-4 lg:px-8'>
        <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
        <div className='relative p-5'>
            <AliceCarousel
                items={items}
                disableDotsControls
                responsive={responsive}
                onSlideChanged={syncActiveIndex}
                activeIndex={activeIndex}
            />
        </div>
    </div>
  )
}

export default HomeSectionCarousel
