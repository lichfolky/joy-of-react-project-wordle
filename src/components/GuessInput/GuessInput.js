import React, { useState } from 'react';

function GuessInput({ handleSubmitedGuess }) {
    const [guess, setGuess] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        handleSubmitedGuess(guess);
        setGuess("");
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text" value={guess} pattern="[a-zA-Z]{5}"
                title="5 letter word" required onChange={(e) => setGuess(e.target.value.toUpperCase())} />
        </form>
    );
}

export default GuessInput;
