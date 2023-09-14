import React, {useState} from 'react'
import WhoWeAre from "../components/who_we_are/who_we_are";
import teens from "../images/group_teen.jpg";
import elderly from "../images/elderly1.jpg";
import Section from "../components/Section";
import children from "../images/kids_sitting.jpg";
import Footer from "../components/Footer/Footer"


const About = () => {

  return (
    <div className="min-h-[40vh] ">
      <section className="w-full min-h-[90vh] text-center relative h-[90vh] overflow-hidden">
        <h2 className=" font-extrabold text-5xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 
        -translate-y-1/2 p-10 pointer-events-none bg-black bg-opacity-40">Who We Are</h2>
        <img className="w-full object-cover" src={children} alt="kids sitting" />
      </section>
      <div className="py-5">
        <h2 className="text-[--dark-blue] text-4xl text-center font-medium">The Founder and The Dream</h2>
      </div>
        {/* <WhatWeDo/>  */}
        {/* <AboutUs/> */}
        <WhoWeAre/>
        <div className="container grid mt-16">
          <Section title="Vision" above="About us..." image={elderly}>
          Our vision is a world where every person, especially those facing adversity, can 
          look forward to a future filled with hope, dignity, and the promise of a better tomorrow.
           We envision empowered communities that work together to create positive change, one step at a time.
          </Section>

          <Section title="Mission" above="What we do..." image={teens}>
          Our mission is to improve the welfare of persons with disabilities, promote access to quality education
           and healthcare services, uphold human rights, and alleviate poverty. We believe that by addressing these 
           fundamental aspects of well-being, we can break down barriers and create a more inclusive and equitable society.
          </Section>
        </div>     
        <Footer/> 
    </div>
  )
}

export default About