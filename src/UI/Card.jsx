const Card = ({num, title, content, icon}) => {
  return (
    <>
        <article className="px-5 rounded-md transition-all duration-500 border flex justify-evenly items-center flex-col hover:bg-[#122c49] bg-[#15726f]">
          <span className="p-4 my-3 rounded-full bg-[#0a1828] text-[1.2rem]  text-white hover:text-white hover:bg-yellow-500">{icon}</span>
          <h1 className="text-white font-bold ">{title}</h1> 
          <small className="text-sm text-gray-200 pb-3">{content}</small>
        </article>
    </>
  )
}

export default Card