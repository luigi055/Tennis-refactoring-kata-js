const LOVE = "Love";
const FIFTEEN = "Fifteen";
const THIRTY = "Thirty";
const FORTY = "Forty";
const DEUCE = "Deuce";
const ADVANTAGE = "Advantage"
const PLAYER_ONE = "player1"
const PLAYER_TWO = "player2"
const WIN_MESSAGE = "Win for"

function parseScore(scoreNumber) {
    if (scoreNumber === 0) return LOVE;
    if (scoreNumber === 1) return FIFTEEN;
    if (scoreNumber === 2) return THIRTY;
    return FORTY;
}

/**
 * GetScore function
 * @param {number} playerOneScore 
 * @param {number} playerTwoScore 
 * Time Complexity: worst case O(1)
 * Space Complexity: Worst Case O(1)
 */
module.exports = function getScore(playerOneScore, playerTwoScore) {
    const printWinningPlayer = playerOneScore > playerTwoScore ? PLAYER_ONE : PLAYER_TWO
    const countDifference = Math.abs(playerOneScore - playerTwoScore)
    const hasAnyPlayerAdvantage = playerOneScore >= 4 || playerTwoScore >= 4
    const areEquals = playerOneScore === playerTwoScore;
    const isDeuce = areEquals && playerOneScore >= 3 && playerOneScore >= 3
    const isAdvantage = hasAnyPlayerAdvantage && countDifference === 1
    const isGame = hasAnyPlayerAdvantage && countDifference >= 2

    if (isGame) return `${WIN_MESSAGE} ${printWinningPlayer}`
    if (isAdvantage) return `${ADVANTAGE} ${printWinningPlayer}`
    if (areEquals && isDeuce) return DEUCE
    if (areEquals && !isDeuce) return parseScore(playerOneScore) + "-All"

    return `${parseScore(playerOneScore)}-${parseScore(playerTwoScore)}`
}