import React from "react";
import { motion } from "framer-motion";
import logoImg from "../assets/footerImage/footerImage.webp";


const Navigation = () => {
  return (
    <motion.nav
      className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Logo & Brand */}
      <div className="flex items-center">
        <motion.img
          src={logoImg}
          alt="Greekology Logo"
          className="h-10 w-auto mr-4 rounded-full"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 250, damping: 10 }}
        />
        <div className="text-2xl font-semibold text-blue-800">Greekology</div>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
        {["Home", "Shop", "About", "Contact", "Blog"].map((item, index) => (
          <motion.li
            key={index}
            className="hover:text-blue-600 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250, damping: 10 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>

      {/* Contact & Icons */}
      <div className="flex items-center space-x-4 text-sm text-blue-700">
        <span className="hidden sm:inline">+1 (780) 234-4167</span>
        <div className="flex space-x-3 text-lg">
          {["🔍", "🛒", "👤"].map((icon, i) => (
            <motion.span
              key={i}
              className="cursor-pointer"
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
