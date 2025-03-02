import { UserCheck2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="pt-14">
      <div className="flex gap-2 items-center">
        <UserCheck2 size={32}/>
        <h2 className="text-3xl font-semibold">About</h2>
      </div>
      <main className="mt-8 description space-y-3">
        <p>
          Soy <span>Luis Keny</span>, apasionado por la <span>programación y el desarrollo de software. </span>
          A lo largo de mi carrera, he tenido la oportunidad de <span>desarrollar múltiples aplicaciones web </span> 
          , lo que me ha permitido profundizar en soluciones tecnológicas reales.
        </p>
        <p>
          Actualmente, junto con un grupo de amigos, estamos <span>creando una empresa consultora dedicada 
          al desarrollo de software</span>, con el objetivo de ofrecer <span>soluciones innovadoras</span> a 
          diversos sectores. Me gusta programar porque me permite descomponer problemas complejos de manera más 
          granular y encontrar soluciones efectivas.
        </p>
        <p>
          Además, disfruto de una buena taza de café mientras trabajo, lo que me ayuda a mantenerme enfocado 
          y motivado. <span>Estoy entusiasmado por continuar mi camino profesional y aportar a la comunidad tecnológica.</span>
        </p>
      </main>
    </section>
  )
}