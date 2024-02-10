import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto mt-10">
    <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-semibold mb-3">Customer Support</h2>
        <p className="mb-3">For any inquiries or assistance, please contact our customer support team:</p>
        <ul className="list-disc ml-5">
          <li>Email: support@gmail.com.com</li>
          <li>Phone: +91 9066281975</li>
          <li>Address: 30 B.L. Roy Road, Kolkata, India</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-3">Contact Form</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
            <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300">Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact
