import {FaHome} from "react-icons/fa";
import {FaUtensils} from "react-icons/fa";
import {FaChurch} from "react-icons/fa";
import {BiDonateHeart} from "react-icons/bi"

export const navItems = [{item:"Home",path:"/"},
{item:"About", path:"/about"},
{item:"Contact", path:"/contact"},
{item:"Blogs", path:"/blogs"},
{item:"FAQ", path:"/faq"},
{item:"Sponsor", path:"/sponsor"},
{item:"Learn More", path:"/leanmore"}
  ]

export const info = [
  {title:"Shelter", 
  info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab necessitatibus illum!",
  icon:<FaHome/>
  },
  {title:"Food", 
  info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab necessitatibus illum!",
  icon:<FaUtensils/>
  },
  {title:"Teaching", 
  info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab necessitatibus illum!",
  icon:<FaChurch/>
  },
  {title:"Clothing", 
  info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab necessitatibus illum!",
  icon:<BiDonateHeart/>
  }
  
]
