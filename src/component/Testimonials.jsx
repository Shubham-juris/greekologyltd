import React from "react";
import background from "../assets/BG/background.jpg";
import { motion } from "framer-motion";

const Testimonials = () => {
  const sectionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const headingVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const reviewBoxVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.4 } },
  };

  return (
    <motion.section
      className="py-20 text-white text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
      variants={sectionVariants}
      initial="initial"
      animate="animate"
    >
      <div className=" py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-6"
          variants={headingVariants}
          initial="initial"
          animate="animate"
        >
          Discover What Our Clients Say About Greekology!
        </motion.h2>
        <motion.div
          className="bg-black inline-block px-8 py-4 rounded-md"
          variants={reviewBoxVariants}
          initial="initial"
          animate="animate"
        >
          <p className="text-lg">Reviews coming soon!</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;