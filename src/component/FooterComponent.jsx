import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Greekology</h2>
          <p className="text-sm leading-relaxed">
            Greekology is your trusted IT partner delivering innovative, secure, and scalable technology solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:Greekology16@gmail.com"
                className="hover:text-white"
              >
                geekology16@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+17802344167" className="hover:text-white">
                +1 (780) 234-4167
              </a>
            </li>
            <li>
              Address: 5211 50 ST. Drayton Valley,<br /> Alberta, T7A 1C9 Canada
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://www.facebook.com/p/Greekology-100094470818760/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebookF />
            </a>
            {/* Optional additional icons */}
            {/* 
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a> 
            */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Greekology. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterComponent;
