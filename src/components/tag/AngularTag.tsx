import Angular from "../icons/IconAngular";
import BaseTag from "./BaseTag";

export default function AngularTag() {
  return (
    <BaseTag className="border-rose-400 dark:border-rose-400  bg-rose-950 dark:bg-rose-800/20 text-white bg-">
      <Angular/>
      <span>Angular</span>
    </BaseTag>
  );
}