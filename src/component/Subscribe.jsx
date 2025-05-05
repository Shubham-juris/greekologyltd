import React from "react";
import { motion } from "framer-motion";
import BgImg from "../assets/BG/DiscoverImg.jpg";

const Subscribe = () => {
  const subscribeVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
  };

  const headingVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 } },
  };

  const inputVariants = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.4 } },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const footerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: "#6366f1" },
    tap: { scale: 0.9 },
  };

  return (
    <>
      {/* Subscribe Section */}
      <motion.section
        className="relative text-white py-20 px-4 md:px-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImg})` }}
        variants={subscribeVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            variants={headingVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Subscribe
          </motion.h2>
          <motion.p
            className="mb-8 text-lg"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Sign up to hear from us about specials, sales, and events.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-2/3 px-4 py-3 rounded-md text-white placeholder-white bg-transparent border border-white focus:outline-none"
              variants={inputVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            />
            <motion.button
              className="bg-blue-900 hover:bg-blue-800 transition px-6 py-3 rounded-md font-semibold"
              variants={buttonVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover="hover"
              whileTap="tap"
            >
              Sign Up
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-white text-center py-6 text-sm text-gray-600"
        variants={footerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.p className="mb-2" variants={textVariants} initial="initial" animate="animate">
          © 2023 Greekology - All Rights Reserved.
        </motion.p>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="#"
            className="hover:text-blue-700"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Privacy Policy
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-blue-700"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Terms and Conditions
          </motion.a>
        </div>
      </motion.footer>
    </>
  );
};

export default Subscribe;
