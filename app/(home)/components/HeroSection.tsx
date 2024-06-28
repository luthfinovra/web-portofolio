import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
  return (
    <div className='min-h-[60vh] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between'>
        <div className='space-y-10 text-center lg:text-left'>
            <h1 className='text-4xl lg:text-7xl font-bold'>
                Hello 👋!
                <br /><span className=' underline underline-offset-8 decoration-purple-400'>{"I'm Luthfi."}</span>
            </h1>

            <p className='md:w-96 text-lg text-gray-300'>
                {"I'm a Back-End Developer and have some experienced in Machine Learning If you are interested to connect with me dont forget to contact me"}
            </p>

            <Link className='inline-block group' href={"mailto:luthfinovra19@gmail.com"}>
            <div>
                <h1 className='text-3xl font-bold group-hover:scale-105'>Contact Me 📬</h1>
                <div className='w-40 h-1 bg-purple-400 rounded-full group-hover:bg-green-400 group-hover:translate-x-2 group-hover:h-1 transition-all'></div>
                <div className='w-40 h-1 bg-green-400 rounded-full translate-x-2 group-hover:bg-purple-400 group-hover:translate-x-0 group-hover:h-1 transition-all'></div>
            </div>
            </Link>

        </div>
            <div>
                <div className='size-72 space-y-3 -rotate-[30deg] relative'>
                    <div className='flex gap-3 translate-x-8'>
                        <div className='size-32 rounded-2xl bg-purple-400'></div>
                        <div className='size-32 rounded-full bg-green-400'></div>
                    </div>
                    <div className='flex gap-3 -translate-x-8'>
                        <div className='size-32 rounded-2xl bg-green-400'></div>
                        <div className='size-32 rounded-full bg-purple-400'></div>
                    </div>

                    <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
                </div>
            </div>
    </div>
  )
}
