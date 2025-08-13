import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import AboutComponet from "./Page/AboutComponet";
import ContactComponents from "./Page/ContactComponents";
import Services from "./Page/Sarvices"; // You can rename file to Services.jsx for clarity

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutComponet />} />
      <Route path="/contact" element={<ContactComponents />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default AppRouter;
