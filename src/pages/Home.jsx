import React from 'react';
import Hero from "../components/Hero/Hero";
import About from "./About";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import FAQs from '../comp_two/faq/Faqs';
import Footer from "../components/Footer/Footer";
// New ones
import Help from "../comp_two/Help/Help";
import Info from "../comp_two/Info";
import Who from "../comp_two/Who/Who";
import OurCause from "../comp_two/OurCauses/OurCause"
import What from "../comp_two/What/What";
import Banner from "../comp_two/Banner/Banner"
const Home = () => {
  return (
    <div  className="mx-auto">
      <Hero/> 
      <Help/>
      <Info/>
      <Who/>
      <What/>
      <Banner/>
      <OurCause/>
      {/* <About/> */}
      {/* <SupportUs/> */}
      {/* <Testimonials/> */}
      <FAQs/>      
      <Footer/>
      {/* <Blogs/>
      <NewsLetter/> */}
      
    </div>
  )
}

export default Home