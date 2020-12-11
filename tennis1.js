const DEUCE = "Deuce";
const LOVE = "Love";
const FIFTEEN = "Fifteen";
const THIRTY = "Thirty";
const FORTY = "Forty";
const PLAYER_ONE_WINNER = "Win for player1"
const PLAYER_ONE_ADVANTAGE = "Advantage player1"
const PLAYER_TWO_WINNER = "Win for player2"
const PLAYER_TWO_ADVANTAGE = "Advantage player2"

function haveAnyPlayerAdvantage(playerOneScore, playerTwoScore) {
    return playerOneScore >= 4 || playerTwoScore >= 4
}

function haveSamePoints(playerOneScore, playerTwoScore) {
    return playerOneScore === playerTwoScore;
}

function haveBothPlayerMoreThanThreePoints (playerOneScore, playerTwoScore) {
    return haveSamePoints(playerOneScore, playerTwoScore) && playerOneScore >= 3
}
function parseSingleScore(scoreNumber) {
    if (scoreNumber === 0) return LOVE
    if (scoreNumber === 1) return FIFTEEN
    if (scoreNumber === 2) return THIRTY

    return FORTY
}

function calculatePlayerWinnerOrAdvantage(playerOneScore, playerTwoScore) {
    const countPointDifferences = playerOneScore - playerTwoScore;
    if (countPointDifferences === 1) return PLAYER_ONE_ADVANTAGE;
    if (countPointDifferences === -1) return PLAYER_TWO_ADVANTAGE;
    if (countPointDifferences >= 2) return PLAYER_ONE_WINNER;

    return PLAYER_TWO_WINNER;
}

module.exports = function getScore(playerOneScore, playerTwoScore) {
    if (haveBothPlayerMoreThanThreePoints(playerOneScore, playerTwoScore)) {
        return DEUCE;
    }
    if (haveSamePoints(playerOneScore, playerTwoScore)) {
        return parseSingleScore(playerOneScore) + "-All"
    }
    if (haveAnyPlayerAdvantage(playerOneScore, playerTwoScore)) {
        return calculatePlayerWinnerOrAdvantage(playerOneScore, playerTwoScore)
    }

    return parseSingleScore(playerOneScore) + "-" + parseSingleScore(playerTwoScore)
}