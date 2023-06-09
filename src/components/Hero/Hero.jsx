import {useState} from "react";
import {motion} from "framer-motion";
import Card from "../Card/Card";
import Button from "../Buttons/Button";
import {h1Animate, pAnimate, containerVariants, cardVariants, cardWrapperVariants} from "../../animation"

import "./Hero.css";
const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = ()=>{
        setIsHovered(prev => !prev)
    }

    // colors - FDE74C - maize
    // teal - 178582
  return (
    <div className="bg-[#178582] pt-12">

        {/* Container/parent div */}
        <motion.main
        initial="previously"
        animate="now"
        variants={containerVariants}
        className="flex flex-col gap-5 px-10 md:px-20 md:max-w-[1200px] md:mx-auto 
        md:min-h-screen md:pt-16 md:grid md:grid-cols-2 "> 

         {/* Right side */}
            <div className="md:flex md:flex-col md:items-start">
                {/* Animation of H1 */}
                <motion.h3 variants={h1Animate} className=" text-base text-[#e9d648]">#mission</motion.h3>
                <motion.h1  
                variants={h1Animate}
                className="text-white font-semibold text-[1.8rem] md:text-[2.8rem] md:text-left md:leading-snug ">
                    All children deserve <span className="text-[#FDE74C]">equal</span> and fair opportunities.
                </motion.h1>
                <div className="md:mt-5 md:flex md:items-start md:w-full md:gap-10 md:pr-24">
                    <motion.p
                    variants={pAnimate}
                    className="text-gray-300 py-5 text-left md:text-justify md:text-[1rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reiciendis 
                        debitis error quam sed velit sunt! Voluptatem consequatur expedita.
                    </motion.p>
                </div>
        {/* Button */}
                <div className="flex justify-between md:gap-20 md:mt-12 md:z-50 md:items-center ">
                    <Button color={"bg-[#fde74c]"} handleEnter={handleHover} handleLeave = {handleHover} px={"px-8"} py={"py-2"} bg={"bg-[#0A1828]"}>Donate</Button>
                    <Button color={"bg-[#fde74c]"} handleEnter={handleHover} handleLeave = {handleHover} px={"px-8"} py={"py-2"} bg={"bg-transparent"} border={"border"} >Learn More</Button>
                </div>
            </div>

        {/* Left side */}
            <div
            className={`${isHovered ? "scale-105" : "scale-100"} bgImage relative transition-all duration-1000`}>
                <div className={`backdrop-grayscale absolute w-2/4 left-7 h-full ${isHovered ? "transition-all duration-1000 opacity-0 mix-blend-normal translate-y-full "  : "transition-all mix-blend-multiply duration-1000 opacity-1"} 
                bg-gradient-to-b from-[#FDE74C] to-transparent -top-24`}></div>

                {/* Cards */}
                <motion.div
                variants={cardWrapperVariants}
                className="absolute top-[5rem] right-5">
                        <motion.div
                        variants={cardVariants}><Card title={100} message={"Taken off the streets"} color={"bg-[#146865]"}/></motion.div>
                        <motion.div
                        variants={cardVariants}><Card title={50} message={"Enrolled in schools"} color={"bg-[#146865]"}/></motion.div>
                        <motion.div
                        variants={cardVariants}><Card title={20} message={"Linked w/ a caregiver"} color={"bg-[#146865]"}/></motion.div>                   
                </motion.div>
            </div>
                
        </motion.main>
        
        <div className="absolute top-20 right-10 bg-yellow-400 opacity-90 blur-3xl mix-blend-screen w-48 h-36 rounded-full"></div>
        <div className="absolute bottom-20 left-10 bg-red-500 opacity-80  blur-3xl mix-blend-screen w-48 h-36 rounded-full"></div>
    </div>
  )
}

export default Hero;
