import React from "react";
import background from "../assets/BG/background.jpg"
const Testimonials = () => {
  return (
    <>
      {/* Testimonials Section */}
      <section
        className="py-20 text-white text-center bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${background})`,
        }}
      >
        <div className=" py-20 px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Discover What Our Clients Say About Greekology!
          </h2>
          <div className="bg-black inline-block px-8 py-4 rounded-md">
            <p className="text-lg">Reviews coming soon!</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonials;
