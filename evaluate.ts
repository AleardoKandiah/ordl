import { Accuracy } from "./components/Game";

export const evaluate = (
  guessWord: string,
  solutionWord: string
): Accuracy[] => {
  // accuracies[i] corresponds to letter i
  const accuracies: Accuracy[] = new Array(guessWord.length).fill("wrong");

  // Need frequency map to handle letter duplicates in guess/solution word.
  // e.g., with solutionWord "ae" and guessWord "ee", the boxes should be "grey, green".
  const freqs: { [key: string]: number } = {};
  for (const letter of solutionWord) {
    if (!(letter in freqs)) {
      freqs[letter] = 0;
    }
    freqs[letter]++;
  }

  // Mark the right letters in right pos.
  for (let i = 0; i < guessWord.length; i++) {
    if (guessWord[i] === solutionWord[i]) {
      freqs[guessWord[i]]--;
      accuracies[i] = "right";
    }
  }

};
