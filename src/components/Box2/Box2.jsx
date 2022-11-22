import React, { useState } from 'react'
import { motion } from "framer-motion"

function Box2() {

    return (
        <div className='box-container App'>
            <motion.div
                className='box'

                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9
                }}
                // drag="x" ////only x-axis
                drag  //drag any axis
                dragConstraints={{
                    right: 20,
                    left: -20,
                    top: 5,
                    bottom: 5
                }}
            >

            </motion.div>
        </div>
    )
}

export default Box2