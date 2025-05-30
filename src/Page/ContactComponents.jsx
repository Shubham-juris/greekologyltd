import React from "react";
import Navigation from "../component/Navigation";
import FooterComponent from "../component/FooterComponent";

const ContactComponents = () => {
  return (
    <>
      <Navigation />
      <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions about studying abroad, visa processing, or
              admissions? Fill out the form and our experts will get back to
              you.
            </p>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>
            <ul className="text-gray-700 space-y-4">
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:Greekology16@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  Geekology16@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 hover:underline"
                >
                  +1 (780) 234-4167
                </a>
              </li>
              <li>
                <span className="font-medium">Office:</span> 5211 50 ST. Drayton
                Valley,
                <br />
                Alberta, T7A 1C9 Canada
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <div className="max-w-full mx-auto px-4 md:px-10 lg:px-20 mb-16">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=5211%2050%20ST.%20Drayton%20Valley,%20Alberta,%20T7A%201C9%20Canada&output=embed"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="w-full rounded-xl"
        ></iframe>
      </div>

      <FooterComponent />
    </>
  );
};

export default ContactComponents;
