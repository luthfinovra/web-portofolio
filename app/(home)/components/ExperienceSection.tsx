import HonorsComponent from '@/components/ui/honors-component'
import JobsComponent from '@/components/ui/jobs-component'
import { motion } from 'framer-motion'
import React from 'react'

export default function AboutSection() {
    return (
        <div className='relative h-[100vh] z-10 flex flex-col text-left 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-16 sm:py-28 gap-2'>
            <motion.div className='flex-1 flex flex-col items-start'
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.1,
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <h3 className="text-slate-50 text-opacity-75 font-bold text-xl lg:text-3xl sm:text-2xl md:text-3xl gradient-text px-8 py-2 "
                >
                    My Experiences
                </h3>
                <JobsComponent />
            </motion.div>

            {/* My Projects Section */}
            <motion.div className='flex-1 flex flex-col items-start'
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.3,
                    duration: 0.5,
                    ease: "easeInOut",
                }}>
                <h3
                    className="text-slate-50 text-opacity-75 font-bold text-xl lg:text-3xl sm:text-2xl md:text-3xl gradient-text px-8 py-2"
                >
                    Honor and Achievements
                </h3>
                <HonorsComponent />
            </motion.div>
        </div >
    )
}
