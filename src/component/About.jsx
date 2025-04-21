import React from "react";
import it from "../assets/itPartner/itPartner.jpg";
import { motion } from "framer-motion";

const About = () => {
  const sectionVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const headingVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const textVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 } },
  };

  return (
    <motion.section
      className="py-16 bg-white px-4 md:px-20"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl md:text-3xl text-center text-blue-900 font-semibold mb-8 relative"
        variants={headingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <span className="inline-block border-t border-b border-blue-500 px-4 py-2">
          About Greekology - Your IT Partner
        </span>
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="w-full md:w-1/2"
          variants={imageVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <img
            src={it}
            alt="About Greekology"
            className="w-full rounded-lg shadow-md"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Who We Are
          </h3>
          <p className="text-gray-700 leading-relaxed">
            At Greekology, we are dedicated to providing top-notch IT services
            tailored to your business needs. Our team of experts excels in
            creating secure IT systems that ensure your data is always
            protected.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;