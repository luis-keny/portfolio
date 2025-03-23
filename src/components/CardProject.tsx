import { MagicCard } from "@/components/magicui/magic-card";
import type { CardProject } from "@/interfaces/card-project";
import { Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export function CardProject({ title, description, image, tags, linkRepo, linkDemo, className = '' }: CardProject) {
  return (
    <article className={`rounded-2xl border border-teal-700/30 dark:border-teal-500/30 bg-transparent overflow-hidden ${className}`}>
      <MagicCard gradientColor={"#00bba733"} className="bg-transparent h-full">
        <div>
          <div className="flex flex-col items-center justify-center">
            <Image src={image} alt={title} width={400} height={400} className="object-cover w-full"/>
          </div>
          <div className="py-3 px-3 space-y-2">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
            </h1>
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag, index) => <li key={index}>{tag}</li>)}
            </ul>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
            <div className="flex gap-2">
              {
                linkRepo && (
                  <Link 
                    href={linkRepo} 
                    target="_blank" 
                    className="flex gap-2 items-center bg-teal-800/20 border border-teal-400 w-fit px-4 py-2 rounded-lg hover:bg-teal-800/30 dark:hover:bg-teal-700/30 transition-all"
                  >
                    <Github/>
                    <span>Repository</span>
                  </Link>
                )
              }
              {
                linkDemo && (
                  <Link 
                    href={linkDemo} 
                    target="_blank" 
                    className="flex gap-2 items-center bg-teal-800/20 border border-teal-400 w-fit px-4 py-2 rounded-lg hover:bg-teal-800/30 dark:hover:bg-teal-700/30 transition-all"
                  >
                    <LinkIcon/>
                    <span>Demo</span>
                  </Link>
                )
              }
            </div>
          </div>
        </div>
      </MagicCard>
    </article>
  );
}
