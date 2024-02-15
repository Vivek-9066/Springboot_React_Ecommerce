import React from 'react'

const Cancellation = () => {
  return (
    <div>
       <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Cancellation Policy</h1>
      <div className="text-lg">
        <p className="mb-3">
          At <b>E Shopper Store</b>, we understand that circumstances may arise where you need to cancel your order. We strive to make the cancellation process as simple and transparent as possible.
        </p>
        <h2 className="text-xl font-semibold mb-3">Order Cancellation</h2>
        <p className="mb-3">
          Customers can cancel their order before it has been shipped. Once an order has been shipped, it cannot be canceled. To cancel an order, please contact our customer support team as soon as possible with your order details.
        </p>
        <h2 className="text-xl font-semibold mb-3">Refunds</h2>
        <p className="mb-3">
          If you cancel your order before it has been shipped, we will issue a full refund to the original payment method within [number] business days. Refunds may take longer to process depending on your payment provider.
        </p>
        <p className="mb-3">
          If your order has already been shipped and you wish to cancel it, you may return the items according to our return policy. Once we receive the returned items, we will process a refund minus any applicable shipping fees and restocking charges.
        </p>
        <h2 className="text-xl font-semibold mb-3">Exceptions</h2>
        <p className="mb-3">
          Certain products may not be eligible for cancellation or refund due to their nature, such as personalized items or digital downloads. Please refer to the product description for any specific cancellation restrictions.
        </p>
        <p className="mb-3">
          We reserve the right to refuse or cancel any order at our discretion, including orders that violate our terms and conditions or are suspected of fraudulent activity.
        </p>
        <p className="mb-3">
          If you have any questions or concerns about our cancellation policy, please contact our customer support team for assistance.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Cancellation
