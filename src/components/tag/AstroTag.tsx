import Astro from "../icons/IconAstro";
import BaseTag from "./BaseTag";

export default function AstroTag() {
  return (
    <BaseTag className="border-stone-400 dark:border-stone-400  bg-stone-900 dark:bg-stone-800/20 text-white">
      <Astro/>
      <span>Astro</span>
    </BaseTag>
  );
}