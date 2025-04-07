import React from "react";
const Contectus = () => {
  return (
    <>
      {/* Contact Us Section */}
      <section className="bg-white py-20 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl text-center text-blue-900 font-semibold mb-2 relative">
          <span className="inline-block border-t border-b border-blue-500 px-4 py-2">
            Contact Us
          </span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-10">Get in Touch</p>

        <form className="max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email*"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="5"
            placeholder="Tell us about your project"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>

          <div className="flex justify-between items-center text-sm text-blue-700">
            <label className="cursor-pointer">
              <span className="mr-2">📎 Attach Files</span>
              <input type="file" multiple className="hidden" />
            </label>
            <span className="text-gray-500">Attachments (0)</span>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
export default Contectus;
