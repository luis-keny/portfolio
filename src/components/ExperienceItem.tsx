import type { Experience } from "@/interfaces/experience";
import { ChevronRight } from "lucide-react";

export default function ExperienceItem({ title, company, description, link, date,}: Experience) {
  return (
    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 md:grid-cols-5 md:gap-10 md:space-x-4">
      <div className="relative pb-4 md:col-span-2">
        <div className="sticky top-0">
          <span className="text-teal-600 dark:text-teal-400 -left-[44px] absolute rounded-full text-5xl">
            &bull;
          </span>

          <h3 className="text-xl font-bold text-teal-700 dark:text-teal-400">{title}</h3>
          <h4 className="font-semibold text-xl text-gray-900 dark:text-white">
            {company}
          </h4>
          <time className="p-0 m-0 text-sm text-gray-500/80 dark:text-gray-400/80">
            {date}
          </time>
        </div>
      </div>

      <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
        <p>{description}</p>
        
        {link && (
          <a
            href={link}
            role="link"
            target="_blank"
            className="inline-flex items-center text-lg font-medium text-teal-500 dark:text-teal-200 dark:hover:text-teal-300 hover:text-teal-700"
          >
            Learn more
            <ChevronRight size={24}/>
          </a>
        )}
      </div>
    </div>
  );
};
