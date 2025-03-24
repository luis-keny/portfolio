"use client";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const THEMES = ["light", "dark", "system"];

export default function ThemeToggle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [systemDark, setSystemDark] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const getThemePreference = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  };

  const updateTheme = (theme: string, isSystemDark: boolean) => {
    const isDark = theme === "dark" || (theme === "system" && isSystemDark);
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );

    if (theme !== "system") {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.removeItem("theme");
    }
    setCurrentTheme(theme);
  };

  useEffect(() => {
    const savedTheme = getThemePreference();
    setCurrentTheme(savedTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");    
    setSystemDark(mediaQuery.matches);

    updateTheme(savedTheme, mediaQuery.matches);

    const handleSystemChange = (e: MediaQueryListEvent) => {
      setSystemDark(e.matches);
      if (currentTheme === "system") {
        updateTheme("system", systemDark);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleOpenMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative ml-1 mr-1 w-fit">
      <button
        ref={buttonRef}
        id="theme-toggle-btn"
        className="border-none flex hover:scale-125 transition cursor-pointer size-5"
        onClick={handleOpenMenu}
      >
        <span className="sr-only">Elige el tema</span>
        <Sun
          className="absolute size-5 transition-all"
          style={{ scale: currentTheme === "light" ? 1 : 0 }}
        />
        <Moon
          className="absolute size-5 transition-all"
          style={{ scale: currentTheme === "dark" ? 1 : 0 }}
        />
        <Monitor
          className="absolute size-5 transition-all"
          style={{ scale: currentTheme === "system" ? 1 : 0 }}
        />
      </button>

      <div
        ref={menuRef}
        id="themes-menu"
        className={`absolute scale-80 top-9 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md transition-transform ${
          isMenuOpen ? "scale-100 opacity-100 visible" : "scale-90 opacity-0 invisible"
        }`}
      >
        <ul>
          {THEMES.map((theme) => (
            <li
              key={theme}
              className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm capitalize"
              onClick={() => updateTheme(theme, systemDark)}
            >
              {theme}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
