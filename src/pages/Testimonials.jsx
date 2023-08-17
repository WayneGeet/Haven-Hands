import React from 'react';
import Testimonial from "../components/Testimonials/Testimonial";
import {testimonials} from "../others/data";
import SectionHead from "../components/SectionHead";

const Testimonials = () => {
  return (
    <div className="bg-white">
        <div className="container py-10">
            <SectionHead title="Testimonials"/>
            <article className="grid grid-cols-3 gap-14">
                <section className="grid col-span-1 ">
                    <h3 className="text-[--bright-cyan] font-semibold text-xl">The founder's impact has been left on these beautiful people</h3>
                    <p className="text-[--dark-blue]">Gladys Wamuyu has served in Child of Destiny project for two decades. Let these stories inspire you as 
                        they narrate of how they found a mother, a caregiver, a destiny helper, a confider...the list is long. 
                        She has seen lives being formed and dreams getting realized...
                    </p>
                </section>
                <section className="grid grid-cols-4 gap-x-4 gap-y-8 col-span-2">
                    {testimonials?.map(({image, name, comment}) => <Testimonial image={image} name={name} comment={comment}/>)}
                </section>
            </article>
        </div>
    </div>
  )
}

export default Testimonials