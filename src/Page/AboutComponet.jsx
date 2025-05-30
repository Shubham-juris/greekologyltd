import React from "react";
import Navigation from "../component/Navigation";
import FooterComponent from "../component/FooterComponent";

const AboutComponent = () => {
  return (
    <>
      <Navigation />
      {/* Hero Banner */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Greekology</h1>
          <p className="text-lg">
            Your trusted partner for global education, immigration, and career
            success.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            About Greekology
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12 text-center">
            At <span className="text-blue-600 font-semibold">Greekology</span>,
            we are dedicated to empowering your global journey. From
            personalized counseling to expert visa guidance and university
            placement, we simplify the international transition with integrity
            and professionalism.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide ethical, transparent, and high-quality consultation
                services that support students and professionals in their
                journey to study, work, and settle abroad with confidence and
                ease.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Why Choose Us
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Expert team with 10+ years of global experience</li>
                <li>Wide network of 100+ international institutions</li>
                <li>Personalized counseling with step-by-step guidance</li>
                <li>High visa approval rates with expert documentation</li>
                <li>Post-arrival support to help you settle confidently</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-10">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                desc: "We operate with honesty, transparency, and accountability.",
              },
              {
                title: "Excellence",
                desc: "We strive to provide top-quality service in every consultation.",
              },
              {
                title: "Empowerment",
                desc: "We equip clients with the knowledge to make informed decisions.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Begin Your Global Journey?
          </h3>
          <p className="mb-6">
            Contact our expert team today and take your first step towards
            studying or working abroad!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <FooterComponent />
    </>
  );
};

export default AboutComponent;
