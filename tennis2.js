'use strict';


const haveSameScore = (p1,p2) => p1 === p2
const isDeuce = (p1,p2) => haveSameScore(p1,p2) && p1 > 2
const hasAnyPlayerAdvantage = (p1,p2) => p1 >= 4 || p2 >= 4
const isThereWinner = (p1,p2) => hasAnyPlayerAdvantage(p1,p2) && (Math.abs(p1 - p2)) >= 2
function parseScore(scoreNumber) {
    if (scoreNumber === 0) return "Love"
    if (scoreNumber === 1) return "Fifteen"
    if (scoreNumber === 2) return "Thirty";
    return "Forty";
}
const getPlayerScoresWithdraw = (p1,p2) => isDeuce(p1,p2) ? "Deuce" :`${parseScore(p1)}-All`

function getScore(P1point, P2point) {
    if (isThereWinner(P1point,P2point)) return P1point > P2point ? "Win for player1" : "Win for player2";
    if (haveSameScore(P1point,P2point)) return getPlayerScoresWithdraw(P1point,P2point);
    if (hasAnyPlayerAdvantage(P1point, P2point))
        return P1point > P2point ? "Advantage player1" : "Advantage player2";

    return  parseScore(P1point) + "-" +  parseScore(P2point);

}


module.exports = getScore;
