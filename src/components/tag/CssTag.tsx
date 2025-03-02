import CSS from "../icons/IconCss";
import BaseTag from "./BaseTag";

export default function CssTag() {
  return (
    <BaseTag className="border-blue-400 dark:border-blue-400  bg-blue-900 dark:bg-blue-800/20 text-white">
      <CSS/>
      <span>Css</span>
    </BaseTag>
  );
}