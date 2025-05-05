import React from "react";
import Navigation from "./Navigation";
import bgImage from "../assets/home/Bg.jpg";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Navigation />

      <div className="flex items-center justify-center px-4 sm:px-6 min-h-[calc(100vh-80px)] pt-24 text-white text-center relative z-10">
        <div className="p-6 sm:p-10 rounded-3xl w-full max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Empowering Your Business with Reliable IT Solutions
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-lg mx-auto">
            Secure IT systems tailored for your business success. Let us help you navigate the digital world with confidence.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition">
            Get Started
          </button>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/30 pointer-events-none" />
    </div>
  );
};

export default Hero;
