import React, {useState} from 'react';
import {faqs} from "../others/data";
import FAQ from "../components/FAQ";
import SectionHead from '../components/SectionHead';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  return (
    <section>
        <div className="min-h-[80vh] container">
            <div className="">
                <SectionHead title="FAQs"/>
                <article className="grid grid-cols-2 gap-x-5 gap-y-10 grid-auto-rows-minmax">
                  {faqs?.map(({question, answer, id}) => <FAQ answer={answer} question={question}
                   isActive={id === activeIndex} onShow={() => setActiveIndex(id)}  />
                )}
                </article>
                
                
            </div>
        </div>
    </section>
  )
}

export default FAQs