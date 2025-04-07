import React from "react";
import Navigation from "./Navigation";
import bgImage from "../assets/bgFooter/bgFooter.jpg"
const Hero = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:`url(${bgImage})`
      }}
    > 
      <Navigation />
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
  );
};
export default Hero;
