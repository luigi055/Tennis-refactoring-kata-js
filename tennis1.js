'use strict';

function getScore(playerOneScore, playerTwoScore) {
    // mutatable Data
    var score = "";

    // switch statement
    if (haveSamePoints(playerOneScore, playerTwoScore)) {
        score = playerOneScore >= 3 ? "Deuce" : parseSingleScore(playerOneScore) + "-All"
    } else if (haveAnyPlayerAdvantage(playerOneScore, playerTwoScore)) {
        score = calculatePlayerWinnerOrAdvantage(playerOneScore, playerTwoScore)
    } else {
        score = parseSingleScore(playerOneScore) + "-" + parseSingleScore(playerTwoScore)
    }
    return score;
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
    let score = ""
    const minusResult = playerOneScore - playerTwoScore;
    if (minusResult === 1) {score = "Advantage player1";}
    else if (minusResult === -1) {score = "Advantage player2";}
    else if (minusResult >= 2) {score = "Win for player1";}
    else {score = "Win for player2";}

    return score
}

module.exports = getScore;