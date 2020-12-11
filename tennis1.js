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
    const scoreMap = new Map()
    scoreMap.set(0, "Love");
    scoreMap.set(1, "Fifteen");
    scoreMap.set(2, "Thirty");
    scoreMap.set(3, "Forty");

    return scoreMap.get(scoreNumber);

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