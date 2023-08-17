import React from 'react'
import Logo from "../../images/logo.jpg";
import {AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";
import {Link} from "react-router-dom";


const Footer = () => {
  return (
    <footer className="pt-[1rem] text-[0.9rem] text-[--light-gray-blue] bg-[--bright-cyan]">
        <div className="container grid grid-cols-5 gap-[6rem]">
            <article className="col-span-2 flex flex-col items-start gap-[0.7rem] ">
                <a href="/" >
                    <img className="w-10 h-10" src={Logo} alt="logo" />
                </a>
                <p className="mt-[0.5rem] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore eveniet 
                    porro delectus optio obcaecati placeat, magnam deleniti aliquam, impedit quae.
                </p>
                <div className="mt-[1.5rem] flex gap-10 items-center">
                    <a className="bg-[--grayish-blue] p-[0.7rem] border border-transparent rounded-[0.6rem] transition-all hover:bg-transparent hover:border-[--dark-blue] duration-700" href="https://www.linkedin.com//" target="_blank" rel="noreferrer noopener"><AiFillLinkedin/> </a>
                    <a className="bg-[--grayish-blue] p-[0.7rem] border border-transparent rounded-[0.6rem] transition-all hover:bg-transparent hover:border-[--dark-blue] duration-700" href="https://www.linkedin.com//" target="_blank" rel="noreferrer noopener"><AiFillTwitterCircle/> </a>
                    <a className="bg-[--grayish-blue] p-[0.7rem] border border-transparent rounded-[0.6rem] transition-all hover:bg-transparent hover:border-[--dark-blue] duration-700" href="https://www.linkedin.com//" target="_blank" rel="noreferrer noopener"><AiFillFacebook/> </a>
                    <a className="bg-[--grayish-blue] p-[0.7rem] border border-transparent rounded-[0.6rem] transition-all hover:bg-transparent hover:border-[--dark-blue] duration-700" href="https://www.linkedin.com//" target="_blank" rel="noreferrer noopener"><AiFillInstagram/> </a>
                </div>
            </article>

            <article className="col-span-1 flex flex-col items-start gap-[0.7rem]">
                <h4 className="mb-[0.6rem] text-base">Permalinks</h4>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/programs">Programs</a>
                <a href="/faq">FAQs</a>
            </article>
            <article className="col-span-1 flex flex-col items-start gap-[0.7rem]">
                <h4 className="mb-[0.6rem] text-base">Insights</h4>
                <a href="/s">Blogs</a>
                <a href="/s">Communities</a>
                <a href="/s">Support</a>
                <a href="/s">Events</a>
            </article>

            <article className="col-span-1 flex flex-col items-start gap-[0.7rem]">
                <h4 className="mb-[0.6rem] text-base">Get In Touch</h4>
                <a href="/contact">Contact Us</a>
                <a href="/s">Support</a>
            </article>
        </div>
        <div className="text-[--dark-blue] text-center border-t-2 border-white py-[1.5rem]">
            <small>2023 HOPEWELL HAVEN CENTRE &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer