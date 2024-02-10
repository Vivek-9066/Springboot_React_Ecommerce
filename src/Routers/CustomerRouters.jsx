import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/footer/Footer'
import Product from '../customer/components/product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetail from '../customer/components/Order/OrderDetail'
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'
import Contact from '../customer/Pages/Contact'
import Cancellation from '../customer/Pages/Cancellation'
import PrivacyPolicy from '../customer/Pages/PrivacyPolicy'
import Terms from '../customer/Pages/Terms'
import AboutUs from '../customer/Pages/AboutUs'

const CustomerRouters = () => {
  return (
    <div>
        <div>
        <Navigation/>
        </div>
        
      <Routes>
        
      <Route path='/login' element={<HomePage/>}/>
      <Route path='/register' element={<HomePage/>}/>


            <Route path='/' element={<HomePage/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}/>
            <Route path='/product/:productId' element={<ProductDetails/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/account/order' element={<Order/>}/>
            <Route path='/account/order/:orderId' element={<OrderDetail/>}/>
            <Route path='/payment/:orderId' element={<PaymentSuccess/>}/>

            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/cancellation' element={<Cancellation/>}/>
            <Route path='/privacy' element={<PrivacyPolicy/>}/>
            <Route path='/terms&conditions' element={<Terms/>}/>

      </Routes>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouters
