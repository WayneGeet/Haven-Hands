export const h1Animate = {
    previously:{opacity:0},
    now:{opacity:1,
    transition:{duration:0.8,type:"tween", stiffness:200}
}
}
export const pAnimate = {
    previously:{opacity:0},
    now:{opacity:1,
    transition:{type:"spring", duration:1}
    }
}

export const containerVariants = {
    previously:{opacity:0 },
    now:{opacity:1,
    transition:{duration:1, when:"beforeChildren", staggerChildren:0.7 }
    }
}

export const ctaVariants = {
    previously:{opacity:0},
    now:{opacity:1, transition:{duration:1}}
}

export const gridVariants = {
    previously:{opacity:0 },
    now:{opacity:1,
    transition:{duration:1, when:"beforeChildren", staggerChildren:0.7 }
    }
}

export const squareVariants = {
    previously:{opacity:0},
    now:{opacity:1,
    transition:{type:"spring", duration:1}
    }
}

export const slideVariant = {
    hidden:{
      x:[500]
    },
    visible:{
      x:[0, 500],
      transition:{
        type:"ease-in-out",
        delay:0.1,
        duration:0.8,
      }
    }
  }

export const containerVariant = {
  hidden:{opacity:0, x:-10},
  visible:{
      opacity:1,x:0,
      transition:{
          type:"spring", delay:0.5
  }
  }
}