import { NUM_OF_GUESSES_ALLOWED } from "/src/constants";

// TODO: use composition and create 3 components. Banner, WinBanner e LostBanner
function Banner({ hasWon, guesses, solution }) {
    if (hasWon) {
        return (
            <div className="happy banner">
                <p>
                    <strong>Congratulations!</strong> Got it in
                    <strong> {guesses} guesses</strong>.
                </p>
            </div>);
    } else {
        return (
            <div className="sad banner">
                <p>Sorry, the correct answer is <strong>{solution}</strong>.</p>
            </div>
        );
    }
}

export default Banner;