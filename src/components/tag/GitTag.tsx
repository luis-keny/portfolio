import Git from "../icons/IconGit";
import BaseTag from "./BaseTag";

export default function GitTag() {
  return (
    <BaseTag className="border-amber-400 dark:border-amber-400  bg-amber-900 dark:bg-amber-800/20 text-white">
      <Git/>
      <span>Git</span>
    </BaseTag>
  );
}