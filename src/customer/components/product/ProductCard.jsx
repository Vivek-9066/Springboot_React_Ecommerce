import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${product.id}`)} className='productCard w-[13rem] m-3 transition-all cursor-pointer'>
        <div className='h-[15rem]'>
            <img className='w-full h-full object-cover object-left-top' src={product.imageUrl} alt=''/>
        </div>
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60 text-center'>{product.brand}</p>
                <p className='text-sm text-center'>{product.title}</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>₹{product.discountedPrice}</p>
                <p className='line-through opacity-50'>₹{product.price}</p>
                <p className='text-green-600 font-semibold'>{product.discountPersent}% Off</p>

            </div>
        </div>
    </div>
  )
}

export default ProductCard
