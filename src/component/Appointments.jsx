import React from "react";
import ITSolutions from "../assets/itSolutions/itSolutions.jpg";
import { motion } from "framer-motion";

const Appointments = () => {
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

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.4 } },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const welcomeVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut", delay: 0.3 } },
  };

  const transformHeadingVariants = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const transformTextVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 } },
  };

  return (
    <>
      {/* Appointments & Welcome Section */}
      <motion.section
        className="bg-gray-100 py-16 px-4 md:px-20"
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
            Online Appointments
          </span>
        </motion.h2>
        <motion.div
          className="text-center mb-12"
          variants={welcomeVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gray-200 text-gray-700 px-6 py-3 rounded shadow">
            New services are coming soon!
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="w-full md:w-1/2"
            variants={imageVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <img
              src={ITSolutions}
              alt="Digital Services"
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
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Welcome to Greekology - Your IT Solutions Partner
            </h3>
            <p className="text-gray-700 mb-6">
              At Greekology, we provide all IT services for your business. Our
              expertise lies in delivering secure IT systems and solutions
              tailored to your needs. Explore our offerings and discover how we
              can help enhance your business’s technology.
            </p>
            <motion.button
              className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900 transition"
              variants={buttonVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover="hover"
              whileTap="tap"
            >
              Pay Now
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Transforming Business Section */}
      <motion.section
        className="bg-white py-16 px-4 md:px-20 text-center"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-xl md:text-2xl text-blue-800 font-semibold mb-4"
          variants={transformHeadingVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Transforming Businesses with Greekology
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-6"
          variants={transformTextVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          We are on a mission to transform businesses with our cutting-edge
          software solutions. Our team of skilled professionals is committed to
          delivering exceptional results and helping you stay ahead of the
          competition.
        </motion.p>
        <motion.button
          className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
          variants={buttonVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          whileHover="hover"
          whileTap="tap"
        >
          Find out more
        </motion.button>
      </motion.section>
    </>
  );
};

export default Appointments;