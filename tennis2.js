'use strict';


const haveSameScore = (p1,p2) => p1 === p2
const isDeuce = (p1,p2) => haveSameScore(p1,p2) && p1 > 2
const hasAnyPlayerAdvantage = (p1,p2) => p1 >= 3 && p2 >= 3
const isPlayerWonTo = (p1,p2) => p1 >= 4 && p2 >= 0 && (p1 - p2) >= 2
function parseScore(scoreNumber) {
    if (scoreNumber === 0) return "Love"
    if (scoreNumber === 1) return "Fifteen"
    if (scoreNumber === 2) return "Thirty";
    return "Forty";
}
const getPlayerScoresWithdraw = (p1,p2) => isDeuce(p1,p2) ? "Deuce" :`${parseScore(p1)}-All`

function getScore(P1point, P2point) {
    if (isPlayerWonTo(P1point,P2point)) {
        return "Win for player1";
    } else if (isPlayerWonTo(P2point,P1point)) {
        return "Win for player2";
    } else if (haveSameScore(P1point,P2point)) {
        return getPlayerScoresWithdraw(P1point,P2point)
    } else if (hasAnyPlayerAdvantage(P1point, P2point)) {
        return P1point > P2point ? "Advantage player1" : "Advantage player2";
    } else  {
        return  parseScore(P1point) + "-" +  parseScore(P2point);
    }
}


module.exports = getScore;
