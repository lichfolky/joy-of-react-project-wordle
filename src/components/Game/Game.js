import React, { useState } from 'react';

import { WORDS } from '../../data';
import { sample } from '../../utils';
import { range } from "/src/utils";
import { NUM_OF_GUESSES_ALLOWED } from "/src/constants";

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState(range(0, NUM_OF_GUESSES_ALLOWED).map(() => ""));
  const [guessesNum, setGuessesNum] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  function handleSubmitedGuess(guess) {
    let newGuessesNum = guessesNum + 1;

    if (newGuessesNum <= NUM_OF_GUESSES_ALLOWED && !gameEnded) {
      let newGuesses = [...guesses];
      newGuesses[guessesNum] = guess;
      setGuesses(newGuesses);
      setGuessesNum(newGuessesNum);
      if (newGuessesNum == NUM_OF_GUESSES_ALLOWED) {
        setGameEnded(true);
      }
      if (guess == answer) {
        setHasWon(true);
        setGameEnded(true);
      }
    }
    else {
      setGameEnded(true);
    }
  }
  // TODO: disable input
  return <>
    {gameEnded && < Banner hasWon={hasWon} guesses={guessesNum} solution={answer} />}
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput handleSubmitedGuess={handleSubmitedGuess} />
  </>;
}

export default Game;
