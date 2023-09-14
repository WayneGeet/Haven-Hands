import React from 'react'

const HelpCard = ({icon, content, title}) => {
  return (
    <article className="w-full md:bg-[--light-gray-blue] shadow-md shadow-gray-400 md:flex flex-col justify-start items-center hover:bg-[#eee]
     px-2 py-4 gap-3 md:w-[15rem] hover:shadow-gray-500 hover:shadow-lg transition-shadow duration-500 my-8 md:min-h-[20rem]">
        <div className="inline-block p-4 bg-[--bright-cyan] rounded-full">
            {icon}
        </div>
        <h4 className="relative bottom-5 left-10 inline-block md:bottom-0 md:left-0 text-xl font-bold text-[--dark-blue]">{title}</h4>
        <small className="block text-sm text-[--grayish-blue] text-center">{content}</small>
    </article>
  )
}

export default HelpCard