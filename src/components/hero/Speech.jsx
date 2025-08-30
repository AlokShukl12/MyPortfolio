import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'motion/react'

const Speech = () => {
  return (
    <motion.div animate={{opacity:[0,1]}} transition={{duration:1}} className="bubbleContainer">
      <div className="bubble">
       <TypeAnimation
      sequence={[
        1000,
        'Hello, I am Alok Shukla.',
        1000, 
        'I am a MERN Developer with 2 years of experience.',
        1000,
       
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
    />
      </div>
      <img src="man.png" alt="" />
    </motion.div>
  )
}

export default Speech
