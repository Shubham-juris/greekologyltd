import React from "react";
import background from "../assets/BG/DiscoverImg.jpg";
import { motion } from "framer-motion";

const Testimonials = () => {
  const sectionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
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
      className="relative py-20 text-white text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
      variants={sectionVariants}
      initial="initial"
      animate="animate"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50  z-0"></div>

      <div className="container mx-auto px-6 sm:px-12 relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 leading-tight text-shadow-lg"
          variants={headingVariants}
          initial="initial"
          animate="animate"
        >
          Discover What Our Clients Say About Greekology!
        </motion.h2>

        {/* Review Boxes */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={reviewBoxVariants}
          initial="initial"
          animate="animate"
        >
          {/* Review 1 */}
          <motion.div
            className="p-8 rounded-lg shadow-xl bg-white text-black transform transition-all hover:scale-105 hover:shadow-2xl"
            variants={reviewBoxVariants}
            initial="initial"
            animate="animate"
          >
            <p className="text-lg sm:text-xl font-light">
              "Greekology has completely transformed our understanding of Greek culture. The depth of knowledge shared is remarkable!"
            </p>
            <p className="mt-4 font-bold text-gray-700">– Client 1</p>
          </motion.div>

          {/* Review 2 */}
          <motion.div
            className="p-8 rounded-lg shadow-xl bg-white text-black transform transition-all hover:scale-105 hover:shadow-2xl"
            variants={reviewBoxVariants}
            initial="initial"
            animate="animate"
          >
            <p className="text-lg sm:text-xl font-light">
              "A truly unique experience! The insights we gained were both enriching and engaging. Highly recommend!"
            </p>
            <p className="mt-4 font-bold text-gray-700">– Client 2</p>
          </motion.div>

          {/* Review 3 */}
          <motion.div
            className="p-8 rounded-lg shadow-xl bg-white text-black transform transition-all hover:scale-105 hover:shadow-2xl"
            variants={reviewBoxVariants}
            initial="initial"
            animate="animate"
          >
            <p className="text-lg sm:text-xl font-light">
              "An exceptional journey into Greek history. The team is passionate and knowledgeable. Can't wait to be a part of the next event!"
            </p>
            <p className="mt-4 font-bold text-gray-700">– Client 3</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
