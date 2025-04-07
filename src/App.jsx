import "./App.css";
import About from "./component/About";
import Appointments from "./component/Appointments";
import ContectSection from "./component/ContectSection";
import Contectus from "./component/Contectus";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Product from "./component/Product";
import Subscribe from "./component/Subscribe";
import Testimonials from "./component/Testimonials";
// import Home from "./Page/Home";

function App() {
  return (
    <>
      {/* <Home /> */}
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
}

export default App;
