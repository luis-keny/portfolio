import GitLab from "../icons/IconGitLab";
import BaseTag from "./BaseTag";

export default function GitLabTag() {
  return (
    <BaseTag className="border-amber-400 dark:border-amber-400  bg-amber-900 dark:bg-amber-800/20 text-white">
      <GitLab/>
      <span>GitLab</span>
    </BaseTag>
  );
}