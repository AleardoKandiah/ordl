import { useState } from "react";
import { InfoPage } from "./InfoPage";
import { InfoSvg } from "./Svg";

// Upon page load
export const Nav = () => {
  const [isInfoPageOpen, setIsInfoPageOpen] = useState(false);
  return (
    <div className="flex justify-between items-center">
      <h1 className="py-3 px-4">ordl</h1>
      <button
        className="p-2 text-stone-700 mr-2"
        aria-label="Info"
        onClick={() => setIsInfoPageOpen(true)}
      >
        <InfoSvg />
        {/* page open */}
      </button>
      {isInfoPageOpen && <InfoPage onClose={() => setIsInfoPageOpen(false)} />}
    </div>
  );
};
