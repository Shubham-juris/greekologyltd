import React from "react";
import Navigation from "./Navigation";
import bgImage from "../assets/bgFooter/bgFooter.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const heroVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const textVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" } },
  };

  const buttonVariants = {
    initial: { scale: 0 },
    animate: { scale: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.6 } },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
  
    <motion.div
      className="min-h-screen  bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
      variants={heroVariants}
      initial="initial"
      animate="animate"
    >
      <Navigation />
      {/* Hero Section */}
      <div className="flex items-center justify-center h-[calc(100vh-80px)] text-white text-center px-4">
        <motion.div
          className="bg-blue-900 bg-opacity-80 p-10 rounded-full max-w-xl w-full"
          style={{ backdropFilter: 'blur(10px)' }} // Add a subtle blur to the background
        >
          <motion.h1
            className="text-7xl justify-center mx-auto md:text-4xl font-bold mb-4"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            Empowering Your Business with Reliable IT Solutions
          </motion.h1>
          <motion.p
            className="text-sm md:text-base mb-6"
            variants={textVariants}
            initial="initial"
            animate="animate"
            style={{ delay: 0.1 }} // Slight delay for the paragraph
          >
            Secure IT systems tailored for your business success.
          </motion.p>
          <motion.button
            className="bg-white text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
      {/* Subtle Animated Background Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/10 to-blue-700/30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" } }}
      />
      {/* Subtle Moving Element (Optional) */}
      <motion.div
        className="absolute bottom-10 left-10 w-12 h-12 bg-blue-500 rounded-full opacity-40 pointer-events-none"
        initial={{ x: -50, y: 50 }}
        animate={{ x: 0, y: 0, transition: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" } }}
      />
      <motion.div
        className="absolute top-20 right-20 w-8 h-8 bg-blue-300 rounded-full opacity-50 pointer-events-none"
        initial={{ x: 50, y: -50 }}
        animate={{ x: 0, y: 0, transition: { duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: 0.5 } }}
      />
    </motion.div>
    
  );
};

export default Hero;