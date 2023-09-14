import {useState} from 'react';
import Faq from "./Faq";
import {faqs} from "../data"

import SectionHead from "../../components/SectionHead";
import {GoTriangleRight} from 'react-icons//go'

const Faqs = () => {
    const [isActive, setIsActive] = useState(0)
    const handleClick= (i)=> {
        setIsActive(i)
    }
  return (
    <div className="container">
      <div className="flex justify-start items-center border-b border-gray-200 pb-2">
        <SectionHead title="Frequently Asked Questions" icon={<GoTriangleRight size={24}/>}/>
        {/* <p><a className="text-[--bright-cyan]" href="#"> / see more causes</a></p> */}
      </div>
      <section className="py-20 flex justify-center">
        <article className="grid items-start gap-5">
            {faqs?.map((items, i) => <Faq key={i} que={items.faq} ans={items.answer} isActive={isActive===i} onClick={()=>handleClick(i)}/>)}
        </article>
      </section>
    </div>
    
  )
}

export default Faqs