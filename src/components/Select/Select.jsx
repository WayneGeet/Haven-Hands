import Goals from "../../UI/Goals";
import Values from "../../UI/Values";
import Mission from "../../UI/Mission";
import AboutUs from "../../UI/AboutUs";
import {motion, variants} from "framer-motion"

const Select = ({value}) => {
    const variants = {
        hidden:{x:"100vw", opacity:0},
        visible:{opacity:1, x:0,
        transition:{type:"spring", duration:0.4, stiffness:200}}
    }
    
    const titles = ["About Us", "Our Mission", "Our Goals", "Our Values"]
    function handleSelected(){
    switch(value){
        case 1:
            return (
            <div className="">
                <div className="flex items-center">
                    <motion.h3
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="relative -translate-y-10 justify-center font-semibold
                     text-lg bg-white px-4 py-2 text-[#0a1828] text-center">{titles[0]}</motion.h3>
                </div>
                <AboutUs/>
            </div>
            )
        case 2:
            return (
            <div className="">
                <div className="flex items-center">
                    <motion.h3
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="relative -translate-y-10 justify-center font-semibold
                     text-lg bg-white px-4 py-2 text-[#0a1828] text-center">{titles[1]}</motion.h3>
                </div>  
                <Mission/>
            </div>)
        case 3:
            return (
                <div className="">
                <div className="flex items-center">
                    <motion.h3
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="relative -translate-y-10 justify-center font-semibold
                     text-lg bg-white px-4 py-2 text-[#0a1828] text-center">{titles[2]}</motion.h3>
                </div>
                <AboutUs/>
            </div>
                )
        case 4:
            return (
                <div className="">
                <div className="flex items-center">
                    <motion.h3
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="relative -translate-y-10 justify-center font-semibold
                     text-lg bg-white px-4 py-2 text-[#0a1828] text-center">{titles[3]}</motion.h3>
                </div>
                <Values/>
            </div>
                )
      
    }
    }
  return (
    <div>
        {handleSelected()}
    </div>
  )
}

export default Select