import ExperienceItem from "@/components/ExperienceItem";
import CssTag from "@/components/tag/CssTag";
import GitLabTag from "@/components/tag/GitLabTag";
import GitTag from "@/components/tag/GitTag";
import HtmlTag from "@/components/tag/HtmlTag";
import JavascriptTag from "@/components/tag/JavascriptTag";
import OracleTag from "@/components/tag/OracleTag";
import VueTag from "@/components/tag/VueTag";
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
        "I am part of the IT team and actively participate in the resolution of code issues and in the modernization of projects assigned to me, collaborating in the integration of new technologies and processes that optimize the flexibility and maintenance of applications.",
      link: "https://www.goodhope.org.pe/",
      tags: [
        <VueTag key="GoodHope-vue"/>,
        <HtmlTag key="GoodHope-html"/>,
        <CssTag key="GoodHope-css"/>,
        <JavascriptTag key="GoodHope-js"/>,
        <GitTag key="GoodHope-git"/>,
        <GitLabTag key="GoodHope-gitlab"/>,
        <OracleTag key="GoodHope-oracle"/>,
      ],
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