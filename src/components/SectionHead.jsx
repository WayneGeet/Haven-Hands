import React from 'react'

const SectionHead = ({title, icon}) => {
  return (
    <div className="flex justify-start items-center gap-3 ">
      <span>{icon}</span>
      <h2 className="text-3xl text-[--dark-blue] font-semibold">{title}</h2>
    </div>
  )
}

export default SectionHead;