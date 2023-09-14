import {motion} from "framer-motion";
import {useState} from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import image1 from "../../images/kid_looking.jpg";
import image2 from "../../images/teen2.jpg";
import image3 from "../../images/teen1.jpg";
// import image4 from "../../images/kid_goat.jpg";
import kid_playing from "../../images/kid_playing.jpg"
import main_hero_image from "../../images/kid_working.jpg";
import {h1Animate, pAnimate, containerVariants, ctaVariants, gridVariants, squareVariants} from "../../others/animation";

// import "./Hero.css";
const Hero = () => {
    const [hovered, setHovered] = useState(false)

  return (
    <div className="relative md:bg-black md:bg-opacity-40">

        {/* Container/parent div */}
        <motion.main
        initial="previously"
        animate="now"
        variants={containerVariants}
        className="hero px-[4rem] mx-auto flex flex-col w-full justify-center items-center gap-10
        md:grid md:grid-cols-2 md:gap-10 max-h-[100vh] overflow-hidden relative h-screen"> 

            <section className="hidden md:flex w-full absolute top-0 left-0 right-0 bottom-0 -z-10 " >
                <img className="w-full blur-[10px] " src={main_hero_image} alt="kid working" />
            </section>


            <div className="w-full md:flex md:flex-col md:items-start md:justify-start px-[2rem]">
                {/* Animation of H1 */}
                <motion.h3 variants={h1Animate} className="max-w-md md:flex md:text-base md:text-[var(--bright-cyan)] md:mt-14 text-orange-400">#mission</motion.h3>
                <motion.h1  
                variants={h1Animate}
                className="main-text max-w-lg text-left text-white font-bold text-[3.5] leading-tight md:leading-tighter md:text-left">
                    All peoples deserve <span className="text-[var(--bright-cyan)]">equal</span> and fair opportunities.
                </motion.h1>
                <div className="md:mt-2 md:flex md:items-start md:w-full md:gap-10 md:pr-24">
                    <motion.p
                    variants={pAnimate}
                    className="md:text-base  py-5 text-left md:text-justify max-w-lg text-white ">
                        To improve the welfare of persons with disability, promote access to quality education,
                        quality health care services, human rights and relief of poverty
                    </motion.p>
                </div>
        {/* Button */}
                <motion.div variants={ctaVariants} className="flex justify-between md:gap-20 md:mt-9 md:z-50 md:items-center ">
                    <button className="inline-block bg-sky-400 px-8 text-bold text-white py-2 hover:bg-opacity-50 transition-all duration-500" type="button"><a href="#">Donate</a></button>
                    <button className="inline-block bg-transparent whitespace-nowrap border-2 border-sky-400 hover:border-orange-400 transition-all duration-400 px-8 text-bold text-white py-2">Learn More</button>
                </motion.div>
            </div>

        {/* Right side */}
            <section className="overflow-hidden relative aspect-[9/16] w-3/4 mx-auto h-full">
                <div onMouseEnter={(e)=>setHovered(true)} onMouseLeave={(e)=>setHovered(false)} className="rounded-full w-5 cursor-pointer h-5 z-10 bg-sky-400 absolute top-1/3 left-1/3 animate-ping">
                </div>

                <article className={` ${hovered ? "opacity-80":"opacity-0"} absolute top-1/3 left-1/3 p-7 rounded-md border-none bg-[--dark-blue] bg-opacity-50  transition-opacity duration-700 `}>
                    <small className="text-slate-50">
                        Street kids are also vulnerable to abuse from older peers and even the police. On the streets, 
                        there are "big boys" who control various groups. These group leaders would abuse the young children 
                        by beating them and stealing their money.Sexual abuse is more common in girls.
                    </small>
                </article>
                <img className="kid-img object-contain object-top aspect-[9/16] top-36 w-full " src={kid_playing} alt="kid playing" />
            </section>
        </motion.main>

        
    </div>
  )
}

export default Hero;
