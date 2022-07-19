import { useIsMobile } from "../hooks";
import { Accuracy } from "./Game";

// add interactive keyboard
// mark on keyboard keys which are defined accuracy {right, alomst, wrong}

const LAYOUT = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "backspace"],
  ["", "z", "x", "c", "v", "b", "n", "m", "submit", ""],
];

const Key = ({
  keyValue,
  onClick,
  accuracy,
}: {
  keyValue: string;
  onClick: () => void;
  accuracy?: Accuracy;
}) => {
  return (
    <button
      className={`${
        keyValue !== "" && "border bg-white"
      } border-stone-700 w-[42px] h-[42px] uppercase text-stone-500 hover:text-black ${
        accuracy === "right"
          ? "bg-green-400"
          : accuracy === "almost"
          ? "bg-yellow-300"
          : accuracy === "wrong"
          ? "bg-stone-200"
          : ""
      }`}
      onClick={onClick}
    >
      {keyValue === "backspace" ? "⌫" : keyValue === "submit" ? "→" : keyValue}
    </button>
  );
};
