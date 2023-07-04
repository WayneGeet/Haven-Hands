import {useState, useEffect} from "react";
import {Link, NavLink} from "react-router-dom";
// import GoThreeBars from "react-icons/go";
import logo from "../../images/logo.jpg";
import {motion} from "framer-motion"
import {navItems} from "../../data"

import "./Nav.css";
 

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY >= 80){
        setScrolled(true)
      }
      else{
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {window.removeEventListener("scroll", handleScroll)}
  },[scrolled])

  const textVariant = {
    hidden:{opacity:0, y:-20},
    visible:{opacity:1, y:0},
    transition:{duration:.5, type:"spring"}
  }

  const navVariant = {
    hidden:{opacity:0, y:70},
    visible:{opacity:1, y:0},
    transition:{duration:1, type:"spring"}
  }
  return (
    <motion.nav 
    initial={"hidden"}
    animate={"visible"}
    transition={{staggerChildren:0.6}}
    className={`${scrolled ? "md:bg-[var(--bright-cyan)] z-[1000] transition-all duration-500 text-blue" : "md:bg-transparent" }
    fixed z-50 w-screen top-0 left-0 bg-blue-400 `}>

      <motion.div
      variants={textVariant}
      // Navbar container
      className="md:flex md:flex-row md:items-center md:max-w-[1200px] md:px-20 relative
      mx-auto flex items-center px-4 z-[99]">

        {/* Logo : flex item 1 */}
        <div className="w-10 h-10 rounded-full">
          <Link onClick={()=>{setIsActive(false)}} to = "/">
            <img className="hide-bg" src={logo} alt="Logo" />
          </Link> 
        </div>
        
        {/* Nav items: flex item 2 */}
        <motion.ul 
        variants={navVariant}
        className={`${isActive ? "flex":"hidden"} flex-col absolute top-full right-0 w-1/2 
         md:flex md:flex-row md:items-center md:basis-full md:gap-7 md:relative `}>
          {navItems.map(({item, path}, key) => {
            return(
            <li key={key} 
            onClick = {()=>setIsActive((prev)=>!prev)}
            className={`${key===0 || item==='Sponsor' ? "md:ml-auto" : ""} text-[var(--grayish-blue)] border border-white
             flex justify-center bg-red-300 md:bg-transparent md:border-none md:py-3`}>

              <NavLink
              className={({isActive}) => isActive ? `${item !== "Sponsor" ? "text-orange-400 font-bold py-2" : "text-[var(--grayish-blue)] basis-full flex justify-center py-3 md:rounded-xl md:ml-auto md:bg-white md:text-blue-700 md:px-5"}` : `${item === "Sponsor" ?
              "md:rounded-xl md:ml-auto md:bg-white md:text-blue-700 md:px-5 transition-colors duration-500 hover:text-yellow-300 hover:bg-[#C2E812] ": "navItem"} basis-full flex justify-center py-3`} to={path}>{item}</NavLink>
            </li>
            )
          })}
        </motion.ul>

        <div onClick = {()=>setIsActive((prev)=>!prev)}
        className="flex gap-[2px] items-center p-2 ml-auto md:hidden">
          <h3 className="uppercase text-white font-semibold text-xs">menu</h3>
          {/* Bars */}
          {isActive ? 
          <div className="pl-2 cursor-pointer ">
          <div className="w-4 h-[3px] bg-white rounded-sm rotate-45"></div>
          <div className="w-4 h-[3px] bg-white rounded-sm -rotate-45 relative top-[-2px]"></div>
        </div>
        :
          <div className="flex flex-col gap-[2px] pl-2 cursor-pointer ">
            <div className="w-4 h-[3px] bg-white rounded-sm"></div>
            <div className="w-4 h-[3px] bg-white rounded-sm"></div> 
            <div className="w-4 h-[3px] bg-white rounded-sm"></div>
          </div>
          
          
          }
        </div>
        {/* <GoThreeBars/> */}

      </motion.div>
    </motion.nav>
  )
}

export default Nav




