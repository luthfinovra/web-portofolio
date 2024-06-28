import { Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function Navbar() {
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
    <nav className='py-10 flex justify-between items-center'>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-purple-400 -rotate-2 hover:-rotate-2 hover:scale-110 hover:decoration-green-400 transition-all'>nvrluthfi 🫡</h1>

        <div className='flex items-center gap-5'>
            {socials.map((social, index)=>{
                const Icon = social.Icon;

                return (
                <Link 
                    href={social.link} 
                    key={index}
                    aria-label={social.label}
                    target="_blank">
                    <Icon className='size-5 hover:scale-125 transition-all'/>
                </Link>);
            })}
        </div>
    </nav>
  )
}
