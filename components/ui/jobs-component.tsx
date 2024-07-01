"use client"

import { useState } from "react"
import Image from "next/image"
import { Avatar } from '@/components/ui/avatar';

type Job = {
  companyName: string;
  logo: string;
  jobTime: string;
  jobTitle: string;
  jobDescription: string;
  responsibilities: string[];
};

const jobs: Job[] = [
  {
    companyName: "Telkom University",
    logo: "/logos/telulogo.svg",
    jobTime: "Sep 2021 - Present",
    jobTitle: "Bachelor Degree in Informatics",
    jobDescription:
      "As an undergraduate student in the School of Informatics at Telkom University, I have developed a strong foundation in various programming languages and software development methodologies. My coursework has equipped me with skills in areas such as database design, web development, and machine learning. Maintaining a high GPA of 3.99/4.0, I have demonstrated both my academic dedication and technical proficiency.",
    responsibilities: [],
  },
  {
    companyName: "Computing Laboratory Telkom University",
    logo: "/logos/computinglogo.svg",
    jobTime: "Dec 2023 - Present",
    jobTitle: "Laboratory Assistant",
    jobDescription:
      "At the Computing Laboratory, I served as a Media Division Laboratory Assistant, where I designed and managed social media feeds to engage students and promote laboratory activities. Additionally, I organized and conducted tutoring sessions on data structures and algorithms for over 30 students, enhancing their understanding and performance in these critical areas. This role honed my communication and instructional skills.",
    responsibilities: [],
  },
  {
    companyName: "Bangkit Academy 2024",
    logo: "/logos/bangkitlogo.svg",
    jobTime: "Feb 2024 - Jun 2024",
    jobTitle: "Machine Learning Cohort",
    jobDescription:
      "As a participant in the Bangkit Academy Machine Learning cohort, led by Google, Tokopedia, Gojek, and Traveloka, I collaborated with peers to design and implement an object detection model using TensorFlow for our capstone project. This program deepened my understanding of machine learning algorithms and practical implementation techniques. It also enhanced my teamwork and project management skills within a high-performance environment.",
    responsibilities: [],
  },
  {
    companyName: "Informatics Laboratory Telkom University",
    logo: "/logos/iflablogo.svg",
    jobTime: "Feb 2024 - Jun 2024",
    jobTitle: "Computer Network Practicum Assitant",
    jobDescription:
      "In my role as a Computer Network Practicum Assistant at the Informatics Laboratory, I tutored and organized grading for over 100 students, ensuring they grasped complex networking concepts. My responsibilities included preparing instructional materials and providing hands-on assistance during lab sessions. This experience improved my ability to convey technical knowledge effectively and manage large groups of students.",
    responsibilities: [],
  },
];

export default function JobComponent() {
  const [selectedJob, setSelectedJob] = useState(0);
  return (
    <section className="px-4 2xl:px-4 xl:px-6 lg:px-8 md:px-4 sm:px-2 py-8 sm:py-4 gap-2">
      <div className="container grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        <div className="space-y-2">
          {jobs.map((job, index) => (
            <div key={index} className="grid gap-2">
              <JobCard
                job={job}
                isSelected={selectedJob === index}
                onClick={() => setSelectedJob(index)}
              />
              <div className="h-[1px] w-full bg-muted" />
            </div>
          ))}
        </div>
        <div className="space-y-8 hidden md:block">
          {selectedJob >= 0 && selectedJob < jobs.length && (
            <JobDetails job={jobs[selectedJob]} />
          )}
        </div>
      </div>
    </section>
  );
}

type JobCardProps = {
  job: Job;
  isSelected: boolean;
  onClick: () => void;
};

function JobCard({ job, isSelected, onClick }: JobCardProps) {
  return (
    <div
      className={`flex flex-col items-start gap-4 cursor-pointer rounded-md py-3 transition-colors hover:bg-muted/50 ${isSelected ? "bg-muted" : ""
        }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 px-4">
        <Avatar className="bg-white text-primary-foreground flex items-center justify-center">
          <Image src={job.logo} alt="logo" width={20} height={20} className="size-8" />
        </Avatar>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{job.companyName}</h3>
          <p className="text-sm text-muted-foreground">{job.jobTime}</p>
        </div>
      </div>
      {isSelected && (
        <div className="grid gap-4 md:hidden">
          <JobDetails job={job} />
        </div>
      )}
    </div>
  );
}

type JobDetailsProps = {
  job: Job;
};

function JobDetails({ job }: JobDetailsProps) {
  return (
    <div className="grid gap-4 px-4">
      <h3 className="text-xl font-bold">{job.jobTitle}</h3>
      <div className="prose text-muted-foreground text-gray-300">
        <p>{job.jobDescription}</p>
        {job.responsibilities.length > 0 && (
          <ul>
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
