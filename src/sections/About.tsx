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
          I am <span>Luis Keny</span>, passionate about <span>programming and software development.</span>
          Throughout my career, I have had the opportunity to <span>develop multiple web applications</span>,
          which has allowed me to dive into real technological solutions.
        </p>
        <p>
          Currently, together with a group of friends, we are <span>creating a consulting company dedicated
            to software development</span>, with the goal of offering <span>innovative solutions</span> to various
          sectors. I enjoy programming because it allows me to break down complex problems in a more granular way
          and find effective solutions.
        </p>
        <p>
          In addition, I enjoy a good cup of coffee while working, which helps me stay focused and motivated.
          <span>I am excited to continue my professional journey and contribute to the tech community.</span>
        </p>
      </main>
    </section>
  )
}