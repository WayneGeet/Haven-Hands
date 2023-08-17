import React from 'react'
import {FaQuoteRight} from "react-icons/fa"

const Testimonial = ({image, name, comment }) => {
  return (
    <article className="rounded-lg gap-10">
      <div className="min-h-[20rem] h-[20rem] w-full overflow-hidden">
        <img className="object-cover hover:scale-105 duration-700 transition-all blur-sm hover:blur-0 " src={image} alt={name} />
      </div>
      <div className="absolute top-1/2 px-7 py-2 bg-white">
        <h5 className="name_testimonial ">{name}</h5>
      </div>
      
    </article>
  )
}

export default Testimonial
