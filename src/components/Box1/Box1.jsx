import React, { useState } from 'react'
import { motion } from "framer-motion"

function Box1() {

    const [isAnimating, setIsAnimating] = useState(false)

    return (
        <div className='box-container App'>
            <motion.div
                className='box'
                animate={{
                    x: isAnimating ? 1205 : 0,
                    opacity: isAnimating ? 1 : 0.5,
                    // backgroundColor: "teal",
                    // scale: 1.5
                    rotate: isAnimating ? 360 : 0
                }}
                initial={{
                    opacity: 0.1
                }}
                transition={{
                    // type:"tween",
                    // duration: 2,
                    type: "spring",
                    stiffness: 60,
                    // damping: 5
                }}

                onClick={() => setIsAnimating(!isAnimating)}                 
            >
            </motion.div>
        </div>
    )
}

export default Box1