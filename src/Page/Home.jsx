import React from "react";
import it from "../assets/itPartner/itPartner.jpg";
import ITSolutions from "../assets/itSolutions/itSolutions.jpg";
import newProduct from "../assets/newProduct/newProduct.jpg";
const Home = () => {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://www.shutterstock.com/image-photo/mesmerizi…w-dunagiri-elephant-mountains-600nw-541226761.jpg")',
        }}
      >
        {/* Top Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm shadow-md">
          <div className="text-2xl font-semibold text-blue-800">Greekology</div>
          <ul className="hidden md:flex space-x-6 text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Shop</li>
          </ul>
          <div className="flex items-center space-x-4 text-sm text-blue-700">
            <span className="hidden sm:inline">+1780-234-4167</span>
            <div className="flex space-x-3">
              <span className="cursor-pointer">🔍</span>
              <span className="cursor-pointer">🛒</span>
              <span className="cursor-pointer">👤</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex items-center justify-center h-[calc(100vh-80px)] text-white text-center px-4">
          <div className="bg-blue-900 bg-opacity-80 p-10 rounded-full max-w-xl w-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Empowering Your Business with Reliable IT Solutions
            </h1>
            <p className="text-sm md:text-base mb-6">
              Secure IT systems tailored for your business success.
            </p>
            <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* About Section */}
      <section className="py-16 bg-white px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl text-center text-blue-900 font-semibold mb-8 relative">
          <span className="inline-block border-t border-b border-blue-500 px-4 py-2">
            About Greekology - Your IT Partner
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={it}
              alt="About Greekology"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At Greekology, we are dedicated to providing top-notch IT services
              tailored to your business needs. Our team of experts excels in
              creating secure IT systems that ensure your data is always
              protected.
            </p>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section
        className="py-20 text-white text-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQES2lQvYh6RII-5yqPt8pJKRJKn8oaiGJNZw&s")',
        }}
      >
        <div className="bg-black/50 py-20 px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Discover What Our Clients Say About Greekology!
          </h2>
          <div className="bg-black/60 inline-block px-8 py-4 rounded-md">
            <p className="text-lg">Reviews coming soon!</p>
          </div>
        </div>
      </section>
      {/* Appointments & Welcome Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl text-center text-blue-900 font-semibold mb-8 relative">
          <span className="inline-block border-t border-b border-blue-500 px-4 py-2">
            Online Appointments
          </span>
        </h2>
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-200 text-gray-700 px-6 py-3 rounded shadow">
            New services are coming soon!
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={ITSolutions}
              alt="Digital Services"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Welcome to Greekology - Your IT Solutions Partner
            </h3>
            <p className="text-gray-700 mb-6">
              At Greekology, we provide all IT services for your business. Our
              expertise lies in delivering secure IT systems and solutions
              tailored to your needs. Explore our offerings and discover how we
              can help enhance your business’s technology.
            </p>
            <button className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900 transition">
              Pay Now
            </button>
          </div>
        </div>
      </section>
      {/* Transforming Business Section */}
      <section className="bg-white py-16 px-4 md:px-20 text-center">
        <h2 className="text-xl md:text-2xl text-blue-800 font-semibold mb-4">
          Transforming Businesses with Greekology
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          We are on a mission to transform businesses with our cutting-edge
          software solutions. Our team of skilled professionals is committed to
          delivering exceptional results and helping you stay ahead of the
          competition.
        </p>
        <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
          Find out more
        </button>
      </section>
      {/* Product Highlights Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group">
            <img
              src={newProduct}
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

      {/* Contact Us Section */}
      <section className="bg-white py-20 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl text-center text-blue-900 font-semibold mb-2 relative">
          <span className="inline-block border-t border-b border-blue-500 px-4 py-2">
            Contact Us
          </span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-10">Get in Touch</p>

        <form className="max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email*"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="5"
            placeholder="Tell us about your project"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>

          <div className="flex justify-between items-center text-sm text-blue-700">
            <label className="cursor-pointer">
              <span className="mr-2">📎 Attach Files</span>
              <input type="file" multiple className="hidden" />
            </label>
            <span className="text-gray-500">Attachments (0)</span>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition"
            >
              Send
            </button>
          </div>
        </form>
      </section>
      {/* Footer Contact Section */}
      <section className="bg-white py-16 px-4 md:px-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Questions or Comments?
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          We know that our clients have unique needs. Send us a message, and we
          will get back to you soon.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-12">
          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-medium text-blue-900 mb-2 md:text-left">
              Greekology
            </h3>
            <p className="text-gray-700">
              5211 50 ST. Drayton Valley, Alberta, T7A 1C9 Canada
            </p>
            <p className="text-blue-700 font-medium mt-2">+1780-234-4167</p>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-blue-900 mb-2">Hours</h3>
            <ul className="text-gray-700">
              <li>
                Mon <span className="ml-2">09:00 a.m. – 05:00 p.m.</span>
              </li>
              <li>
                <strong>Tue</strong>{" "}
                <span className="ml-2 font-bold">09:00 a.m. – 05:00 p.m.</span>
              </li>
              <li>
                Wed <span className="ml-2">09:00 a.m. – 05:00 p.m.</span>
              </li>
              <li>
                Thu <span className="ml-2">09:00 a.m. – 05:00 p.m.</span>
              </li>
              <li>
                Fri <span className="ml-2">09:00 a.m. – 05:00 p.m.</span>
              </li>
              <li>
                Sat <span className="ml-2 text-gray-500">Closed</span>
              </li>
              <li>
                Sun <span className="ml-2 text-gray-500">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Subscribe Section */}
      <section
        className="text-white py-20 px-4 md:px-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg')",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe</h2>
          <p className="mb-6 text-lg">
            Sign up to hear from us about specials, sales, and events.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-2/3 px-4 py-3 rounded-md text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-900 hover:bg-blue-800 transition px-6 py-3 rounded-md font-semibold">
              Sign up
            </button>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <footer className="bg-white text-center py-6 text-sm text-gray-600">
        <p className="mb-2">
          Copyright © 2025 Greekology - All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-blue-700">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-700">
            Terms and Conditions
          </a>
        </div>
      
      </footer>
    </>
  );
};
export default Home;
