import React from "react";
import { motion } from "framer-motion";

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
    hover: { scale: 1.1, color: "#6366f1" }, // Tailwind blue-500
    tap: { scale: 0.9 },
  };

  return (
    <>
      {/* Subscribe Section */}
      <motion.section
        className="text-white py-20 px-4 md:px-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/futuristic-tec…uit-line-background-web-innovation_1017-53927.jpg')",
        }}
        variants={subscribeVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            variants={headingVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Subscribe
          </motion.h2>
          <motion.p
            className="mb-6 text-lg"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, delay: 0.2 }}
          >
            Sign up to hear from us about specials, sales, and events.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.span
              className="mb-6 text-lg"
              variants={inputVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, delay: 0.4 }}
            >
              Email
            </motion.span>
            <motion.input
              type="email"
              placeholder="Email"
              className="w-full sm:w-2/3 px-4 py-3 rounded-md text-gray-800 focus:outline-none border border-white "
              variants={inputVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, delay: 0.6 }}
            />
            <motion.button
              className="bg-blue-900 hover:bg-blue-800 transition px-6 py-3 rounded-md font-semibold"
              variants={buttonVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, delay: 0.8 }}
              whileHover="hover"
              whileTap="tap"
            >
              Sign up
            </motion.button>
          </div>
        </div>
      </motion.section>
      {/* Footer Bottom */}
      <motion.footer
        className="bg-white text-center py-6 text-sm text-gray-600"
        variants={footerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.p className="mb-2" variants={textVariants} initial="initial" animate="animate">
          Copyright © 2025 Greekology - All Rights Reserved.
        </motion.p>
        <div className="flex justify-center space-x-6 mb-4">
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