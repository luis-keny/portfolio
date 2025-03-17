import { UserCheck2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="pt-14">
      <div className="flex gap-2 items-center">
        <UserCheck2 size={32} />
        <h2 className="text-3xl font-semibold">About</h2>
      </div>
      <main className="mt-8 description space-y-3">
      <p>
        I am <span>Luis Keny</span>, passionate about <span>programming</span> and <span>software development</span>. 
        Throughout my career, I have had the opportunity to develop multiple <span>web applications</span>, 
        which has allowed me to immerse myself in real <span>technological solutions</span>.
      </p>
      <p>
        I enjoy <span>programming</span> because it allows me to break down <span>complex problems</span> in 
        a more granular way and find <span>effective solutions</span>. In addition, I enjoy a good 
        cup of <span>coffee</span> while I work, which helps me stay focused and motivated.
      </p>
      <p>
        I am excited to continue my <span>professional journey</span> and contribute to 
        the <span>technology community</span>.
      </p>
      </main>
    </section>
  )
}