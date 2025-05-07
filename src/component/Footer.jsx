import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  const headingVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const contactInfoVariants = {
    initial: { opacity: 0, x: -30 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const hoursVariants = {
    initial: { opacity: 0, x: 30 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 },
    },
  };

  const listItemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    {/* Google Map Embed for Drayton Valley Location */}
<div className="mt-12">
  <iframe
    title="Trafficology Drayton Valley Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.5863471919986!2d-115.0494549230017!3d52.97262827179845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x539ff4a1f76339f5%3A0x801d27f3349c7b0a!2s5211%2050%20St%2C%20Drayton%20Valley%2C%20AB%20T7A%201C9%2C%20Canada!5e0!3m2!1sen!2sca!4v1715083507585"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg shadow-md"
  />
</div>

    <motion.section
      className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-20 text-center"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
        variants={headingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Questions or Comments?
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-12 max-w-2xl mx-auto text-base md:text-lg"
        variants={headingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        We know that our clients have unique needs. Send us a message and we’ll get back to you shortly.
      </motion.p>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
        {/* Contact Info */}
        <motion.div
          className="text-center lg:text-right max-w-sm"
          variants={contactInfoVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Greekology</h3>
          <p className="text-gray-700">
            5211 50 ST. Drayton Valley,
            <br/>
             Alberta, T7A 1C9 Canada
          </p>
          <a
            href="tel:+17802344167"
            className="text-blue-700 font-semibold mt-3 inline-block hover:underline transition"
          >
            +1 780-234-4167
          </a>
        </motion.div>

        {/* Hours */}
        <motion.div
          className="text-center lg:text-left max-w-sm"
          variants={hoursVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Hours</h3>
          <ul className="text-gray-700 space-y-1 text-base">
            {[
              ["Mon", "09:00 a.m. – 05:00 p.m."],
              ["Tue", "09:00 a.m. – 05:00 p.m."],
              ["Wed", "09:00 a.m. – 05:00 p.m."],
              ["Thu", "09:00 a.m. – 05:00 p.m."],
              ["Fri", "09:00 a.m. – 05:00 p.m."],
              ["Sat", "Closed"],
              ["Sun", "Closed"],
            ].map(([day, hours], index) => (
              <motion.li key={day} variants={listItemVariants}>
                <span className="font-medium">{day}</span>{" "}
                <span className={`ml-2 ${hours === "Closed" ? "text-gray-400" : ""}`}>
                  {hours}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Footer;
