import React, {useState} from 'react'
import WhoWeAre from "../components/who_we_are/who_we_are";
import teens from "../images/group_teen.jpg";
import elderly from "../images/elderly1.jpg";
import Section from "../components/Section"


const About = () => {

  return (
    <div className="mt-20 min-h-[40vh] ">
      <div className="py-5">
        <h2 className="text-[--dark-blue] text-4xl text-center font-medium">The Founder and The Dream</h2>
      </div>
        {/* <WhatWeDo/>  */}
        {/* <AboutUs/> */}
        <WhoWeAre/>
        <div className="grid mt-16">
          <Section title="Vision" above="About us..." image={elderly}>
              Our vision is a caring community where children and the elderly thrive.
              We envision a society that provides support, opportunities, and respect to ensure their well-being, 
              happiness, and active participation in community life.
          </Section>

          <Section title="Mission" above="What we do..." image={teens}>
          At Haven Hands, our mission is to improve the lives of children and the elderly in our community. 
          We are committed to providing essential support, care, and resources to ensure their well-being 
          and happiness. Through our programs and initiatives, we strive to create a nurturing environment, 
          promote education, and foster a sense of belonging, enabling them to lead fulfilling lives.
          </Section>
        </div>      
    </div>
  )
}

export default About