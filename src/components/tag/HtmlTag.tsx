import HTML5 from "../icons/IconHtml";
import BaseTag from "./BaseTag";

export default function HtmlTag() {
  return (
    <BaseTag className="border-red-400 dark:border-red-400  bg-red-900 dark:bg-red-800/20 text-white">
      <HTML5/>
      <span>Html</span>
    </BaseTag>
  );
}