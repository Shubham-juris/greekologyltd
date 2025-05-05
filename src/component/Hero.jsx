import React from "react";
import Navigation from "./Navigation";
import bgImage from "../assets/home/Bg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const heroVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const textVariants = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.6,
      },
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="relative w-full h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", 
      }}
      variants={heroVariants}
      initial="initial"
      animate="animate"
    >
   
      <Navigation />

     
      <div className="flex items-center justify-center px-4 sm:px-6 min-h-[calc(100vh-80px)] pt-24 text-white text-center relative z-10">
        <motion.div
          className="p-6 sm:p-10 rounded-3xl w-full max-w-3xl"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Empowering Your Business with Reliable IT Solutions
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-lg mx-auto">
            Secure IT systems tailored for your business success. Let us help you navigate the digital world with confidence.
          </p>
          <motion.button
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition"
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

      
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black/30 pointer-events-none" 
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      />
    </motion.div>
  );
};

export default Hero;
