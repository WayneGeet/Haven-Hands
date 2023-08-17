import {ContactUs} from "../components/Form/Form";
import location from '../images/location.png'
const Contact = () => {
  return (
    <div  className="flex justify-center items-center contact_bg mt-16 bg-sky-700 md:grid md:grid-cols-2 min-h-[100vh] ">
      <div className="hidden md:flex items-center justify-center bg-white w-full h-3/4">
        <h2 className="text-5xl font-bold text-orange-400">Be part of the <span>journey</span></h2>
      </div>
      <div className="px-5 py-4 max-w-xl w-full">
        <div className=" px-8 py-5 rounded-lg bg-[#eee] bg-opacity-20 backdrop-blur-lg">
          <ContactUs/>
        </div>
        
      </div>
      
    </div>
  )
}

export default Contact