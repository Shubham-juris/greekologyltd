import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
  };

  const headingVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const contactInfoVariants = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const hoursVariants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 } },
  };

  const listItemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <motion.section
      className="bg-white py-16 px-4 md:px-20 text-center"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl font-semibold text-gray-800 mb-4"
        variants={headingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Questions or Comments?
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-10 max-w-xl mx-auto"
        variants={headingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, delay: 0.2 }}
      >
        We know that our clients have unique needs. Send us a message, and we
        will get back to you soon.
      </motion.p>

      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-12">
        {/* Contact Info */}
        <motion.div
          className="text-center md:text-right"
          variants={contactInfoVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-medium text-blue-900 mb-2 md:text-left">
            Greekology
          </h3>
          <p className="text-gray-700">
            5211 50 ST. Drayton Valley, Alberta, T7A 1C9 Canada
          </p>
          <p className="text-blue-700 font-medium mt-2">+1780-234-4167</p>
        </motion.div>

        {/* Hours */}
        <motion.div
          className="text-center md:text-left"
          variants={hoursVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-medium text-blue-900 mb-2">Hours</h3>
          <ul className="text-gray-700">
            <motion.li variants={listItemVariants}>
              Mon <span className="ml-2">09:00 a.m. – 05:00 p.m.</span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              <strong>Tue</strong>{" "}
              <span className="ml-2 font-bold">09:00 a.m. – 05:00 p.m.</span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              Wed <span className="ml-2">09:00 a.m. – 05:00 p.m.</span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              Thu <span className="ml-2">09:00 a.m. – 05:00 p.m.</span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              Fri <span className="ml-2">09:00 a.m. – 05:00 p.m.</span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              Sat <span className="ml-2 text-gray-500">Closed</span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              Sun <span className="ml-2 text-gray-500">Closed</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Footer;