import ThemeToggle from "@/components/ThemeToggle";

const LINKS = [
  {
    label: "experience",
    title: "Experience",
    href: "#experience"
  },
  {
    label: "projects",
    title: "Projects",
    href: "#projects"
  },
  {
    label: "about",
    title: "About",
    href: "#about"
  },
  {
    label: "contact",
    title: "Contact",
    href: "mailto:luis.lucero03@outlook.com"
  }
]

export default function Header() {
  return (
    <header className="py-4 px-4 fixed w-full backdrop-blur-2xl sm:w-fit sm:left-1/2 sm:top-2 sm:-translate-x-1/2 z-50 sm:py-2 sm:rounded-2xl sm:border sm:border-gray-800">
      <nav className="mx-auto flex gap-4 items-center justify-between *:transition-[color]">
        {
        LINKS.map((link) => (
          <a 
            key={`${link.label}-link`} 
            aria-label={link.label}
            href={link.href} 
            className="hover:text-teal-400 active:scale-95"
          >
            {link.title}
          </a>
        ))
        }
        <ThemeToggle/>
      </nav>
    </header>
  );
}