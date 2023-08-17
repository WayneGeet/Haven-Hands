import {AiOutlinePlus} from "react-icons/ai";

const FAQ = ({question, answer, isActive, onShow}) => {
  return (
    <section className="rounded-lg border-l-8 border-orange-400 shadow-gray-400 shadow-lg 
    flex flex-col justify-start">

        <div className="flex justify-between items-center bg-white shadow-lg
        shadow-gray-300 py-3 px-8 gap-5">
            <h3 className="text-[--bright-cyan] font-semibold ">{question}</h3>
            <span onClick={onShow}><AiOutlinePlus/></span>
        </div>

        {isActive && <article className="pt-5 pb-2 px-8 bg-[--light-gray-blue] text-[--dark-blue] items-start ">
            {isActive && <p>{answer}</p>}
        </article>}

    </section>
  )
}

export default FAQ