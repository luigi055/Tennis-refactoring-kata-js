'use strict';

function parseScore(scoreNumber) {
    if (scoreNumber === 0) return "Love"
    if (scoreNumber === 1) return "Fifteen"
    if (scoreNumber === 2) return "Thirty";
    return "Forty";
}

const areSameScoreButNotDeuce = (p1,p2) => p1 === p2 && p1 < 3
const isDeuce = (p1,p2) => p1 === p2 && p1 > 2
const isPlayerWinningOver = (p1,p2) => p1 > 0 && p2 === 0
const hasPlayerAdvantageOver = (p1,p2) => p1 > p2 && p2 >= 3
const isPlayerWonTo = (p1,p2) => p1 >= 4 && p2 >= 0 && (p1 - p2) >= 2

function getScore(P1point, P2point) {
    if (isPlayerWonTo(P1point,P2point)) {
        return "Win for player1";
    } else if (isPlayerWonTo(P2point,P1point)) {
        return "Win for player2";
    } else if (areSameScoreButNotDeuce(P1point,P2point)) {
        return `${parseScore(P1point)}-All`
    } else if (isDeuce(P1point,P2point)) {
        return "Deuce";
    } else if (isPlayerWinningOver(P1point,P2point)) {
        return parseScore(P1point) + "-" + parseScore(0);
    } else if (isPlayerWinningOver(P2point,P1point)) {
        return parseScore(0) + "-" + parseScore(P2point);
    } else if (hasPlayerAdvantageOver(P1point, P2point)) {
        return "Advantage player1";
    } else if (hasPlayerAdvantageOver(P2point, P1point)) {
        return "Advantage player2";
    } else {
        return  parseScore(P1point) + "-" +  parseScore(P2point);
    }
}


module.exports = getScore;
