import {RiArrowDropDownLine} from "react-icons/ri"
import {motion, AnimatePresence} from "framer-motion"


const Faq = ({que, ans, isActive, onClick}) => {
  return (
    <motion.section
    whileHover={{scale:1.02}}
    whileTap={{scale:0.90}}
    transition={{ bounce:0.4}}
    onClick={onClick} className="cursor-pointer max-w-2xl shadow-md shadow-gray-300 px-7 py-3 bg-slate-50 rounded-md">
            <motion.div
            
            className="flex justify-between items-center text-bold text-xl text-[--bright-cyan]">
                <h3 className="">{que}</h3>
                <p><RiArrowDropDownLine size={28}/></p>
            </motion.div>
            <AnimatePresence>
            {isActive ? 
            <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{duration:0.4}}
            className="text-gray-500 ">{ans}</motion.div>
            : null   }
            </AnimatePresence>
    </motion.section>
  )
}

export default Faq