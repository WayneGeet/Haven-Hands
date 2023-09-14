import React from 'react';
import {AiFillCaretRight} from "react-icons/ai";
import {AiFillCaretLeft} from "react-icons/ai";

const Button = ({onClick}) => {
  return (
    <article className="md:grid md:grid-cols-2 md:gap-2 flex justify-between">
        <button onClick={() => onClick(1)} type="button" className="md:p-2 bg-[--dark-blue] md:bg-opacity-40 rounded-full mx-4 p-5"><AiFillCaretLeft size={24} color="white"/></button>
        <button onClick={() => onClick(2)} type="button" className="md:p-2 bg-[--dark-blue] md:bg-opacity-40 rounded-full mx-4 p-5"><AiFillCaretRight size={24} color="white" /></button>
    </article>
  )
}

export default Button