import { motion } from 'framer-motion'
import React from 'react'

export default function ExperienceSection() {
    return (
        <div className='h-full flex flex-col justify-center
        px-12 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-16 sm:py-28 '>
            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.1,
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                className="text-slate-50 text-opacity-75 font-bold text-xl lg:text-3xl sm:text-2xl md:text-3xl gradient-text mt-2 text-left"
            >
                My Experiences
            </motion.h3>
        </div>
    )
}
