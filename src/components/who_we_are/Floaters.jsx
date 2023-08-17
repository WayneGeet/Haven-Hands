import React from 'react'
import Floater from "./Floater";
import image1 from "../../images/teen1.jpg"
import image2 from "../../images/teen2.jpg"
import image3 from "../../images/blob2.png"

const Floaters = () => {
  return (
    <div className="">
        <Floater img={image1} position="top-0 right-1/3"/>
        <Floater img={image2} position="bottom-0 left-0"/>
        <Floater img={image3} position="top-o left-0"/>
    </div>
  )
}

export default Floaters