import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../src/assets/Logo/Logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
  ];

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

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            className={`cursor-pointer hover:text-blue-600 relative ${
              location.pathname === item.path ? "text-blue-600 font-semibold" : ""
            }`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250, damping: 10 }}
          >
            <Link to={item.path}>
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute bottom-[-6px] left-0 w-full h-1 bg-blue-600 rounded-full"></span>
              )}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Desktop Call Button */}
      <div className="hidden sm:flex items-center">
        <a
          href="tel:+17802344167"
          className="flex items-center space-x-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          <Phone size={16} />
          <span>+1 (780) 234-4167</span>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
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
                className={`hover:text-blue-600 cursor-pointer ${
                  location.pathname === item.path ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}

            {/* Mobile Call Button */}
            <div className="pt-4">
              <a
                href="tel:+17802344167"
                className="flex justify-center items-center space-x-2 w-full bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                <Phone size={16} />
                <span>+1 (780) 234-4167</span>
              </a>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
