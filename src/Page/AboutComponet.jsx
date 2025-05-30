import Footer from "../component/Footer";
import FooterComponent from "../component/FooterComponent";
import Navigation from "../component/Navigation";
import React from "react";

const AboutComponent = () => {
  return (
    <>
      <Navigation />
      <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center mt-8">
            About Greekology
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 mt-15">
            At <span className="font-semibold text-blue-600">Greekology</span>, we
            are committed to guiding students and professionals towards their
            international education and career dreams. With years of experience
            in visa consulting and global university placements, we provide
            expert advice and personalized support at every step.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower students and professionals by simplifying the global
                mobility process. We aim to bridge the gap between aspiration
                and opportunity by offering transparent, trustworthy, and expert
                guidance.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Why Choose Us
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Expert consultants with 10+ years of experience</li>
                <li>Partnerships with 100+ international universities</li>
                <li>Proven visa success rate</li>
                <li>Customized counseling sessions</li>
                <li>Post-arrival support and community building</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-blue-700 mb-2">
              Let’s Achieve Your Dream Together
            </h4>
            <p className="text-gray-700">
              Whether you're planning to study abroad, explore work
              opportunities, or need visa assistance, Greekology is your trusted
              partner throughout the journey.
            </p>
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
};

export default AboutComponent;
