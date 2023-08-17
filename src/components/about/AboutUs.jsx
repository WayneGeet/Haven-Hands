import React from 'react'
import SectionHead from "../SectionHead";
import {testimonials} from "../../others/data";

const AboutUs = () => {
  return (
    <section className="">
        <SectionHead title="About Us"/>
        <section className="container grid grid-cols-4 gap-10 px-28 ">
            {testimonials.map(({image, name, comment}, i) => {
                return(
                    <div className="flex flex-col items-start gap-2">
                        <div className="overflow-hidden">
                            <img src={image} alt={name} />
                        </div>
                        <small>{name}</small>
                        <p>{comment}</p>
                    </div>
                )
            })}
        </section>
    </section>
  )
}

export default AboutUs