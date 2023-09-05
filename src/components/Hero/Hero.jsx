import {motion} from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import image1 from "../../images/kid_looking.jpg";
import image2 from "../../images/teen2.jpg";
import image3 from "../../images/teen1.jpg";
// import image4 from "../../images/kid_goat.jpg";
import kid_playing from "../../images/kid_playing.jpg"
import main_hero_image from "../../images/kid_working.jpg";
import {h1Animate, pAnimate, containerVariants, ctaVariants, gridVariants, squareVariants} from "../../others/animation";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";



import "./Hero.css";
const Hero = () => {
    // const images = [image1, image2, image3, image4]

  return (
    <div className="relative md:bg-black md:bg-opacity-40">

        {/* Container/parent div */}
        <motion.main
        initial="previously"
        animate="now"
        variants={containerVariants}
        className=" max-w-5xl mx-auto flex flex-col w-full justify-center items-center gap-10
        md:grid md:grid-cols-2 md:gap-10 max-h-[100vh] overflow-hidden "> 

            <section className="w-full absolute top-0 left-0 right-0 bottom-0 -z-10 " >
                <img className="w-full blur-[10px] " src={main_hero_image} alt="kid working" />
            </section>


            <div className="w-full md:flex md:flex-col md:items-start md:justify-start ">
                {/* Animation of H1 */}
                <motion.h3 variants={h1Animate} className=" md:flex md:text-base md:text-[var(--bright-cyan)] md:mt-14 text-orange-400">#mission</motion.h3>
                <motion.h1  
                variants={h1Animate}
                className="text-left text-white md:text-white font-bold text-[2rem] md:text-[3.5rem] md:leading-none md:text-left">
                    All peoples deserve <span className="text-[var(--bright-cyan)]">equal</span> and fair opportunities.
                </motion.h1>
                <div className="md:mt-2 md:flex md:items-start md:w-full md:gap-10 md:pr-24">
                    <motion.p
                    variants={pAnimate}
                    className="md:text-base py-5 text-left md:text-justify text-sm text-white">
                        To improve the welfare of persons with disability, promote access to quality education,
                        quality health care services, human rights and relief of poverty
                    </motion.p>
                </div>
        {/* Button */}
                <motion.div variants={ctaVariants} className="flex justify-between md:gap-20 md:mt-9 md:z-50 md:items-center ">
                    <button className=" inline-block bg-sky-400 px-10 text-bold text-white py-3 hover:bg-opacity-50 transition-all duration-500" type="button"><a href="#">Donate</a></button>
                    <button className="inline-block bg-transparent border-2 border-sky-400 hover:border-orange-400 transition-all duration-400 px-10 text-bold text-white py-3">Learn More</button>
                </motion.div>
            </div>

        {/* Right side */}
            <section className="overflow-hidden relative top-20">
                <div className="rounded-full w-4 cursor-pointer h-4 z-10 bg-sky-400 absolute top-1/3 left-1/3 animate-ping"></div>
                <img src={kid_playing} alt="kid playing" />
            </section>
        </motion.main>

        
    </div>
  )
}

export default Hero;
