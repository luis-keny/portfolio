"use client";
 
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import { GridPattern } from "@/components/magicui/grid-pattern";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";

const SOCIALS_MEDIA = [
  {
    name: "Github",
    href: "https://github.com/luis-keny",
    icon: <Github/>,
    target: "_blank",
    movilHidden: true,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/luis-keny-lucero-balvin-403a8520a/",
    icon: <Linkedin/>,
    target: "_blank",
  },
  {
    name: "Contact me",
    href: "mailto:luis.lucero03@outlook.com",
    icon: <Mail/>,
  },
];

export default function Hero() {
  return (
    <section className="relative flex w-full h-[500px] items-center justify-center overflow-hidden p-20">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col justify-center gap-3 max-w-[550px]">
        <div className="flex flex-col gap-4 items-start sm:flex-row sm:items-end">
          <h1 className="text-5xl font-semibold">{"Hi, I'm Luis Keny"}</h1>
          <span className="relative text-sm text-teal-800 dark:text-teal-200 px-3 font-medium backdrop-blur-2xl py-1 rounded-xl">
            Full Stack Developer
            <BorderBeam
              duration={6}
              size={400}
              className="from-transparent via-red-700 dark:via-red-500 to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={400}
              className="from-transparent via-blue-700 dark:via-blue-500 to-transparent"
            />
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-xl">{"Specialist in software development, creating modern and attractive websites that meet the user's needs."}</p>
        <div className="flex gap-x-3 gap-y-2 flex-wrap">
          {
            SOCIALS_MEDIA.map(({name, icon, href, target, movilHidden})=>(
            <Link 
              key={`${name}-social-media`}
              href={href} 
              target={target} 
              className={`flex gap-2 items-center bg-teal-800/20 border border-teal-400 w-fit px-4 py-2 
                rounded-xl hover:bg-teal-800/30 dark:hover:bg-teal-700/30 transition-all ${movilHidden && "hidden sm:flex"}`}
            >
              {icon}
              <span>{name}</span>
            </Link>
            ))
          }
        </div>
      </div>
    </section>
  );
}