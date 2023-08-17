import Support from "./Support"
import {BiDonateHeart} from "react-icons/bi"; 
// import {BiSolidDonateHeart} from "react-icons/all"; 
import {IoFastFoodOutline} from "react-icons/io5";
import {IoFastFoodSharp} from "react-icons/io5";
import {IoSchoolOutline} from 'react-icons/io5'
import {IoSchoolSharp} from "react-icons/io5";


const values = [
    {icon:<BiDonateHeart color="white" size={24}/>,
    title:"Money",
    iconHovered:<BiDonateHeart color="white" size={24}/>,
    info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.architecto placeat enda totam adipisci."},
    {icon:<IoFastFoodOutline color="white" size={24}/>,
    title:"Food",
    iconHovered:<IoFastFoodSharp color="white" size={24}/>,
    info:"Lorem ipsum dolor sit amet, consectetur placeat enda totam adipisci."},
    {icon:<IoSchoolOutline color="white" size={24}/>,
    title:"Clothing",
    iconHovered:<IoSchoolSharp color="white" size={24}/>,
    info:"Lorem ipsum dolor sit amet, consectetur cimus architecto placeat enda totam adipisci."},

]

const SupportUs = () => {
  return (
    <section className="container bg-[--dark-blue] relative flex items-center justify-center px-14">
        <div className="">
            <h4 className="text-gray-50 font-bold text-6xl">Change A Life Today</h4>
            <small className="text-orange-300">You can give in the following ways</small>
        </div>
        <article className="flex justify-center w-full gap-10 py-8  ">{values.map(({icon,title, iconHovered, info}, i) => <div key={i} className="grid gap-12"><Support icon={icon} title={title} iconHover={iconHovered} info={info}/></div>)}</article>
    </section>
  )
}

export default SupportUs