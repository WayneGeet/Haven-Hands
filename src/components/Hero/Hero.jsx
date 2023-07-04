import {useState} from "react";
import {motion} from "framer-motion";
import Card from "../Card/Card";
import image1 from "../../images/kid_looking.jpg";
import image2 from "../../images/teen2.jpg";
import image3 from "../../images/teen1.jpg";
import image4 from "../../images/kid_goat.jpg";
import {h1Animate, pAnimate, containerVariants, cardVariants, cardWrapperVariants} from "../../animation";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import feet from "../../images/feet.jpg";
import teen3 from '../../images/teen3.jpg';
import teen4 from '../../images/teen4.jpg';
import teen6 from '../../images/teen6.jpg';
import brush from "../../images/brush-stroke.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";


import "./Hero.css";
const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = ()=>{
        setIsHovered(prev => !prev)
    }

  return (
    <div className="bg-[var(--light-gray-blue)] pt-12">

        {/* Container/parent div */}
        <motion.main
        initial="previously"
        animate="now"
        variants={containerVariants}
        className="flex flex-col gap-5 px-10 md:px-20 md:max-w-[1200px] md:mx-auto 
        md:min-h-screen md:pt-12 md:grid md:grid-cols-2 md:gap-16"> 

         {/* Left side */}
            <div className="md:flex md:flex-col md:items-start relative ">
                {/* Animation of H1 */}
                <motion.h3 variants={h1Animate} className="text-base text-[var(--lime-green)] mt-14">#mission</motion.h3>
                <motion.h1  
                variants={h1Animate}
                className="text-[--dark-blue] font-semibold text-[1.8rem] md:text-[3.5rem] md:leading-none md:text-left">
                    All children deserve <span className="text-[var(--lime-green)]">equal</span> and fair opportunities.
                </motion.h1>

                <div className="md:mt-5 md:flex md:items-start md:w-full md:gap-10 md:pr-24">
                    <motion.p
                    variants={pAnimate}
                    className="text-[var(--grayish-blue)] py-5 text-left md:text-justify md:text-[1rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reiciendis 
                        debitis error quam sed velit sunt! Voluptatem consequatur expedita.
                    </motion.p>
                </div>
        {/* Button */}
                <div className="flex justify-between md:gap-20 md:mt-9 md:z-50 md:items-center ">
                    <button className="bg-orange-400 text-white px-10 py-2 cursor" type="button">Donate</button>
                    <button className="border-none bg-transparent text-[var(--dark-blue)] cursor border-2 border-gray-700">Learn More</button>
                </div>
            </div>

        {/* Right side */}
            <div className="relative grid grid-cols-3 grid-rows-3 gap-4">
                <div className="bg-orange-400"></div>
                <div className="">
                    <img className="object-cover" src={image1} alt="" />
                </div>
                
                <div className="bg-sky-400 row-span-1">
                    <img className="object-cover" src={image2} alt="" />
                </div>
                
                {/* SWIPER */}
                <div className="row-span-2 col-span-2">
                    <Swiper
                    className="w-full"
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{duration:7}}
                    >
                        <SwiperSlide className="w-full"><img className="object-contain" src={feet} alt="feet" /></SwiperSlide>
                        <SwiperSlide className="w-full"><img className="object-contain" src={teen3} alt="teen 3" /></SwiperSlide>
                        <SwiperSlide className="w-full"><img className="object-contain" src={teen4} alt="teen 4" /></SwiperSlide>
                        <SwiperSlide className="w-full"><img className="object-contain" src={teen6} alt="teen 4" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className="">
                    <img src={image3} alt="" />
                </div>
                {/* <div className="bg-[var(--lime-green)]"></div> */}
                <div className="">
                    <img src={image4} alt="" />
                </div>
        </div>
                
        </motion.main>

        
    </div>
  )
}

export default Hero;
