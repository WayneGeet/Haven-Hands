import React from 'react';
import Hero from "../components/Hero/Hero";
import About from "./About";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Testimonials from "../components/Testimonials/Testimonial";
import SupportUs from "../components/Support/SupportUs";
import FAQs from '../pages/FAQs';
import Footer from "../components/Footer/Footer";
// New ones
import Help from "../comp_two/Help/Help";
import Info from "../comp_two/Info";
import Who from "../comp_two/Who/Who";
import OurCause from "../comp_two/OurCauses/OurCause"
import What from "../comp_two/What/What"
const Home = () => {
  return (
    <div  className="mx-auto">
      <Hero/> 
      <Help/>
      <Info/>
      <Who/>
      <What/>
      <OurCause/>
      {/* <About/> */}
      {/* <SupportUs/> */}
      {/* <Testimonials/> */}
      {/* <FAQs/>       */}
      <Footer/>
      {/* <Blogs/>
      <NewsLetter/> */}
      
    </div>
  )
}

export default Home