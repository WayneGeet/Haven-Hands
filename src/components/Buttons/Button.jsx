const Button = ({children, px, py, bg, border, handleEnter, handleLeave, color}) => {
  return (
    <div>
        <button onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={`flex items-center btn__sponsor ${px} ${py} ${color} text-base md:text-lg rounded-xl font-semibold ${bg} ${border}`}>{children}</button>
    </div>
  )
}

export default Button