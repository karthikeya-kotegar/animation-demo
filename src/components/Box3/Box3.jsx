import React, { useState } from 'react'
import { motion } from "framer-motion"

function Box3() {
    // Variants   in framer motion
    const boxVariant = {
        // custom properties
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.5,
                when: "beforeChildren" //animate before children i.e list
            }
        }
    }

    const listVariant = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            staggerChildren: 0.2
        }
    }

    return (
        <div className='box-container App'>
            <motion.div
                className='box'
                variants={boxVariant}
                animate="visible" //from box variant
                initial="hidden"

            >
                {
                    [1, 2, 3].map(box => {
                        return (
                            <motion.li
                                className='boxItem'
                                variants={listVariant} //from list variant
                                // animate="visible" 
                                // initial="hidden"
                            >

                            </motion.li>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}

export default Box3
