import { createContext, ReactNode, useState } from "react";

// store solution word
export const SolutionWordContext = createContext({
  solutionWord: "",
  setSolutionWord: (_: string) => {},
});
