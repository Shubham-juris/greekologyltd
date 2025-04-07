import React from "react";
import ITSolutions from "../assets/itSolutions/itSolutions.jpg";
const Appointments = () => {
    return(
<>
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
</>
    )
}
export default Appointments;