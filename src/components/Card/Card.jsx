import React from 'react';

const Card = ({message,title, color}) => {
  return (
    <div
    className="mb-7 shadow-gray-700 shadow-md">
        <div
        className={`z-50 opacity-75 cursor-pointer px-4 py-2 rounded-lg ${color} flex justify-center items-center flex-col w-[12rem] h-[6rem]`}>
            <h3 className="text-[#FDE74C] font-bold text-2xl">{title}</h3>
            <p className="text-sm text-white font-semibold">{message}</p>
            <small className="text-sky-600 ">Read More</small>
        </div>
    </div>
  )
}

export default Card