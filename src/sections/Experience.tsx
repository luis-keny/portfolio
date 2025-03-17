import ExperienceItem from "@/components/ExperienceItem";
import type { Experience } from "@/interfaces/experience";
import { BriefcaseBusiness } from "lucide-react";

const EXPERIENCES: Experience[] = [
    // {
    //   date: "March 2025 - Present",
    //   title: "Co-Founder & Software Developer",
    //   company: "Linked SAC",
    //   description:
    //     "I collaborate in the organization of business meetings, requirements analysis and development of technology solutions. My main focus is on frontend development, database management and application deployment, working as part of a team to drive projects from conception to implementation.",
    // },
    {
      date: "January 2025 - Present",
      title: "Frontend Developer",
      company: "GoodHope",
      description:
        "Responsible for migrating web applications from a legacy system that was a set of several monolithic spring boot projects with java to a client server structure using vue and spring boot with java.",
      link: "https://www.goodhope.org.pe/",
    },
  ]

export default function Experience() {
  return (
    <section id="experience" className="pt-14">
      <div className="flex gap-2 items-center">
        <BriefcaseBusiness size={32}/>
        <h2 className="text-3xl font-semibold">Experience</h2>
      </div>
      <div>
      <ol className="relative mt-10">
        {
            EXPERIENCES.map((experience) => (
            <li key={experience.title}>
                <ExperienceItem {...experience} />
            </li>
            ))
        }
      </ol>
      </div>
    </section>
  )
}