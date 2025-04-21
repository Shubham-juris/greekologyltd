import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
  };

  const headingVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const formVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const inputVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const buttonVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.3 } },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      className="bg-white py-20 px-4 md:px-20"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl md:text-3xl text-center text-blue-900 font-semibold mb-2 relative"
        variants={headingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <span className="inline-block border-t border-b border-blue-500 px-4 py-2">
          Contact Us
        </span>
      </motion.h2>
      <motion.p
        className="text-center text-gray-600 text-lg mb-10"
        variants={inputVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
      >
        Get in Touch
      </motion.p>

      <motion.form
        className="max-w-2xl mx-auto space-y-6"
        variants={formVariants}
        initial="initial"
        animate="animate"
      >
        <motion.input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          variants={inputVariants}
        />
        <motion.input
          type="email"
          placeholder="Email*"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          variants={inputVariants}
        />
        <motion.textarea
          rows="5"
          placeholder="Tell us about your project"
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          variants={inputVariants}
        ></motion.textarea>

        <motion.div
          className="flex justify-between items-center text-sm text-blue-700"
          variants={inputVariants}
        >
          <label className="cursor-pointer">
            <span className="mr-2">📎 Attach Files</span>
            <input type="file" multiple className="hidden" />
          </label>
          <span className="text-gray-500">Attachments (0)</span>
        </motion.div>

        <motion.div
          className="text-center"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
        >
          <button
            type="submit"
            className="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition"
          >
            Send
          </button>
        </motion.div>
      </motion.form>
    </motion.section>
  );
};

export default ContactUs;