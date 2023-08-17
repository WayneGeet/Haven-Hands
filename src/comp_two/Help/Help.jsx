import {items} from "../data";
import HelpCard from "./HelpCard";

const Help = () => {
  return (
    <section className="py-10 bg-white -z-[100]">
        <section className="container max-w-[1000px] flex flex-col justify-center items-center gap-10 mt-0">
            <div className="w-[20rem]"><h2 className="text-3xl text-[--dark-blue] font-bold">We are in a Mission to Help the <em className="bg-orange-400">Helpless</em></h2></div>
            <article className="md:gap-8 md:grid md:grid-cols-3 flex flex-col justify-center items-center gap-8">
                {items?.map(({icon, title, content}, i) => <div><HelpCard icon={icon} title={title} content={content}/></div>)}
            </article>
        </section>
    </section>
  )
}

export default Help