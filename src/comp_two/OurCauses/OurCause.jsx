import {useState} from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {causes} from "../data";
import SectionHead from "../../components/SectionHead";
import {GoTriangleRight} from 'react-icons//go'


const OurCause = () => {
  const [reveal, setReveal] = useState(false)
  return (
    <section className="bg-white py-10">
      <div className="container">
        <div className="flex justify-start items-center border-b border-gray-200 pb-2">
          <SectionHead title="Cause List" icon={<GoTriangleRight size={24}/>}/>
          <p><a className="text-[--bright-cyan]" href="#"> / see more causes</a></p>
        </div>

        <article className="py-7 md:grid md:grid-cols-4 md:gap-4 flex flex-col px-3">
          {causes?.map(({image, content, title}, i) => {
            return(
              <div key={i} className="">
                <div  className="max-h-[20rem] aspect-video md:aspect-video overflow-hidden">
                  <LazyLoadImage effect="blur" className="object-cover aspect-video md:aspect-video w-full" src={image} alt={title} />
                </div>
                <h4 onClick={()=> setReveal(!reveal)} className="text-[--dark-blue] hover:text-[--bright-cyan] font-bold text-lg pt-5 pb-3">{title}</h4>
                <small className={`text-[--grayish-blue] text-base ${!reveal ? "text_truncate" : ""} `}>{content}</small>
              </div>
            )
          })}
        </article>
      </div>
        
    </section>
  )
}

export default OurCause