import React from 'react';
import { checkGuess } from "/src/game-helpers";


function GuessResults({ guesses, answer }) {
    return (
        <div className="guess-results">{
            guesses.map((guess, index) => {
                return (
                    <p className="guess" key={index}>
                        {checkGuess(guess, answer).map(({ letter, status }, index) => (
                            <span className={status ? `cell ${status}` : `cell`} key={index}>{letter}</span>)
                        )}
                    </p>
                );
            })
        }
        </div>);
}

export default GuessResults;
