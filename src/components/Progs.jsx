import {motion} from "framer-motion";

const Progs = ({left,right}) => {
  return (
    <article className={`grid grid-cols-2  items-center gap-20 `}>
      <div className="">{left}</div>
      <div className="w-3/4 overflow-hidden h-[20rem]">
        <img src={right} alt={right} />
      </div>
      
    </article>
  )
}

export default Progs
