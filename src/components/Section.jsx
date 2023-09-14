// import playing from "../../images/teen3.jpg";
import {BsArrowUpRight} from "react-icons/bs";

const Vision = ({title, above, children, image}) => {
    const vision = {title:"Our Vision",
        content:"Our vision is a caring community where children and the elderly thrive. We envision a society that provides support, opportunities, and respect to ensure their well-being, happiness, and active participation in community life."}
      
  return (
    <div className = "md:flex md:justify-between px-20 mx-auto gap-24 mt-[2rem]">
        <section>
            <small className="text-orange-500 font-bold">{above}</small>             
                <div className="flex flex-col justify-start ">
                    <h2 className="mb-5 text-[--dark-blue] font-semibold text-4xl">{title}</h2>
                    <p className="text-[--grayish-blue]">{children}</p>
                    
                </div>
        </section>

        <div className="w-full overflow-hidden min-w-[20rem] aspect-square">
            <img className="object-cover aspect-square w-full" src={image} alt="" />
        </div>
    </div>
  )
}

export default Vision;






