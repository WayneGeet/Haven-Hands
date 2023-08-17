import {useState} from "react";
import {motion} from "framer-motion";
import {Elderly, Children, Disabled, Homeless} from "./LeftSide";
import {Photo_A, Photo_B, Photo_C, Photo_D} from "./RightSide";
import pin from "../../images/pin.svg";
import SectionHead from "../SectionHead";

const Kids = () => {
  const items = ["Children", "Disabled", "Elderly", "Homeless"]
  const [base, setBase] = useState("Children");
  

  const containerVariant = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1
    }
  }
    const [comp, setComp] = useState("Children");
    const leftSide = () => {
        switch (comp) {
          case "Children" :
            return <Children/>
          case "Elderly":
            return <Elderly/>
          case "Disabled":
            return <Disabled/>
          case "Homeless":
            return <Homeless/>
          default:
            break;
        }
    }

    const setImage = () => {
      switch (comp){
        case "Children":
          return <Photo_A/>
        case "Elderly":
          return <Photo_B/>
        case "Disabled":
          return <Photo_C/>
        case "Homeless":
          return <Photo_D/>
      }
    }

    const handleBase = (base) => {
      setBase(base)
      setComp(base)
    }

  return (
    <motion.div 
    variants={containerVariant}
    initial="hidden"
    animate="visible"
    className="hidden bg-white md:relative">
      
      <div className="container ">    
        <SectionHead title="Programs" />
        <div className="w-3/4 mx-auto grid grid-cols-4 items-center gap-10 p-5">
            <div className="first col-span-2">
                {leftSide()}
            </div>
            <ul className="flex flex-col items-center pl-10 gap-2">
              {items.map((item) => {
                return (
                  <ul onClick={() => handleBase(item)} className="flex items-center flex-row-reverse gap-2 w-full justify-end">
                    <li className="text-[--dark-blue] text-lg hover:scale-105 cursor-pointer ">{item}</li>
                    <img className={`${item === base ? "" : "hidden"} w-4 h-4`} src={pin} alt="" />
                  </ul>
                )
              })}
            </ul>
            <div className="">
              {setImage()}
            </div>
            
        </div>
      </div>
    </motion.div>
  )
}

export default Kids;
// It's hard to see it...because I am currently running heavy apps on my machine but it transitions really smoothly
// I have heard to repeat myself with the coding because, framer motion wouldn't work with like me mapping through th