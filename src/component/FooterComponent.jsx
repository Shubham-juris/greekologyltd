import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {
  FaXTwitter
} from "react-icons/fa6";
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
        <div className="col-md-4 mb-3 mb-md-0">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="d-flex justify-content-center gap-4 text-xl">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/Greekology01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover-opacity"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
        
            {/* Instagram */}
            <a
              href="https://www.instagram.com/greekology_321/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover-opacity"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
        
            {/* X (Twitter) */}
            <a
              href="https://x.com/Greekology60715"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover-opacity"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={24} />
            </a>
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
