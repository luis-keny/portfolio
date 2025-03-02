import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="py-4 px-4 fixed w-full backdrop-blur-2xl sm:w-fit sm:left-1/2 sm:top-2 sm:-translate-x-1/2 z-50 sm:py-2 sm:rounded-2xl sm:border sm:border-gray-800">
      <nav className="mx-auto flex gap-4 items-center justify-between *:transition-[color]">
        <a href="#experience" className="hover:text-teal-400 active:scale-95">Experience</a>
        <a href="#projects" className="hover:text-teal-400 active:scale-95">Projects</a>
        <a href="#about" className="hover:text-teal-400 active:scale-95">About</a>
        <a href="#contact" className="hover:text-teal-400 active:scale-95">Contact</a>
        <ThemeToggle/>
      </nav>
    </header>
  );
}