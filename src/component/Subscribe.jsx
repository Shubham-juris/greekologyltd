import React from "react";
const Subscribe = () => {
  return (
    <>
      {/* Subscribe Section */}
      <section
        className="text-white py-20 px-4 md:px-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('')",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe</h2>
          <p className="mb-6 text-lg">
            Sign up to hear from us about specials, sales, and events.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-2/3 px-4 py-3 rounded-md text-gray-800 focus:outline-none border border-black"
            />
            <button className="bg-blue-900 hover:bg-blue-800 transition px-6 py-3 rounded-md font-semibold">
              Sign up
            </button>
          </div>
        </div>
      </section>
      {/* Footer Bottom */}
      <footer className="bg-white text-center py-6 text-sm text-gray-600">
        <p className="mb-2">
          Copyright © 2025 Greekology - All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-blue-700">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-700">
            Terms and Conditions
          </a>
        </div>
      </footer>
    </>
  );
};
export default Subscribe;
