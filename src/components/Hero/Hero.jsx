import {useState} from "react";
import {motion} from "framer-motion";
import Card from "../Card/Card";
import image1 from "../../images/kid_looking.jpg";
import image2 from "../../images/teen2.jpg";
import image3 from "../../images/teen1.jpg";
import image4 from "../../images/kid_goat.jpg";
import {h1Animate, pAnimate, containerVariants, ctaVariants, gridVariants, squareVariants} from "../../others/animation";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import feet from "../../images/poor_old_man.jpg";
import teen3 from '../../images/blind_person.jpg';
import teen4 from '../../images/teacher_1.jpg';
import teen6 from '../../images/teacher_2.jpg';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SupportUs from "../Support/SupportUs";
import teen_nobg from "../../images/teen1_new.png";


import "./Hero.css";
const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
    const images = [image1, image2, image3, image4]

  return (
    <div className="px-4 relative
    ">

        {/* Container/parent div */}
        <motion.main
        initial="previously"
        animate="now"
        variants={containerVariants}
        className="flex flex-col w-full justify-center items-center gap-20 top-20 
        md:grid md:grid-cols-2 md:gap-10 md:px-10"> 

         {/* Left side */}
            <div className="w-full md:flex md:flex-col md:items-start relative md:bg-transparent bg-transparent ">
                {/* Animation of H1 */}
                <motion.h3 variants={h1Animate} className=" md:flex md:text-base md:text-[var(--bright-cyan)] md:mt-14 text-orange-400">#mission</motion.h3>
                <motion.h1  
                variants={h1Animate}
                className="text-left text-[--dark-blue] md:text-[--dark-blue] font-bold text-[2rem] md:text-[3.5rem] md:leading-none md:text-left">
                    All peoples deserve <span className="text-[var(--bright-cyan)]">equal</span> and fair opportunities.
                </motion.h1>
                <div className="md:mt-2 md:flex md:items-start md:w-full md:gap-10 md:pr-24">
                    <motion.p
                    variants={pAnimate}
                    className="text-gray-600 py-5 text-left md:text-justify text-sm text-[--grayish-blue]">
                        To improve the welfare of persons with disability, promote access to quality education,
                        quality health care services, human rights and relief of poverty
                    </motion.p>
                </div>
        {/* Button */}
                <motion.div variants={ctaVariants} className="flex justify-between md:gap-20 md:mt-9 md:z-50 md:items-center ">
                    <button className="btn_sec" type="button"><a href="#">Donate</a></button>
                    <button className="hidden btn_hollow cursor">Learn More</button>
                </motion.div>
            </div>

        {/* Right side */}
            <motion.div 
            variants={gridVariants}
            initial="previously"
            animate="now"
            className="relative w-full aspect-square top-5 md:relative md:grid md:grid-cols-3 md:grid-rows-3 md:gap-2">
                <motion.div
                variants={squareVariants}
                className="hidden bg-[--bright-cyan] relative right-14"></motion.div>

                <motion.div
                variants={squareVariants}
                className="hidden md:flex">
                    <img className="object-cover" src={image1} alt="" />
                </motion.div>
                
                <motion.div
                variants={squareVariants}
                className="hidden md:flex">
                    <img className="object-cover" src={image2} alt="" />
                </motion.div>
                
                {/* SWIPER */}
                <motion.div
                variants={squareVariants}
                className=" md:max-h-[25rem] overflow-hidden md:static absolute
                top-0 left-0 w-full md:h-full -z-20 md:z-0">
                    <Swiper
                    className="w-full"
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={false}
                    autoplay={{duration:1}}
                    >
                        {images?.map((source, i)=> <SwiperSlide className="aspect-square w-full"><img className="object-cover aspect-square w-full" src={source} alt={source} /></SwiperSlide>)}
                        
                    </Swiper>
                </motion.div>

                <motion.div
                variants={squareVariants}
                className="hidden md:flex">
                    <img src={image3} alt="" />
                </motion.div>
                {/* <motion.div className="bg-[var(--lime-green)]"></motion.div> */}
                <motion.div
                variants={squareVariants}
                className="md:relative md:right-16 md:border-t-8 md:border-white md:border-l-8 md:bottom-14 md:z-20 md:h-fit
                hidden md:flex">
                    <img src={image4} alt="" />
                </motion.div>
        </motion.div>
        {/* <div className="hidden md:flex md:absolute md:-bottom-1/3 md:left-1/2 md:transform md:-translate-x-1/2 w-full "><SupportUs/></div> */}
                
        </motion.main>

        
    </div>
  )
}

export default Hero;
