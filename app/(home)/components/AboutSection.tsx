import { motion } from 'framer-motion'
import React from 'react'

export default function AboutSection() {
    return (
        <div className="relative h-[100vh] z-10  flex flex-col justify-center h-sm:justify-start
        px-12 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-16 sm:py-28  gap-2">
            <motion.div className='flex-1 flex flex-col items-start py-4'
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.1,
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <h3 className="text-slate-50 text-opacity-75 font-bold text-xl lg:text-3xl sm:text-2xl md:text-3xl gradient-text px-2 md:px-8"
                >
                    Credits
                </h3>
                <div className="space-y-4 pt-8 px-2 md:px-12 text-md lg:text-lg text-gray-300">
                    <div>
                        <p>
                            <b className='text-slate-50'>Main Framework:</b> This website is built using <b className='text-slate-50'>Next.js</b> with <b className='text-slate-50'>React</b>, and <b className='text-slate-50'>TypeScript</b> as its programming languages.
                        </p>
                    </div>
                    <div>
                        <p>
                            <b className='text-slate-50'>UI Library:</b> The user interface components are built using <b className='text-slate-50'>Tailwind CSS</b> with <b className='text-slate-50'>shadcn/ui</b> and <b className='text-slate-50'> Acernity UI </b> component library.
                        </p>
                    </div>
                    <div>
                        <p>
                            <b className='text-slate-50'>Hosting:</b> This website is hosted on <b className='text-slate-50'>Vercel</b>, a platform for frontend frameworks and static sites.</p>
                    </div>
                    <div>
                        <p>
                            <b className='text-slate-50'>Other Resources:</b> The icons used throughout the website are from the <b className='text-slate-50'>React Simple Icon</b> library, while the typography in this website uses <b className='text-slate-50'>Inter</b> font from <b className='text-slate-50'>Google Fonts</b>.
                        </p>
                    </div>
                </div>
            </motion.div>
            <footer className='text-gray-300 text-center py-8'>Copyright © 2024 - Luthfi Novra</footer>
        </div>
    )
}
