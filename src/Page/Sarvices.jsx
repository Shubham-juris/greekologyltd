import React from "react";
import { Briefcase, Globe, BookOpen, UserCheck } from "lucide-react";
import Navigation from "../component/Navigation";
import FooterComponent from "../component/FooterComponent";

const services = [
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Visa Consultation",
    description:
      "Expert guidance for student, work, and dependent visa applications with high approval rates.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    title: "University Admissions",
    description:
      "Personalized counseling and admission support for top universities in the USA, UK, Canada, and more.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: "Career Counseling",
    description:
      "Professional advice to help students choose the right courses and career paths abroad.",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-blue-600" />,
    title: "Post-Arrival Support",
    description:
      "Assistance with accommodation, part-time jobs, and settling down in your destination country.",
  },
];

const Services = () => {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            Empowering Your Global Journey
          </h1>
          <p className="text-lg">
            Explore our comprehensive services crafted to make your
            international dreams a reality.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            At Greekology, we offer end-to-end support for your study abroad
            journey. Our expert team ensures a smooth process from consultation
            to settlement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Not Sure Where to Start?
          </h3>
          <p className="text-gray-600 mb-8">
            Let our experts guide you step-by-step. Book a free consultation
            today and take the first step towards studying or working abroad.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Book Consultation
          </a>
        </div>
      </section>

      <FooterComponent />
    </>
  );
};

export default Services;
