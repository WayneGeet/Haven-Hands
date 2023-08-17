import React from 'react'
import {FaQuestion} from "react-icons/fa";
import kid_who from "../../images/kid_goat.jpg";
import old_who from "../../images/teen3.jpg"
import SectionHead from "../../components/SectionHead";
import {GoTriangleRight} from 'react-icons//go';

const Who = () => {
  return (
    <section className="py-10 bg-[--light-gray-blue]">
        <div className="flex flex-col items-center justify-center px-4 mx-auto gap-4
         md:grid md:grid-cols-2 md:gap-20 ">
            <section className="grid grid-cols-2 grid-rows-2 gap-2">
                <div className="bg-[--dark-blue] rounded-md relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40 "><FaQuestion size={120} color="white"/></div>
                    <h2 className="text-white font-bold text-4xl absolute bottom-0 left-1/2 transform translate-x-1/2 w-[4rem]">
                        About Us
                    </h2>
                </div>
                <div className="overflow-hidden rounded-md h-[12rem]">
                    <img className="duration-500 transition-transform hover:scale-105" src={kid_who} alt="kid carrying goat" />
                </div>

                <div className="rounded-md col-span-2 overflow-hidden h-[12rem]">
                    <img className="duration-500 transition-transform hover:scale-105" src={old_who} alt="" />
                </div>
            </section>
            
            <section className="">
                <div className="flex flex-col justify-start items-center gap-4">
                    <h3 className="text-[--dark-blue] font-semibold text-xl">To improve the welfare of persons with disability,
                    promote access to quality education healthcare services, human rights and relief of poverty
                    </h3>
                    <p className="md:pl-16 text-[--grayish-blue] text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fuga architecto quis 
                        qui neque sit aut dolor culpa laudantium voluptate, sequi accusamus rerum porro repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fuga architecto quis 
                        qui neque sit aut dolor culpa laudantium voluptate, sequi accusamus rerum porro repellat.
                    </p>
                    <button type="button" className="inline-block font-bold text-white bg-[--dark-blue] rounded-md px-4 py-2
                    text-center text-xl mt-10 md:ml-auto hover:text-[--bright-cyan]"><a href="#">Learn More</a></button>

                </div>
            </section>
        </div>
    </section>
  )
}

export default Who