import { createContext, ReactNode, useState } from "react";

export const SolutionWordContext = createContext({
  solutionWord: "",
  setSolutionWord: (_: string) => {},
});
