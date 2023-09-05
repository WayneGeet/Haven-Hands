import {useState} from 'react';
import Faq from "./Faq";
import {faqs} from "../data"



const Faqs = () => {
    const [isActive, setIsActive] = useState(0)
    const handleClick= (i)=> {
        setIsActive(i)
    }
  return (
    <section className="py-20 flex justify-center">
        <article className="grid items-start gap-5">
            {faqs?.map((items, i) => <Faq key={i} que={items.faq} ans={items.answer} isActive={isActive===i} onClick={()=>handleClick(i)}/>)}
        </article>
    </section>
  )
}

export default Faqs