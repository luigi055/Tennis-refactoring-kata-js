const LOVE = "Love";
const FIFTEEN = "Fifteen";
const THIRTY = "Thirty";
const FORTY = "Forty";
const DEUCE = "Deuce";
const ADVANTAGE = "Advantage"

const PLAYER_ONE = "player1"
const PLAYER_TWO = "player2"

function getScore(playerOneScore, playerTwoScore) {
    const scores = [LOVE, FIFTEEN, THIRTY, FORTY];
    const winningPlayer = playerOneScore > playerTwoScore ? PLAYER_ONE : PLAYER_TWO
    const areEquals = playerOneScore === playerTwoScore;
    const isThereAdvantage = (playerOneScore + playerTwoScore >= 6)
    const isThereWinner = Math.abs(playerOneScore - playerTwoScore) > 1
    const isDeuce = areEquals && isThereAdvantage

    if (areEquals && !isThereAdvantage) {
        return scores[playerOneScore] + "-All"
    }
    if ((playerOneScore < 4 && playerTwoScore < 4) && !areEquals) {
        return scores[playerOneScore] + "-" + scores[playerTwoScore]
    }
    if (isDeuce) {
        return DEUCE;
    }

    return `${isThereWinner
                ? "Win for"
                : ADVANTAGE
            } ${winningPlayer}`;

}


module.exports = getScore;

