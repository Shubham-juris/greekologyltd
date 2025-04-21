import React from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.nav
      className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="text-2xl font-semibold text-blue-800">Greekology</div>
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <motion.li
          className="hover:text-blue-600 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 250, damping: 10 }}
        >
          Home
        </motion.li>
        <motion.li
          className="hover:text-blue-600 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 250, damping: 10 }}
        >
          Subscribe
        </motion.li>
        <motion.li
          className="hover:text-blue-600 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 250, damping: 10 }}
        >
          About
        </motion.li>
        <motion.li
          className="hover:text-blue-600 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 250, damping: 10 }}
        >
          Services
        </motion.li>
        <motion.li
          className="hover:text-blue-600 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 250, damping: 10 }}
        >
          Contact Us
        </motion.li>
      </ul>
      <div className="flex items-center space-x-4 text-sm text-blue-700">
        <span className="hidden sm:inline">+1780-234-4167</span>
        <div className="flex space-x-3">
          <motion.span
            className="cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            🔍
          </motion.span>
          <motion.span
            className="cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            🛒
          </motion.span>
          <motion.span
            className="cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            👤
          </motion.span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;