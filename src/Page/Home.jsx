import React from "react";
import About from "../component/About";
import Appointments from "../component/Appointments";
import Contectus from "../component/Contectus";

import Hero from "../component/Hero";
import Product from "../component/Product";
import Subscribe from "../component/Subscribe";

import FooterComponent from "../component/FooterComponent";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Appointments />
      <Product />
      <Contectus />
      <Subscribe />
      <FooterComponent />
    </>
  );
};
export default Home;
