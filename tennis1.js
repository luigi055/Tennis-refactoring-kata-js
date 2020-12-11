'use strict';

function getScore(playerOneScore, playerTwoScore) {
    // mutatable Data
    var score = "";
    // Temporal field
    var tempScore = 0;

    // switch statement
    if (playerOneScore === playerTwoScore) {
        switch (playerOneScore) {
            // Primitive Obsession
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
    } else if (playerOneScore >= 4 || playerTwoScore >= 4) {
        var minusResult = playerOneScore - playerTwoScore;
        if (minusResult === 1) {score = "Advantage player1";}
        else if (minusResult === -1) {score = "Advantage player2";}
        else if (minusResult >= 2) {score = "Win for player1";}
        else {score = "Win for player2";}
    } else {
        // loops
        for (var i = 1; i < 3; i++) {
            if (i === 1) {tempScore = playerOneScore;}
            else {
                score += "-";
                tempScore = playerTwoScore;
            }
            score += parseScore(tempScore)
        }
    }
    return score;
}

function parseScore(scoreNumber) {
    const scoreMap = new Map()
    scoreMap.set(0, "Love");
    scoreMap.set(1, "Fifteen");
    scoreMap.set(2, "Thirty");
    scoreMap.set(3, "Forty");

    return scoreMap.get(scoreNumber);

}

module.exports = getScore;