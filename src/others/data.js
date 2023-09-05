import {FaHome} from "react-icons/fa";
import {FaUtensils} from "react-icons/fa";
import {FaChurch} from "react-icons/fa";
import {BiDonateHeart} from "react-icons/bi";
import image1 from "../images/kid_working.jpg";
import image2 from "../images/kid_looking.jpg";
import image3 from "../images/friends.jpg";
import image4 from "../images/kids_sitting.jpg";

// programs
import children from "../images/children.jpg";
import disabled from "../images/blind_person.jpg";
import elderly from "../images/elderly1.jpg";
import homeless from "../images/homeless.jpg";

// info
import kid_prog from "../comp_two/imagesHH/kids_prog.jpg";
import disabled_prog from "../comp_two/imagesHH/disabled_prog.jpg";
import old_prog from "../comp_two/imagesHH/old_prog.jpg";
import homeless_prog from "../comp_two/imagesHH/homeless_prog.jpg";


export const navItems = [{item:"Home",path:"/"},
{item:"About", path:"/about"},
{item:"Contact", path:"/contact"},
{item:"Programs", path:"/programs"},
{item:"FAQ", path:"/faq"},
{item:"Donate", path:"/donate"},
{item:"Partner", path:"/contact"}
  ]

export const info1 = [
  {title:"Shelter", 
  image:image1,
  content:"We provide shelter to kids so that they also can be warm.",
  icon:<FaHome/>
  },
  {title:"Food", 
  image:image2,
  content:"We try as much as possible to provide the children with meals...",
  icon:<FaUtensils/>
  }
]

export const info2 = [
  {title:"Teaching", 
  image:image3,
  content:"Haven hands believe that every child should receive proper...",
  icon:<FaChurch/>
  },
  {title:"Clothing", 
  image:image4,
  content:"Our 'valisha programme' enable the community to play their part... ",
  icon:<BiDonateHeart/>
  }
]

export const testimonials = [
  {image:elderly,
  name:"Castro Oduor",
  comment:"If you have a model that is defined using an abstract base class, you don’t have to do anything special to" +
  "serialize that model."},
  {image:children,
  name:"Paul Thuku",
  comment:"If you have a model that is defined using an abstract base class, you don’t have to do anything special to" +
  "serialize that model."},
  {image:homeless,
  name:"Elizabeth Wanjiku",
  comment:"If you have a model that is defined using an abstract base class, you don’t have to do anything special to" +
  "serialize that model."},
  {image:disabled,
  name:"Samuel Muganda",
  comment:"If you have a model that is defined using an abstract base class, you don’t have to do anything special to" +
  "serialize that model."}
]

export const faqs = [
  {id:1, 
  question:"Where are we situated?",
  answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea blanditiis quod saepe rerum, dignissimos tempore. Facilis officia doloribus natus! m dolor sit amet consectetur adipisicing elit. Quis ea blanditiis quod saepe rerum, digniss"
},

  {id:2, 
  question:"How many people have we enrolled in the program?",
  answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea blanditiis quod saepe rerum, dignissm dolor sit amet consectetur adipisicing elit. Quis ea blanditiis quod saepe rerum, dignissimos tempore. Facilis officia doloribus natus!"
},
  {id:3, 
  question:"Where do we see ourselves in the next 5 years?",
  answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea blanditiis quod saepe rerum, dignissimos tempore. Facilis officia doloribus natus!"
},
  {id:4, 
  question:"What are the different ways of donating?",
  answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea blanditiis quod saepe rerum, dignissimos tempore. Facilis officia doloribus natus!"
},
  {id:5, 
  question:"How do we select the people to help?",
  answer:"Lorem ipsum dolor sit ametm dolor sit amet consectetur adipisicing elit. Quis ea blanditiis quod saepe rerum, digniss consectetur adipisicing elit. Quis ea blanditiis quod saepe rerum, dignissimos tempore. Facilis officia doloribus natus!"
},
  {id:6, 
  question:"How are the funds managed and who is accountable? Who is running the organization?",
  answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea blanditiis quod saepe rerum, dignissimos tempore. Facilis officia doloribus natus!"
}
]



export const programs = [
  {
    name:"Elderly",
    image:old_prog,
    title:"At Hopewell Haven Centre, we value those who have gone before us",
    content:"Making sure that the elderly are looked after and provided for. We are championing community strength because we can achieve many great things when we come together.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam cumque ut distinctio."
  },
  {
    name:"Children",
    image:kid_prog,
    title:"Protecting the future by protecting our children",
    content:"Committed to safeguarding the future by nurturing and protecting our children. We strive to provide a nurturing    environment, empower them with education, support their physical and emotional well-being, advocate for their rights, and foster a safe and inclusive. "
  },
  {
    name:"Disabled",
    image:disabled_prog,
    title:"Disability is not inability.",
    content:"Committed to safeguarding the future by nurturing and protecting our children. We strive to provide a nurturing environment, empower them with education, support their physical and emotional well-being, advocate for their rights, and foster a safe and inclusive community where they can thrive, grow, and reach their full potential."
  },
  {
    name:"Homeless",
    image:homeless_prog,
    title:"At Hopewell Haven Centre we believe that every person deserves a plae to call home",
    content:"Providing shelters to the less fortunate in the community. Ours is to give to anyone who is need. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident asperiores recusandae, corrupti velit itaque ipsum facere perspiciatis a laudantium amet."
  },
]