import React, {useState} from 'react';
import Progs from "../components/Progs.jsx";
import {programs} from "../others/data";
import {Elderly, Children, Disabled, Homeless} from "../components/WhatWeDo/LeftSide.jsx"
import Photo_A from "../images/elderly1.jpg";
import Photo_B from "../images/children.jpg";
import Photo_C from "../images/abled_differently.jpg";
import Photo_D from "../images/homeless.jpg";

const Programs = () => {
  const items = [
    {left:<Children/>, right:Photo_B},
    {left:<Disabled/>, right:Photo_C},
    {left:<Elderly/>, right:Photo_A},
    {left:<Homeless/>, right:Photo_D},
  ]

    return (
    <section className="container">
      {items.map(({left, right}, i) => <div className="gap-20 mb-28"><Progs left={left} right={right} /></div>)}
      <Progs/>
    </section>
  )
}

export default Programs