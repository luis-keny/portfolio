import JavaScript from "../icons/IconJavascript";
import BaseTag from "./BaseTag";

export default function JavascriptTag({ name = 'Javascript' }: { name?: string }) {
  return (
    <BaseTag className="border-yellow-400 dark:border-yellow-400  bg-yellow-900 dark:bg-yellow-800/20 text-white">
      <JavaScript/>
      <span>{name}</span>
    </BaseTag>
  );
}