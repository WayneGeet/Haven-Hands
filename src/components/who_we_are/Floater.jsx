
const Floater = ({img, position}) => {
  return (
    <div className={`rounded-full z-50 w-20 h-20 border-t-4 border-l-4
     border-orange-400 overflow-hidden absolute ${position} `}>
        <img className="object-fit" src={img} alt="floating image" />
    </div>
  )
}

export default Floater