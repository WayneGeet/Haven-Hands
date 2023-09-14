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
    <section className="grid grid-rows-2 md:bg-[--bright-cyan] md:grid-cols-2 md:grid-rows-1 md:items-center py-10 md:py-0
     md:max-h-[75vh] overflow-hidden relative ">
        <AnimatePresence>
            <motion.div className="aspect-video w-full md:aspect-square border-4 border-white md:overflow-hidden md:min-h-full ">
                <LazyLoadImage effect="blur"
                className={`aspect-video w-full object-cover md:aspect-square`}
                src={item.image}
                alt={item.image} />
            </motion.div>
        </AnimatePresence>

        <div className="bg-slate-500 md:min-h-full md:h-full">
            <div className="w-full px-4 py-10 flex flex-col justify-start md:justify-center 
            items-start gap-4 relative">
                <h3 className="text-white text-2xl md:text-4xl font-bold mt-[2.5rem] ">{item.title}</h3>
                <p className="text-[#eee] text-sm mb-[1.3rem]">{item.content}</p>
                <button className="px-4 py-2 bg-[--dark-blue] text-white font-semibold" type="button">
                    <a href="/causes">Learn More</a>
                </button>
            </div>
            <div className="absolute top-1/2 md:top-10 -translate-y-1/2 w-full md:w-auto">
                <Button onClick={handleClick}/>
            </div>

        </div>
    </section>
  )
}

export default Info