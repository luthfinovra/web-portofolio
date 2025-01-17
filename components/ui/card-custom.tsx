import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { SiGithub } from 'react-icons/si';

type CustomCardProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    badges: string[];
    link?: string;
};

export default function CustomCard({ imageSrc, imageAlt, title, description, badges, link }: CustomCardProps) {
    const cardContent = (
        <>
            <div className="relative">
                <AspectRatio ratio={16 / 9}>
                    <Image
                        src={imageSrc}
                        layout="fill"
                        objectFit="cover"
                        alt={imageAlt}
                        className="rounded-t-lg"
                    />
                </AspectRatio>
                <div className="absolute inset-0 bg-muted/50 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-slate-50 text-lg font-semibold flex items-center gap-1">
                        <SiGithub className="inline-block" /> Visit Repository
                    </span>
                </div>
            </div>
            <div className="md:px-4 z-10 flex flex-col">
                <CardHeader>
                    <CardTitle className="text-slate-50 text-md md:text-xl">{title}</CardTitle>
                    <CardDescription className="py-2">
                        {description}
                    </CardDescription>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {badges.map((badge, index) => (
                            <Badge key={index} variant="outline">{badge}</Badge>
                        ))}
                    </div>
                </CardHeader>
            </div>
        </>
    );

    return (
        link ? (
            <Link href={link} target='_blank' passHref className="max-w-sm cursor-pointer flex flex-col h-full">
                <Card className="group flex flex-col h-full bg-muted/50 z-1">
                    {cardContent}
                </Card>
            </Link>
        ) : (
            <Card className="group max-w-sm flex flex-col h-full">
                {cardContent}
            </Card>
        )
    );
}
