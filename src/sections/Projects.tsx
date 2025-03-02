import { CardProject } from "@/components/CardProject";
import { CardProject as CardProjectType } from "@/interfaces/card-project";
import { Code2 } from "lucide-react";

import AngularCalendar from '@/public/projects/angular-calendar.jpg';
import AdrLuceros from '@/public/projects/adrluceros-landingpage.jpg';
import AmazonRefuje from '@/public/projects/amazonrefuje-landingpage.jpg'

import AngularTag from "@/components/tag/AngularTag";
import GitTag from "@/components/tag/GitTag";
import TypescriptTag from "@/components/tag/TypescriptTag";
import CssTag from "@/components/tag/CssTag";
import HtmlTag from "@/components/tag/HtmlTag";
import AstroTag from "@/components/tag/AstroTag";
import JavascriptTag from "@/components/tag/JavascriptTag";

const PROJECTS: CardProjectType[] = [
  {
    title: "Angular Calendar",
    description: "is a customizable and responsive calendar component built with Angular 18, inspired by Google Calendar. It allows developers to manage events with multiple views (day, week, month, year) without the need for additional libraries.",
    image: AngularCalendar,
    tags: [
      <AngularTag key={`angular-tag-angular-calendar`}/>,
      <GitTag key={`git-tag-angular-calendar`}/>,
      <TypescriptTag key={`typescript-tag-angular-calendar`}/>,
      <CssTag key={`css-tag-angular-calendar`}/>,
      <HtmlTag key={`html-tag-angular-calendar`}/>,
    ],
    linkDemo: "https://angular-calendar-ten.vercel.app/",
    linkRepo: "https://github.com/luis-keny/angular-calendar",
  },
  {
    title: "Amazon refuje - landing page",
    description: "Informative website about the benefits and services offered by the amazon refuje business. In addition, it is translated into English and Spanish language to make it easier to read for foreign customers and Spanish speaking people.",
    image: AmazonRefuje,
    tags: [
      <AstroTag key={`astro-tag-angular-calendar`}/>,
      <GitTag key={`git-tag-angular-calendar`}/>,
      <HtmlTag key={`html-tag-angular-calendar`}/>,
      <CssTag key={`css-tag-angular-calendar`}/>,
      <JavascriptTag key={`javascript-tag-angular-calendar`}/>,
    ],
    linkDemo: "https://mount-sinai-refuge.vercel.app/",
  },
  {
    title: "AdrLuceros - landing page",
    description: "Informative website of the benefits and services offered by AdrLuceros Transportation Company. It is made with Server Side Rendering for a smooth routing for the user.",
    image: AdrLuceros,
    tags: [
      <AngularTag key={`angular-tag-angular-calendar`}/>,
      <GitTag key={`git-tag-angular-calendar`}/>,
      <TypescriptTag key={`typescript-tag-angular-calendar`}/>,
      <CssTag key={`css-tag-angular-calendar`}/>,
      <HtmlTag key={`html-tag-angular-calendar`}/>,
    ],
    linkDemo: "https://adrluceros.com/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="pt-14">
      <div className="flex gap-2 items-center">
        <Code2 size={32}/>
        <h2 className="text-3xl font-semibold">Projects</h2>
      </div>
      <main className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-10">
        {
          PROJECTS.map((project, index) => (
            <CardProject key={index} {...project} />
          ))
        }
      </main>
    </section>
  );
}