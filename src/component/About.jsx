import React from "react";
import it from "../assets/itPartner/itPartner.jpg";
const About = () => {

return(
    <>
          {/* About Section */}
          <section className="py-16 bg-white px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl text-center text-blue-900 font-semibold mb-8 relative">
          <span className="inline-block border-t border-b border-blue-500 px-4 py-2">
            About Greekology - Your IT Partner
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={it}
              alt="About Greekology"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At Greekology, we are dedicated to providing top-notch IT services
              tailored to your business needs. Our team of experts excels in
              creating secure IT systems that ensure your data is always
              protected.
            </p>
          </div>
        </div>
      </section>
    </>
)
}
export default About;