import { useContext } from "react";
import { evaluate } from "../evaluate";
import { Accuracy } from "./Game";
import { SolutionWordContext } from "./SolutionWordContext";

const Letter = ({ accuracy, value }: { accuracy: Accuracy; value: string }) => (
  <div
    className={`
      ${
        accuracy === "unknown"
          ? "bg-white"
          : accuracy === "right"
          ? "bg-green-400"
          : accuracy === "almost"
          ? "bg-yellow-300"
          : accuracy === "wrong"
          ? "bg-stone-200"
          : ""
      } 
      border 
      border-stone-700 
      w-[64px] 
      h-[64px] 
      flex
      justify-center
      items-center
      uppercase
    `}
  >
    <span className="text-xl">{value}</span>
  </div>
);


