import Oracle from "../icons/IconOracle";
import BaseTag from "./BaseTag";

export default function OracleTag() {
  return (
    <BaseTag className="border-red-500 dark:border-red-500  bg-red-950 dark:bg-red-950/20 text-white">
      <Oracle/>
      <span>Oracle</span>
    </BaseTag>
  );
}