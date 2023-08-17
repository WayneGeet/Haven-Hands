const Support = ({icon, iconHover, info, title}) => {
  return (
    <article className="flex flex-col gap-2 py-2 px-7 items-center article_support
    border hover:border-gray-500 border-transparent rounded-[0.7rem] hover:bg-[--dark-blue]">
        <div className="flex justify-center items-center rounded-full bg-orange-300 p-[0.7rem] item1 ">
            {icon}
        </div>
        <h4 className="text-white font-semibold">{title}</h4>
        <div className="max-w-[15rem]"><p className='text-white text-center pointer-events-none'>{info}</p></div>
    </article>
  )
}

export default Support