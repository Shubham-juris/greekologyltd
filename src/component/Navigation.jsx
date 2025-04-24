import React from "react";
 import { motion } from "framer-motion";
import logo from "../../src/assets/home/logo.png"
 const Navigation = () => {
  return (
  <motion.nav
  className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  >
  <div className="flex items-center">
  {/* Logo Placeholder - Replace with your image URL */}
  <motion.img
  src={logo}
  alt="Logo"
  className="h-10 w-auto mr-4" // Adjust size as needed
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 250, damping: 10 }}
  />
  <div className="text-2xl font-semibold text-blue-800">Greekology</div>
  </div>
  <ul className="hidden md:flex space-x-6 text-gray-700">
  <motion.li
  className="hover:text-blue-600 cursor-pointer"
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 250, damping: 10 }}
  >

  </motion.li>
  <motion.li
  className="hover:text-blue-600 cursor-pointer"
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 250, damping: 10 }}
  >

  </motion.li>
  <motion.li
  className="hover:text-blue-600 cursor-pointer"
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 250, damping: 10 }}
  >

  </motion.li>
  <motion.li
  className="hover:text-blue-600 cursor-pointer"
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 250, damping: 10 }}
  >

  </motion.li>
  <motion.li
  className="hover:text-blue-600 cursor-pointer"
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 250, damping: 10 }}
  >

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