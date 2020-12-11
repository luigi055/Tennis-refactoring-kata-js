'use strict';

function getScore(playerOneScore, playerTwoScore) {
    // mutatable Data
    var score = "";

    // switch statement
    if (playerOneScore === playerTwoScore) {
        score = playerOneScore >= 3 ? "Deuce" : parseSingleScore(playerOneScore) + "-All"
    } else if (playerOneScore >= 4 || playerTwoScore >= 4) {
        var minusResult = playerOneScore - playerTwoScore;
        if (minusResult === 1) {score = "Advantage player1";}
        else if (minusResult === -1) {score = "Advantage player2";}
        else if (minusResult >= 2) {score = "Win for player1";}
        else {score = "Win for player2";}
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

module.exports = getScore;