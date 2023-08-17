import React from 'react'

const HelpCard = ({icon, content, title}) => {
  return (
    <article className="bg-[--light-gray-blue] shadow-md shadow-gray-400 flex flex-col justify-start items-center hover:bg-[#eee]
     px-2 py-4 gap-3 w-[15rem] hover:shadow-gray-500 hover:shadow-lg transition-shadow duration-500 h-[16rem] min-h-[15rem]">
        <div className="p-4 bg-[--bright-cyan] rounded-full">
            {icon}
        </div>
        <h4 className="text-xl font-bold text-[--dark-blue]">{title}</h4>
        <small className="text-[--grayish-blue] text-center">{content}</small>
    </article>
  )
}

export default HelpCard