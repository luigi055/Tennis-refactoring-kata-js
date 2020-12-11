'use strict';

function getScore(playerOneScore, playerTwoScore) {
    if (haveSamePoints(playerOneScore, playerTwoScore)) {
        return playerOneScore >= 3 ? "Deuce" : parseSingleScore(playerOneScore) + "-All"
    }

    if (haveAnyPlayerAdvantage(playerOneScore, playerTwoScore)) {
        return calculatePlayerWinnerOrAdvantage(playerOneScore, playerTwoScore)
    }

    return parseSingleScore(playerOneScore) + "-" + parseSingleScore(playerTwoScore)

}

function parseSingleScore(scoreNumber) {
    if (scoreNumber === 0) return "Love"
    if (scoreNumber === 1) return "Fifteen"
    if (scoreNumber === 2) return "Thirty"

    return "Forty"

}

function haveAnyPlayerAdvantage(playerOneScore, playerTwoScore) {
    return playerOneScore >= 4 || playerTwoScore >= 4
}

function haveSamePoints(playerOneScore, playerTwoScore) {
    return playerOneScore === playerTwoScore;
}

function calculatePlayerWinnerOrAdvantage(playerOneScore, playerTwoScore) {
    const countPointDifferences = playerOneScore - playerTwoScore;
    if (countPointDifferences === 1) return "Advantage player1";
    if (countPointDifferences === -1) return "Advantage player2";
    if (countPointDifferences >= 2) return "Win for player1";

    return "Win for player2";
}

module.exports = getScore;