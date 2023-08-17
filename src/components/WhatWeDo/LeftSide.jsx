import {containerVariant} from "../../others/animation";
import {motion} from "framer-motion";

export const Elderly = () => {
  return (
    <motion.div 
    variants={containerVariant}
    className="relative"
    initial="hidden"
    animate="visible">
        <p className="absolute text-6xl text-[--bright-cyan] opacity-40 -left-9 top-0 font-bold">3</p>
        <h2 className="font-bold text-[--dark-blue] text-xl mb-5 ">
            In Haven Hands, we value those who have gone before us</h2>
        <p className="text-small text-[--grayish-blue]">
          Committed to safeguarding the future by nurturing and 
          protecting our children. We strive to provide a nurturing
          environment, empower them with education, support their 
          physical and emotional well-being, advocate for their rights,
          and foster a safe and inclusive community where they can thrive,
          grow, and reach their full potential. 
        </p>
        <button className="btn_sec" type="button"><a href="/programs">learn more</a></button>
    </motion.div>
  )
}

export const Children = () => {
return (
  <motion.div
  variants={containerVariant}
  className="relative"
  initial="hidden"
  animate="visible">
      <p className="absolute text-6xl text-[--bright-cyan] opacity-40 -left-9 top-0 font-bold">1</p>
      <h2 className="font-bold text-[--dark-blue] text-xl mb-5">Protecting the future by protecting our children</h2>
      <p className="text-small text-[--grayish-blue]">
          Committed to safeguarding the future by nurturing and 
          protecting our children. We strive to provide a nurturing
          environment, empower them with education, support their 
          physical and emotional well-being, advocate for their rights,
          and foster a safe and inclusive community where they can thrive,
          grow, and reach their full potential. 
      </p>
      <button className="btn_sec" type="button"><a href="/programs">learn more</a></button>
  </motion.div>
)
}

export const Disabled = () => {
return (
  <motion.div
  variants={containerVariant}
  className="relative"
  initial="hidden"
  animate="visible">
      <p className="absolute text-6xl text-[--bright-cyan] opacity-40 -left-9 top-0 font-bold">2</p>
      <h2 className="font-bold text-[--dark-blue] text-xl mb-5">Disability is not inability. </h2>
      <p className="text-small text-[--grayish-blue]">
          Committed to safeguarding the future by nurturing and 
          protecting our children. We strive to provide a nurturing
          environment, empower them with education, support their 
          physical and emotional well-being, advocate for their rights,
          and foster a safe and inclusive community where they can thrive,
          grow, and reach their full potential. 
      </p>
      <button className="btn_sec" type="button"><a href="/programs">learn more</a></button>
  </motion.div>
)
}

export const Homeless = () => {
  
return (
  <motion.div
  variants={containerVariant}
  className="relative"
  initial="hidden"
  animate="visible">
      <p className="absolute text-6xl text-[--bright-cyan] opacity-40 -left-9 top-0 font-bold">4</p>
      <h2 className="font-bold text-[--dark-blue] text-xl mb-5">At Haven Hands we believe that every person deserves a plae to call home</h2>
      <p className="text-small text-[--grayish-blue]">
          Providing shelters to the less fortunate in the community. Ours is to give to anyone who is need.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident asperiores recusandae, 
          corrupti velit itaque ipsum facere perspiciatis a laudantium amet.
      </p>
      <button className="btn_sec" type="button"><a href="/programs">learn more</a></button>
  </motion.div>
)
}

