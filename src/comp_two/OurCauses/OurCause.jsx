import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {causes} from "../data";
import SectionHead from "../../components/SectionHead";
import {GoTriangleRight} from 'react-icons//go'

const OurCause = () => {
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
                <div className="max-h-[10rem] overflow-hidden">
                  <LazyLoadImage effect="blur" className="hover:scale-105 transition-transform duration-1000 object-fit" src={image} alt={title} />
                </div>
                <h4 className="text-[--dark-blue] hover:text-[--bright-cyan] font-bold text-lg pt-5 pb-3"><a href="#">{title}</a></h4>
                <small className="text-[--grayish-blue] text_truncate">{content}</small>
              </div>
            )
          })}
        </article>
      </div>
        
    </section>
  )
}

export default OurCause