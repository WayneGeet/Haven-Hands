import teacher from "../../images/teacher_2.jpg";
import { IconContext } from "react-icons";
import {useState} from "react";
import {AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";
import Floaters from "../who_we_are/Floaters"

const WhoWeAre = () => {
  const [seen, setSeen] = useState(false);
  const value = false
  const icons = [<AiFillInstagram size={16}/>, <AiFillFacebook size={16}/>, <AiFillLinkedin size={16}/>, <AiFillTwitterCircle size={16}/>]
  return (
    <div className="flex flex-col gap-5 w-full bg-[--light-gray-blue] md:grid md:grid-cols-2 items-center container px-4 md:px-28">
      <article className="relative">
        <div className="hidden md:block ">
          <Floaters/>
        </div>
        <div onMouseEnter={() => setSeen(true)} onMouseLeave={()=> setSeen(false)}
        className="w-[20rem] flex justify-center rounded-full cursor-pointer shade overflow-hidden relative">

          <img src={teacher} className="founder_image object-fit w-full rounded-full" alt="founder" />
          
            <div className={`${seen ? "opacity-100" : "opacity-0"} z-40 flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 gap-4`}>
              {icons?.map((icon,i)=><span className="bg-white rounded-full p-2"><a className="text-black" href="#">{icon}</a></span>)}
            </div>
        </div>
      </article>
      
      
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-3xl ">Gladys Wamuyu | Founder and CEO</h2>
        <p className="text-[--grayish-blue]">Gladys Wamuyu is social worker who has dedicated 20 years of her life to fostering
          and mentoring kids from disadvantaged families. She has served as a project director
          in Child of Destiny a project under <a className="text-blue-700 underline" href="https://compassionkenya.org/">compassion.</a>
          The project has thrived throughout her tenure
          She is dedicated to helping peoples from all corners of life in coming out from the shackles of  through 
          preaching the Word of God to them and economic help. 
        </p>
        <button className="btn_pry" type="button"><a href="/about">Partner with us</a></button>
      </div>
        
    </div>
  )
}

export default WhoWeAre;
