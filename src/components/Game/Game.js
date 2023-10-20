import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { range } from "/src/utils";
import { NUM_OF_GUESSES_ALLOWED } from "/src/constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState(range(0, NUM_OF_GUESSES_ALLOWED).map(() => ""));
  const [guessesNum, setGuessesNum] = useState(0);

  function handleSubmitedGuess(guess) {
    let newGuesses = [...guesses];
    newGuesses[guessesNum] = guess;
    setGuessesNum(guessesNum + 1);
    setGuesses(newGuesses);
  }

  return <>
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput handleSubmitedGuess={handleSubmitedGuess} />
  </>;
}

export default Game;
