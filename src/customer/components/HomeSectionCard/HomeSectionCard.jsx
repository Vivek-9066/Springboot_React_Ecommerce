import React from 'react'


const HomeSectionCard = ({ product }) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[13rem] ml-4 '>
        <div className='h-[11rem] w-[11rem]' >
            <img className='object-cover object-top w-full h-full mt-2' 
            src={product.imageUrl}/>
        </div>
        <div className='p-3 w-full'>
            <h3 className='text-medium font-medium text-gray-900 text-center'>{product.brand}</h3>
            <p className='mt-2 text-xs text-gray-500 px-5  text-center '>{product.title}</p>
        </div>
    </div>
  )
}

export default HomeSectionCard
