import React from "react";
import newPro from "../assets/newProduct/newProduct.jpg";
const Product = () => {
    return(
<>
     {/* Product Highlights Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-20 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group">
            <img
              src={newPro}
              alt="New Products"
              className="w-full rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-2xl font-semibold">
                New Products
              </h3>
            </div>
          </div>

          <div className="relative group">
            <img
              src="/most-popular.jpg"
              alt="Most Popular"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-2xl font-semibold">
                Most Popular
              </h3>
            </div>
          </div>

          <div className="relative group">
            <img
              src="/best-value.jpg"
              alt="Best Value"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-2xl font-semibold">Best Value</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Discover Section */}
      <section className="bg-white py-16 px-4 md:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6">
          Discover{" "}
          <span className="text-blue-700">
            the Power of Greekology Software Solutions
          </span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
          At Greekology, we understand that every business has unique needs and
          challenges. That’s why we offer a wide range of software solutions
          designed to help you streamline your operations, increase efficiency,
          and drive growth. From custom software development to cloud-based
          applications, our team of experts has the expertise and experience to
          help you achieve your goals. Explore our website to learn more about
          our offerings and how we can help your business succeed.
        </p>
        <button className="bg-blue-900 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition">
          Contact Us
        </button>
      </section>
</>
    )
}
export default Product;