import {useState} from "react";
import friends from "../images/friends.jpg"
import {BiDonateHeart} from "react-icons/bi";
import {AiOutlineArrowRight} from "react-icons/ai";
import Select from "../components/Select/Select"

const Blogs = () => {
  const [selected, setSelected] = useState(1)
  return (
    <>
      <div className="px-5 py-5 h-[40vh] md:hidden">
        <section className="grid grid-cols-4">
          <div className="col-span-1">
            <ul className="flex flex-col items-start bg-[#0a1828] relative right-4">
              <li onClick={()=> setSelected(1)} className="border-b border-b-[#fde74c] text-center mb-2 grid gap-5 grid-cols-2 items-center border-b-1 border-white">
                <h3 className="hover:text-lg hover:animate-pulse hover:text-[#fde74c] text-white">about</h3>
                <span className="text-white text-sm relative left-3"><AiOutlineArrowRight/></span>
              </li>
              <li onClick={()=> setSelected(2)} className="border-b border-b-[#fde74c] text-center mb-2 grid gap-5 grid-cols-2 items-center border-b-1 border-white">
                <h3 className="hover:text-lg hover:animate-pulse hover:text-[#fde74c] text-white">mission</h3>
                <span className="text-white text-sm relative left-3"><AiOutlineArrowRight/></span>
              </li>
              <li onClick={()=> setSelected(3)} className="border-b border-b-[#fde74c] text-center mb-2 grid gap-5 grid-cols-2 items-center border-b-1 border-white">
                <h3 className="hover:text-lg hover:animate-pulse hover:text-[#fde74c] text-white">goals</h3>
                <span className="text-white text-sm relative left-3"><AiOutlineArrowRight/></span>
              </li>
              <li onClick={()=> setSelected(4)} className="border-b border-b-[#fde74c] text-center mb-2 grid gap-5 grid-cols-2 items-center border-b-1 border-white">
                <h3 className="hover:text-lg hover:animate-pulse hover:text-[#fde74c] text-white">values</h3>
                <span className="text-white text-sm relative left-3"><AiOutlineArrowRight/></span>
              </li>
            </ul>
          </div>
          <div className="w-full relative bg-[#132c49] col-span-3">
            <Select value={selected}/>
          </div>
          
        </section>
      </div>
      <div className="hidden md:grid md:grid-cols-2 md:gap-20 md:px-10 md:relative md:bg-[#178582] ">
          <section className="flex flex-col gap-5 relative w-[130%] items-center justify-center">
            <h2 className={`text-4xl font-semibold text-[#112a47] relative w-fit bg-white top-10`}>About Us</h2>
            <div className="px-10 py-6 bg-[#112a47]">
              <p className="text-white text-base mt-7">Haven Hands is an organization started in 2023 to help young adults by providing them with 
                love and the care they need to be responsible adults. As a christian based organization, we are
                cognisant of how young teenagers, especially boys, have been neglected by the community when they complete 
                their highschool education.
              </p>
              <div className="mt-10">
              </div>

            </div>
          </section>
          <section className="w-full ">
            <img className="object-contain" src={friends} alt="" />
          </section>
      </div>
    </>
    
    
  )
}

export default Blogs