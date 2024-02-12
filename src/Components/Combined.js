import React from 'react'
import Education from './Education'
import Experience from './Experince'
import { motion } from 'framer-motion'


export default function Combined() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}}
     className='row m-lg-5'>
        <motion.div  initial={{ opacity: 0,x:-50 }}
          animate={{ opacity: 1,x:0 }}
          exit={{ opacity: 0,x:-50 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 1 },
          }} 
           className="col-lg-6">
            <Education/>
        </motion.div>
        <motion.div  initial={{ opacity: 0,x:50 }}
          animate={{ opacity: 1,x:0 }}
          exit={{ opacity: 0,x:50 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 1 },
          }} className="col-lg-6">
            <Experience/>
        </motion.div>
    </motion.div>
  )
}
