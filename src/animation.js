export const h1Animate = {
    previously:{y:-100,opacity:0},
    now:{y:0, opacity:1,
    transition:{duration:0.8,type:"tween", stiffness:200}
}
}
export const pAnimate = {
    previously:{opacity:0, y:-100},
    now:{opacity:1, y:1,
    transition:{type:"spring", duration:1}
    }
}

export const containerVariants = {
    previously:{opacity:0, y:-500},
    now:{opacity:1, y:0,
    transition:{duration:1, when:"beforeChildren", staggerChildren:0.7 }
    }
}

export const cardWrapperVariants = {
    previously:{opacity:0},
    now:{opacity:1,
    transition:{staggerChildren:0.7, when:"beforeChildren"}}
}

export const cardVariants = {
    previously:{scale:[0], opacity:0},
    now:{opacity:1, scale:[0.4, 0.1, 1],
    transition:{duration:0.5, type:"spring", stiffness:120}}
}