import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../src/assets/Logo/Logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Home", "Shop", "About", "Contact", "Blog"];

  return (
    <motion.nav
      className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Logo & Brand */}
      <div className="flex items-center">
        <motion.img
          src={logo}
          alt="Greekology Logo"
          className="h-10 w-auto mr-4 rounded-full"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 250, damping: 10 }}
        />
        <div className="text-2xl font-semibold text-blue-800">Greekology</div>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
        {navItems.map((item, index) => (
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

      {/* Contact (text only) */}
      <div className="hidden sm:flex items-center space-x-4 text-sm text-blue-700">
        <span className="hidden sm:inline">+1 (780) 234-4167</span>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-[70px] left-0 right-0 bg-white shadow-lg px-6 py-4 flex flex-col space-y-4 md:hidden text-gray-700"
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </li>
            ))}
            <div className="flex flex-col pt-2 text-sm text-blue-700">
              <span>+1 (780) 234-4167</span>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
