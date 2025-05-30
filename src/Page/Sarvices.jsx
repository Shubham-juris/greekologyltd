import React from "react";
import { Briefcase, Globe, BookOpen, UserCheck } from "lucide-react"; // Optional icon set
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
      <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            At Greekology, we offer end-to-end support for your study abroad
            journey. Our expert team ensures a smooth process from consultation
            to settlement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
};

export default Services;
