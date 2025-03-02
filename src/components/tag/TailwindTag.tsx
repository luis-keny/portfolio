import TailwindCSS from "../icons/IconTailwind";
import BaseTag from "./BaseTag";

export default function TailwindTag() {
  return (
    <BaseTag className="border-sky-400 dark:border-sky-400  bg-sky-900 dark:bg-sky-800/20 text-white">
      <TailwindCSS/>
      <span>Tailwind</span>
    </BaseTag>
  );
}