import React from "react";
const Navigation = () => {
  return (
    <>
            {/* Top Navigation */}
            <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm shadow-md">
          <div className="text-2xl font-semibold text-blue-800">Greekology</div>
          <ul className="hidden md:flex space-x-6 text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Shop</li>
          </ul>
          <div className="flex items-center space-x-4 text-sm text-blue-700">
            <span className="hidden sm:inline">+1780-234-4167</span>
            <div className="flex space-x-3">
              <span className="cursor-pointer">🔍</span>
              <span className="cursor-pointer">🛒</span>
              <span className="cursor-pointer">👤</span>
            </div>
          </div>
        </nav>
          </>
  )
};
export default Navigation;

