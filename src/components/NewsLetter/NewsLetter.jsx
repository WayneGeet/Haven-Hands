import {useState} from "react";

const NewsLetter = () => {
    const [email, setEmail] = useState("")
    const handleChange = (e)=>{
        setEmail(()=>e.target.value)
    }
  return (
    <section className="flex flex-col justify-center mb-14  px-10 items-center mx-10  ">
        <h2 className="text-white font-semibold text-2xl mb-5 tracking-wide">Subscribe to our <span className="text-[#fde74c] italic font-regular">Newsletter</span></h2>
        <form className="w-2/4 flex items-center" method='GET'>
            <input
            onChange={handleChange}
            value={email}
            type="email"
            placeholder="michaelscott@gmail.com"
            className="px-4 py-3 text-white border-none w-3/4 font-semibold bg-inherit outline-white focus:outline-[#fde74c] outline" />
            <button type="submit" className="bg-[#105c59] rounded-sm px-7 border border-white py-3 ml-10 tracking-widest text-sm font-semibold text-white">Subscribe</button>
        </form>
        
    </section>
  )
}

export default NewsLetter