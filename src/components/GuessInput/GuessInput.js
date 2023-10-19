import React, { useState } from 'react';

function GuessInput() {
    const [guess, setGuess] = useState("");

    return (
        <form className="guess-input-wrapper" onSubmit={(e) => {
            e.preventDefault();
            console.log({ guess });
            setGuess("");
        }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text" value={guess} pattern="[a-zA-Z]{5}"
                title="5 letter word" required onChange={(e) => setGuess(e.target.value.toUpperCase())} />
        </form>
    );
}

export default GuessInput;
