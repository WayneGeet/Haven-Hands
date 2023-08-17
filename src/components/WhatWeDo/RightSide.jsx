import React from 'react';
import {motion} from "framer-motion";
import {slideVariant} from "../../others/animation";
import children from "../../images/children.jpg";
import disabled from "../../images/blind_person.jpg";
import elderly from "../../images/elderly1.jpg";
import homeless from "../../images/homeless.jpg";

export const Photo_A = () => {
    return (
      <div className="">
          <div className="min-w-[20rem] min-h-[20rem] max-h-[20rem] w-full h-full overflow-hidden border-t-8 border-orange-400 border-r-8 relative">
              <motion.div 
              variants={slideVariant}
              initial="hidden"
              animate="visible"
              className="bg-orange-400 w-full h-[20rem] absolute top-0 left-0"></motion.div>
              <img className="object-cover hover:scale-125 transition-all duration-800" src={children} alt="" />
          </div>
      </div>
    )
  }
 export const Photo_B = () => {
    return (
      <div
      className="">
          <div className="min-w-[20rem] min-h-[20rem] max-h-[20rem] w-full h-full overflow-hidden border-t-8 border-orange-400 border-r-8 relative">
              <motion.div 
              variants={slideVariant}
              initial="hidden"
              animate="visible"
              className="bg-orange-400 w-full h-[20rem] absolute top-0 left-0"></motion.div>
              <img className="object-cover hover:scale-125 transition-all duration-800" src={elderly} alt="" />
          </div>
      </div>
    )
  }

export const Photo_C = () => {
  return (
    <div
    className="">
        <div className="min-w-[20rem] min-h-[20rem] max-h-[20rem] w-full h-full overflow-hidden border-t-8 border-orange-400 border-r-8 relative">
            <motion.div 
            variants={slideVariant}
            initial="hidden"
            animate="visible"
            className="bg-orange-400 w-full h-[20rem] absolute top-0 left-0"></motion.div>
            <img className="object-cover hover:scale-125 transition-all duration-800" src={disabled} alt="" />
        </div>
    </div>
  )
}
export const Photo_D = () => {
  return (
    <div
    className="">
        <div className="min-w-[20rem] min-h-[20rem] max-h-[20rem] w-full h-full overflow-hidden border-t-8 border-orange-400 border-r-8 relative">
            <motion.div 
            variants={slideVariant}
            initial="hidden"
            animate="visible"
            className="bg-orange-400 w-full h-[20rem] absolute top-0 left-0"></motion.div>
            <img className="object-cover hover:scale-125 transition-all duration-1000" src={homeless} alt="" />
        </div>
    </div>
  )
}



