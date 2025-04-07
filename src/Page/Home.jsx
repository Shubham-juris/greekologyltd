import React from "react";
import About from "../component/About";
import Appointments from "../component/Appointments";
import Contectus from "../component/Contectus";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Product from "../component/Product";
import Subscribe from "../component/Subscribe";
import Testimonials from "../component/Testimonials";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Appointments />
      <Product />
      <Contectus />
      <Footer />
      <Subscribe />
    </>
  );
};
export default Home;
