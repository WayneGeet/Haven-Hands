import React from 'react'

const Banner = () => {
  return (
    <div className="relative">
        <h2 className="px-5 bottom-5 md:top-1/2 -translate-y-1/2 max-w-5xl z-50 absolute text-2xl md:text-4xl text-white font-bold">
            Get involved today and be a part of the change. Your support can help transform lives and create a brighter future for vulnerable communities.
        </h2>
        <button className="animate-pulse inline-block absolute right-0 mr-10 -bottom-4 md:top-1/2 bg-[--bright-cyan]
         text-white font-semibold md:py-2 px-10 py-4 border-none z-50 -translate-y-1/2">
          <a className="" href="/contact">Join Us</a>
        </button>
        <article className="banner max-h-[30vh] py-[7rem] px-10 my-10 overflow-hidden">
        </article>

    </div>
  )
}

export default Banner