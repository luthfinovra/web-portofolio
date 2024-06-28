import { FlipWords } from '@/components/ui/flip-words'
import { motion } from 'framer-motion';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { SiGithub, SiLinkedin, SiMinutemailer } from 'react-icons/si';

export default function HeroSection() {
    const words = ["Reality", "Innovation", "Creation", "Possibility", "Inspiration"]
    const socials = [
        {
            link: "https://www.linkedin.com/in/luthfi-novra/",
            label: "Linkedin",
            Icon: SiLinkedin,

        },
        {
            link: "https://github.com/luthfinovra/",
            label: "Github",
            Icon: SiGithub,
        }
    ]
    return (
        <div
            className="h-full flex flex-col justify-center
        px-12 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-16 sm:py-28 "
        >
            <motion.span
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.1,
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                className="text-violet-400 font-mono font-bold"
            >
                Hello, I am
            </motion.span>
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.1,
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                className="text-slate-50 text-opacity-75 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
            >
                Luthfi Novra.
            </motion.h1>
            <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeInOut",
                }}
                className="text-violet-200 text-opacity-50 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
            >
                Turn Your Imagination into Reality
                {/* <span className='text-violet-300'><FlipWords words={words} /></span> */}
            </motion.h2>

            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="text-gray-300 text-sm md:text-lg sm:text-md mt-10 tracking-wider w-5/6"
            >
                I&apos;m a final year Informatics student at Telkom University with a strong interest in
                Back-End Development and Machine Learning.
                I have experience in developing and implementing various software solutions, as well as hands-on experience in machine learning projects.
                I am eager to contribute my skills and expand my knowledge in these fields.
                {/* <br className="2xl:block hidden" />creating and deploying them, as well as implementing the
          front-end components to enable seamless user interactions. */}
            </motion.h3>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-12 px-1"
            >
                <div className='flex items-center gap-5'>
                    {socials.map((social, index) => {
                        const Icon = social.Icon;

                        return (
                            <Link
                                href={social.link}
                                key={index}
                                aria-label={social.label}
                                target="_blank">
                                <Icon className='text-slate-300 hover:text-green-300 size-5 md:size-8 transition-all' />
                            </Link>);
                    })}
                    <Link
                        href={"mailto:luthfinovra19@gmail.com"}
                        target='_blank'>
                        <SiMinutemailer className='text-slate-300 hover:text-green-300 size-5 md:size-8 transition-all' />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
