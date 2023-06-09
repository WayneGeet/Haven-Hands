import React from 'react';
import Hero from "../components/Hero/Hero";
import About from "./About";
import Blogs from "./Blogs";
import NewsLetter from "../components/NewsLetter/NewsLetter"
const Home = () => {
  return (
    <div  className="">
      <Hero/> 
      <About/>
      <Blogs/>
      <NewsLetter/>
      
    </div>
  )
}

export default Home