import playing from "../../images/elderly1.jpg";
import {BsArrowUpRight} from "react-icons/bs";
const Mission = () => {
    const mission = {title:"Our Mission",
        content:"At Haven Hands, our mission is to improve the lives of children and the elderly in our community. We are committed to providing essential support, care, and resources to ensure their well-being and happiness. Through our programs and initiatives, we strive to create a nurturing environment, promote education, and foster a sense of belonging, enabling them to lead fulfilling lives."}
      
  return (
         <div className = "grid grid-cols-2 container w-[1100px]">
            <div className="w-[20rem] overflow-hidden">
                <img className="object-cover" src={playing} alt="" />
            </div>
            <section>
                <small className="text-orange-500 font-bold">What we do...</small>             
                    <div className="flex flex-col justify-start ">
                        <h2 className="mb-5 text-[--dark-blue] font-semibold text-2xl">{mission.title}</h2>
                        <p className="text-[--grayish-blue]">{mission.content}</p>
                        <button className="btn_sec" type="button">
                            <a href="/about">Learn More </a>
                            <span><BsArrowUpRight/></span>
                        </button>
                    </div>
            </section>

            
    </div>

  )
}

export default Mission

// is there grid reverse???