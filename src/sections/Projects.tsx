import { CardProject } from "@/components/CardProject";
import { CardProject as CardProjectType } from "@/interfaces/card-project";
import { Code2 } from "lucide-react";

import AngularCalendar from '@/public/projects/angular-calendar.jpg';
import AdrLuceros from '@/public/projects/adrluceros-landingpage.jpg';
import PlayRunJs from '@/public/projects/play-run-js.png';
import AmazonRefuge from '@/public/projects/amazon-refuge.png'

import AngularTag from "@/components/tag/AngularTag";
import GitTag from "@/components/tag/GitTag";
import TypescriptTag from "@/components/tag/TypescriptTag";
import CssTag from "@/components/tag/CssTag";
import TailwindTag from "@/components/tag/TailwindTag";
import HtmlTag from "@/components/tag/HtmlTag";
import JavascriptTag from "@/components/tag/JavascriptTag";

const PROJECTS: CardProjectType[] = [
  {
    title: "Angular Calendar",
    description: "is a customizable and responsive calendar component built with Angular 18, inspired by Google Calendar. It allows developers to manage events with multiple views (day, week, month, year).",
    image: AngularCalendar,
    tags: [
      <AngularTag key={`calendar-angular`}/>,
      <GitTag key={`calendar-git`}/>,
      <TypescriptTag key={`calendar-ts`}/>,
      <CssTag key={`calendar-css`}/>,
      <HtmlTag key={`calendar-html`}/>,
    ],
    linkDemo: "https://angular-calendar-ten.vercel.app/",
    linkRepo: "https://github.com/luis-keny/angular-calendar",
  },
  {
    title: "Play Run JS",
    description: "The project executes JavaScript code and displays the console.log on the web. Also, the code that is written is passed in the URL using Base64, which makes it easy to share.",
    image: PlayRunJs,
    tags: [
      <HtmlTag key={`amazon-refuge-html`}/>,
      <CssTag key={`amazon-refuge-css`}/>,
      <TailwindTag key={`amazon-refuge-tailwind`}/>,
      <JavascriptTag name="Vanilla" key={`amazon-refuge-js`}/>,
      <GitTag key={`amazon-refuge-git`}/>,
    ],
    linkRepo: "https://github.com/luis-keny/playrunjs",
    linkDemo: "https://playrunjs.vercel.app/",
  },
  {
    title: "Amazon refuge - landing page",
    description: "Website showcasing the benefits and services of the Amazon refuge business, available in both English and Spanish for broader accessibility. It also includes PHP integration with PHPMailer for email functionality.",
    image: AmazonRefuge,
    tags: [
      <GitTag key={`amazon-refuge-git`}/>,
      <HtmlTag key={`amazon-refuge-html`}/>,
      <CssTag key={`amazon-refuge-css`}/>,
      <JavascriptTag key={`amazon-refuge-js`}/>,
    ],
    linkRepo: "https://github.com/luis-keny/amazon-refuje-landing/tree/php",
    linkDemo: "https://amazon-refuje-landing.vercel.app/",
  },
  {
    title: "AdrLuceros - landing page",
    description: "Informative website of the benefits and services offered by AdrLuceros Transportation Company. It is made with Server Side Rendering for a smooth routing for the user.",
    image: AdrLuceros,
    tags: [
      <AngularTag key={`adr-luceros-angular`}/>,
      <GitTag key={`adr-luceros-git`}/>,
      <TypescriptTag key={`adr-luceros-ts`}/>,
      <CssTag key={`adr-luceros-css`}/>,
      <HtmlTag key={`adr-luceros-html`}/>,
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