import TypeScript from "../icons/IconTypescript";
import BaseTag from "./BaseTag";

export default function TypescriptTag() {
  return (
    <BaseTag className="border-sky-400 dark:border-sky-400  bg-sky-900 dark:bg-sky-800/20 text-white">
      <TypeScript/>
      <span>Typescript</span>
    </BaseTag>
  );
}