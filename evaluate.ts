import { Accuracy } from "./components/Game";

export const evaluate = (
  guessWord: string,
  solutionWord: string
): Accuracy[] => {
  // accuracies[i] corresponds to letter i
  const accuracies: Accuracy[] = new Array(guessWord.length).fill("wrong");


  const freqs: { [key: string]: number } = {};
  for (const letter of solutionWord) {
    if (!(letter in freqs)) {
      freqs[letter] = 0;
    }
    freqs[letter]++;
  }
}
