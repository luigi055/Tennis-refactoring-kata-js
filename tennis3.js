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
    const countDifference = Math.abs(playerOneScore - playerTwoScore)
    const winningPlayer = playerOneScore > playerTwoScore ? PLAYER_ONE : PLAYER_TWO
    const areEquals = playerOneScore === playerTwoScore;
    const isAdvantage = playerOneScore >= 4 || playerTwoScore >= 4
    const isGame = isAdvantage && countDifference >= 2
    const isDeuce = playerOneScore >= 3 && playerOneScore >= 3

    if (areEquals && !isDeuce) return scores[playerOneScore] + "-All"
    if (areEquals && isDeuce) return DEUCE
    if (isGame) return `Win for ${winningPlayer}`
    if (isAdvantage) return `${ADVANTAGE} ${winningPlayer}`

    return scores[playerOneScore] + "-" + scores[playerTwoScore]


}


module.exports = getScore;

