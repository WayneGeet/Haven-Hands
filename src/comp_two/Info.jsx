import {useState} from "react";
import {programs} from "../others/data";
import Button from "./Button";
import {motion, AnimatePresence} from "framer-motion";
// react lazy load image
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Info = () => {
    const [index, setIndex] = useState(1);
    const item = programs[index];
    const imageVariant = {
        hidden:{
            x:"-100vw", opacity:0
        },
        visible:{
            x:0, opacity:1,transition:{duration:1, type:"spring"}
        },
        exiting:{
            x:"100vw", opacity:1
        }
    }
    const handleClick = (i) => {
        if(i===1){
            setIndex(prev => prev - 1)
            if(index === 0){
                setIndex(programs.length - 1)
            }
        }
        else{
            setIndex(prev => prev + 1)
            if(index === programs.length - 1){
                setIndex(0)
            }
        }
    }
  return (
    <section className="grid grid-rows-2 md:bg-[--bright-cyan] items-start md:grid-cols-2 md:grid-rows-1 md:items-center py-10 max-h-screen overflow-hidden relative">
        <AnimatePresence>
            <motion.div 
            className="aspect-square w-full overflow-hidden">
                <LazyLoadImage effect="blur"
                className="aspect-square w-full object-cover saturate-100 md:saturate-0 md:hover:saturate-100 md:transition-all md:duration-500"
                 src={item.image}
                  alt={item.image} />
            </motion.div>
        </AnimatePresence>
        <div className=" bg-[--bright-cyan] md:items-center">
            <div className="w-full md:w-3/4 px-4 py-5 flex flex-col justify-start md:justify-center items-start gap-4 relative">
                <div className="absolute bottom-10 left-1/2 transform translate-y-1/2 ">
                    <Button onClick={handleClick}/>
                </div>

                <h3 className="text-white text-3xl font-bold mt-[1rem] ">{item.title}</h3>
                <p className="text-[#eee] mb-[1.3rem]">{item.content}</p>
                <button className="px-4 py-2 bg-[--dark-blue] text-white font-semibold" type="button"><a href="#">Learn More</a></button>
            </div>
            

        </div>
    </section>
  )
}

export default Info