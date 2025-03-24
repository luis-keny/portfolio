import Vue from "../icons/IconVue";
import BaseTag from "./BaseTag";

export default function VueTag() {
  return (
    <BaseTag className="border-emerald-400 dark:border-emerald-400  bg-emerald-900 dark:bg-emerald-800/20 text-white">
      <Vue/>
      <span>Vue.js</span>
    </BaseTag>
  );
}