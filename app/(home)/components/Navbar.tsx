import React from 'react'

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 px-5 text-white">
            <div className="x-12 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8">
                <div className="flex items-center justify-between h-16">
                    <span className="text-2xl dark:text-white font-semibold">nvr_luthfi</span>
                    <div className="flex space-x-4 font-bold dark:text-white">
                        <a href="#" className='dark:hover:text-violet-300'>Home</a>
                        <a href="#" className=' dark:hover:text-violet-300'>Projects</a>
                        <a href="#" className=' dark:hover:text-violet-300'>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}