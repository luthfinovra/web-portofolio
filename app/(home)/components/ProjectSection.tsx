import { motion } from 'framer-motion';
import React from 'react';
import { Button } from '@/components/ui/button';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import CustomCard from '@/components/ui/card-custom';
import Link from 'next/link';
import CardCustom from '@/components/ui/card-custom';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function ProjectSection() {

    const skills = {
        'Programming Languages': [
            'python',
            'javaScript',
            'c++',
            'java',
            'go',
            'typeScript'
        ],
        'Web Development': [
            'node.js',
            'next.js',
            'react',
            'tailwind',
            'bootstrap'
        ],
        'Machine Learning': [
            'tensorFlow',
            'keras',
            'scikit-learn',
            'pandas',
            'matplotlib',
        ],
        'Database Management': [
            'mySQL',
            'mongoDB',
            'postgresSQL'
        ],
        'Other': [
            'postman',
            'figma',
            'azure',
        ]
    }

    const projects = {
        'Web Portofolio': {
            'description': 'My personal website portofolio built using Next.js',
            'badges': ['Next.js', 'Tailwind', 'React', 'TypeScript'],
            'repository': 'https://github.com/luthfinovra/web-portofolio',
            'img': 'web-portofolio.webp',
        },
        'Cinelog': {
            'description': 'Web based film catalog and recomendation application inspired by letterboxd',
            'badges': ['Node.js', 'Bootstrap', 'MongoDB'],
            'repository': 'https://github.com/luthfinovra/cinelog',
            'img': 'cinelog.webp',
        },
        'Linkyi Shop': {
            'description': 'Web bio link and product catalog for Final Capstone Product Bangkit Academy 2024',
            'badges': ['TensorFlow', 'Pandas', 'Matplotlib'],
            'repository': 'https://github.com/Linkyi-shop',
            'img': 'linkyi.webp',
        },
        'Quiz Application': {
            'description': 'Desktop based quiz application where the systems can provide ability for teacher and student to organized a quiz',
            'badges': ['Java', 'MySQL'],
            'repository': 'https://github.com/luthfinovra/tubes_pbo_kuisApp',
            'img': 'quiz-app.webp',
        },
        'Contact App Web API': {
            'description': 'Web API with CRUD operation for contact application which serves both website and mobile application.',
            'badges': ['Node.js', 'MongoDB'],
            'repository': 'https://github.com/luthfinovra/contact-app-web-api',
            'img': 'contact-app.webp',
        },
        'More Projects': {
            'description': 'You can visit my Github to know more about my projects',
            'badges': ['GitHub'],
            'repository': 'https://github.com/luthfinovra',
            'img': 'github.webp',
        },
    }
    return (
        <div className='relative h-[100vh] z-10 flex flex-col text-left px-12 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-16 sm:py-28 gap-2 my-2 ml-0 sm:ml-16 md:ml-0'>
            <motion.div className='flex-1 flex flex-col items-start'
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.1,
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <h3 className="text-slate-50 text-opacity-75 font-bold text-xl lg:text-3xl sm:text-2xl md:text-3xl gradient-text my-2"
                >
                    My Skills
                </h3>
                <p className="text-gray-300 md:text-xl/relaxed">
                    Here are the technologies and tools I&apos;m proficient in.
                </p>
                <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 pt-6">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className='px-3'>
                            <h3 className="text-slate-50 text-lg font-semibold">
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {skillList.map((skill, index) => (
                                    <TooltipProvider key={index}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Avatar className="bg-white text-primary-foreground flex items-center justify-center">
                                                    <Image
                                                        src={`/icons/${skill}.svg`}
                                                        alt={skill}
                                                        width={20}
                                                        height={20}
                                                        className='h-5 w-5'
                                                    />
                                                </Avatar>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                {skill.charAt(0).toUpperCase() + skill.slice(1)}
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* My Projects Section */}
            <motion.div className='flex-1 flex flex-col items-start py-8'
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.3,
                    duration: 0.5,
                    ease: "easeInOut",
                }}>
                <h3
                    className="text-slate-50 text-opacity-75 font-bold text-xl lg:text-3xl sm:text-2xl md:text-3xl gradient-text py-8"
                >
                    My Projects
                </h3>
                <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2'>
                    {Object.entries(projects).map(([title, project], index) => (
                        <CustomCard
                            key={index}
                            imageSrc={`/projects/${project.img}`}
                            imageAlt={title}
                            title={title}
                            description={project.description}
                            badges={project.badges}
                            link={project.repository}
                        />
                    ))}
                </div>
                {/* Add content for My Projects here */}
            </motion.div>
        </div >
    );
}
