"use client"

import { useState } from "react"
import Image from "next/image"
import { Avatar } from '@/components/ui/avatar';

type Honors = {
    title: string;
    honors: string;
    time: string;
    issuer: string;
};

const honors: Honors[] = [
    {
        "title": "Telkomsel Scholarship Program",
        "honors": "Awardee",
        "time": "Sep 2021",
        "issuer": "Telkomsel",
    },
    {
        "title": "InnovatIF Competitive Programming Competition 2021",
        "honors": "3rd Winner",
        "time": "Dec 2021",
        "issuer": "HIMA IF Telkom University",
    },
    {
        "title": "FindIT Competitive Programming 2024",
        "honors": "Finalist",
        "time": "May 2024",
        "issuer": "KMTETI FT UGM",
    },
    {
        "title": "Interfest Competitive Programming Competition 2022",
        "honors": "Finalist",
        "time": "May 2022",
        "issuer": "HIMA IF Telkom University",
    },
    {
        "title": " Indonesia National Contest ICPC Asia Jakarta",
        "honors": "Participant",
        "time": "Nov 2023",
        "issuer": "ICPC Foundation",
    },
];

export default function HonorsComponent() {
    const [selectedJob, setSelectedJob] = useState(0);
    return (
        <section className="px-4 2xl:px-4 xl:px-6 lg:px-8 md:px-4 sm:px-2 py-8 sm:py-4 gap-2">
            <div className="container max-w-5xl gap-8 lg:gap-12">
                <div className="space-y-2">
                    {honors.map((honor, index) => (
                        <div key={index} className="grid gap-2">
                            <HonorCard
                                honor={honor}
                            />
                            <div className="h-[1px] w-full bg-muted" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

type HonorCardProps = {
    honor: Honors;
};

function HonorCard({ honor }: HonorCardProps) {
    return (
        <div
            className={`flex flex-col items-start gap-4 cursor-default rounded-md py-3`}
        >
            <div className="flex items-center gap-4 px-4">
                <div className="space-y-1">
                    <h3 className="text-md lg:text-lg font-semibold text-slate-50">{honor.honors} - {honor.title}</h3>
                    <p className="text-sm text-muted-foreground text-gray-300">{honor.time} - {honor.issuer}</p>
                </div>
            </div>
        </div>
    );
}