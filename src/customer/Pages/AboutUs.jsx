import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-3">Our Story</h2>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sem nec purus dignissim fermentum nec sit amet
            nunc. Nam aliquam vestibulum metus, eget iaculis ex ultrices ut. In euismod consequat sapien, nec feugiat
            enim venenatis nec. Cras euismod tristique orci nec ullamcorper.
          </p>
          <p className="mb-3">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus id lacinia
            mauris, ac commodo enim. Fusce ut consequat odio. In auctor consequat eros, nec efficitur nunc maximus vel.
            Quisque eu fringilla orci. Duis nec ipsum vitae ex commodo viverra nec eget turpis.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="mb-3">
            Our mission is to provide high-quality products and exceptional service to our customers. We strive to exceed
            customer expectations by offering a wide selection of products, fast shipping, and responsive customer
            support.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sem nec purus dignissim fermentum nec sit amet
            nunc. Nam aliquam vestibulum metus, eget iaculis ex ultrices ut. In euismod consequat sapien, nec feugiat
            enim venenatis nec. Cras euismod tristique orci nec ullamcorper.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUs
