import React from "react";
import {
  Server,
  ShieldCheck,
  Code,
  Cloud,
  MonitorSmartphone,
  Database,
  Activity,
  PieChart,
  UserCheck,
  Wrench,
  ChevronDown,
} from "lucide-react";

import Navigation from "../component/Navigation";
import FooterComponent from "../component/FooterComponent";

// Service Cards Data
const services = [
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Custom Software Development",
    description:
      "Tailored software solutions to automate processes and boost business efficiency.",
    features: ["Enterprise-grade apps", "Scalable architecture", "Cross-platform development"],
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-600" />,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and services including AWS, Azure, and Google Cloud.",
    features: ["Cloud migration", "DevOps & CI/CD", "Cloud-native app development"],
  },
  {
    icon: <Server className="w-8 h-8 text-blue-600" />,
    title: "IT Consulting",
    description:
      "Professional IT strategy and planning to align with your business goals.",
    features: ["Digital transformation", "Technology roadmap", "Infrastructure audits"],
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Cybersecurity Services",
    description:
      "Protect your digital assets with robust security audits and threat monitoring.",
    features: ["Vulnerability scanning", "Risk assessment", "Compliance & data protection"],
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-blue-600" />,
    title: "Web & App Development",
    description:
      "Responsive websites and high-performance mobile apps that elevate user experience.",
    features: ["React, Flutter, iOS/Android", "UI/UX design", "SEO-ready"],
  },
  {
    icon: <Database className="w-8 h-8 text-blue-600" />,
    title: "Data Management",
    description:
      "Organize, analyze, and leverage data for business intelligence and insights.",
    features: ["ETL processes", "Big data handling", "Dashboard & reporting"],
  },
  {
    icon: <Activity className="w-8 h-8 text-blue-600" />,
    title: "Network Infrastructure",
    description:
      "Robust networking services to ensure secure and seamless business operations.",
    features: ["LAN/WAN setup", "Firewall", "Remote access"],
  },
  {
    icon: <PieChart className="w-8 h-8 text-blue-600" />,
    title: "IT Analytics",
    description:
      "Turn raw data into actionable insights with advanced analytics solutions.",
    features: ["Business intelligence", "Real-time data", "Forecasting"],
  },
  {
    icon: <UserCheck className="w-8 h-8 text-blue-600" />,
    title: "Dedicated Support",
    description:
      "24/7 technical support to ensure your IT systems run smoothly at all times.",
    features: ["On-call engineers", "SLAs", "Issue tracking"],
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    title: "IT Maintenance",
    description:
      "Routine system maintenance and updates to prevent breakdowns and data loss.",
    features: ["Patch management", "System upgrades", "Proactive alerts"],
  },
];

// FAQ Data
const faqs = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We serve a wide range of industries including healthcare, finance, retail, education, and logistics.",
  },
  {
    question: "Do you provide support after deployment?",
    answer:
      "Yes, we offer full post-deployment support and maintenance as per the agreed service level agreements.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Absolutely. We specialize in seamless integration with existing legacy and modern systems.",
  },
];

// Service Card Component
const ServiceCard = ({ icon, title, description, features }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-left">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-sm mb-4 text-center">{description}</p>
    <ul className="list-disc pl-5 text-sm text-gray-500 space-y-1">
      {features.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Complete IT Solutions</h1>
          <p className="text-lg">
            Empowering your business with reliable and secure technology services.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            At Greekology, we provide end-to-end IT solutions to help businesses grow, scale,
            and stay secure in the digital world.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned */}
      <section className="bg-white py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose Greekology?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Certified Experts</h4>
              <p className="text-gray-600 text-sm">
                Our team consists of certified professionals with deep industry knowledge.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <UserCheck className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Client-First Approach</h4>
              <p className="text-gray-600 text-sm">
                We believe in transparency and always prioritize your business needs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <Code className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Modern Tech Stack</h4>
              <p className="text-gray-600 text-sm">
                We leverage cutting-edge tools and best practices for scalable solutions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <Activity className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-lg text-gray-800 mb-2">24/7 Support</h4>
              <p className="text-gray-600 text-sm">
                Our support team is available round the clock to resolve your issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs - Styled */}
      <section className="bg-gray-100 py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h4 className="flex items-center justify-between font-semibold text-gray-800 text-lg mb-2">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-blue-500" />
                </h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="mb-6">Get in touch with our team and let's build something great together.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <FooterComponent />
    </>
  );
};

export default Services;
