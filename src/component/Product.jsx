import React from "react";
import newPro from "../assets/newProduct/newProduct.jpg";
import mostPopular from "../assets/mostPopular/mostPopular.jpg";
import bestValue from "../assets/newProducts/newProduct.jpg";
import { motion } from "framer-motion";

const Product = () => {
  const sectionVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const headingVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 } },
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.4 } },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <>
      {/* Product Highlights Section */}
      <motion.section
        className="bg-gray-100 py-16 px-4 md:px-20 "
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div className="relative group" variants={imageVariants} whileHover="hover">
            <img
              src={newPro}
              alt="Most Popular"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <motion.div
              className="absolute inset-0  bg-opacity-10 flex items-center justify-center rounded-lg"
              variants={overlayVariants}
            >
              <h3 className="text-white text-2xl font-semibold">Most Popular</h3>
            </motion.div>
          </motion.div>

          <motion.div className="relative group" variants={imageVariants} whileHover="hover">
            <img
              src={mostPopular}
              alt="Most Popular"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <motion.div
              className="absolute inset-0  bg-opacity-40 flex items-center justify-center rounded-lg"
              variants={overlayVariants}
            >
              <h3 className="text-white text-2xl font-semibold">Best Category</h3>
            </motion.div>
          </motion.div>

          <motion.div className="relative group" variants={imageVariants} whileHover="hover">
            <img
              src={bestValue}
              alt="Best Value"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <motion.div
              className="absolute inset-0  bg-opacity-40 flex items-center justify-center rounded-lg"
              variants={overlayVariants}
            >
              <h3 className="text-white text-2xl font-semibold">Best Value</h3>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Discover Section */}
      <motion.section
        className="bg-white py-16 px-4 md:px-20 text-center"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6"
          variants={headingVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Discover{" "}
          <span className="text-blue-700">
            the Power of Greekology Software Solutions
          </span>
        </motion.h2>
        <motion.p
          className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          At Greekology, we understand that every business has unique needs and
          challenges. That’s why we offer a wide range of software solutions
          designed to help you streamline your operations, increase efficiency,
          and drive growth. From custom software development to cloud-based
          applications, our team of experts has the expertise and experience to
          help you achieve your goals. Explore our website to learn more about
          our offerings and how we can help your business succeed.
        </motion.p>
        <motion.button
          className="bg-blue-900 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition"
          variants={buttonVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          whileHover="hover"
          whileTap="tap"
        >
          Contact Us
        </motion.button>
      </motion.section>
    </>
  );
};

export default Product;