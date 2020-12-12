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
const isPlayerWinningOverAndNotAdvantage = (p1,p2) => p1 > p2 && p1 < 4
const hasPlayerAdvantageOver = (p1,p2) => p1 > p2 && p2 >= 3
const isPlayerWonTo = (p1,p2) => p1 >= 4 && p2 >= 0 && (p1 - p2) >= 2

function getScore(P1point, P2point) {
    var score = "";

    if (areSameScoreButNotDeuce(P1point,P2point)) {
        if (P1point === 0) {
            score = parseScore(0);
        }
        if (P1point === 1) {
            score = parseScore(1);
        }
        if (P1point === 2) {
            score = parseScore(2);
        }
        score += "-All";
    }
    if (isDeuce(P1point,P2point)) {
        score = "Deuce";
    }

    var P1res;
    var P2res;
    if (isPlayerWinningOver(P1point,P2point)) {
        if (P1point === 1) {
            P1res = parseScore(1);
        }
        if (P1point === 2) {
            P1res = parseScore(2);
        }
        if (P1point === 3) {
            P1res = parseScore(3);
        }

        P2res = parseScore(0);
        score = P1res + "-" + P2res;
    }
    if (isPlayerWinningOver(P2point,P1point)) {
        if (P2point === 1) {
            P2res = parseScore(1);
        }
        if (P2point === 2) {
            P2res = parseScore(2);
        }
        if (P2point === 3) {
            P2res = parseScore(3);
        }

        P1res = parseScore(0);
        score = P1res + "-" + P2res;
    }

    if (isPlayerWinningOverAndNotAdvantage(P1point,P2point)) {
        if (P1point === 2) {
            P1res = parseScore(2);
        }
        if (P1point === 3) {
            P1res = parseScore(3);
        }
        if (P2point === 1) {
            P2res = parseScore(1);
        }
        if (P2point === 2) {
            P2res = parseScore(2);
        }
        score = P1res + "-" + P2res;
    }
    if (isPlayerWinningOverAndNotAdvantage(P2point,P1point)) {
        if (P2point === 2) {
            P2res = parseScore(2);
        }
        if (P2point === 3) {
            P2res = parseScore(3);
        }
        if (P1point === 1) {
            P1res = parseScore(1);
        }
        if (P1point === 2) {
            P1res = parseScore(2);
        }
        score = P1res + "-" + P2res;
    }

    if (hasPlayerAdvantageOver(P1point, P2point)) {
        score = "Advantage player1";
    }

    if (hasPlayerAdvantageOver(P2point, P1point)) {
        score = "Advantage player2";
    }

    if (isPlayerWonTo(P1point,P2point)) {
        score = "Win for player1";
    }
    if (isPlayerWonTo(P2point,P1point)) {
        score = "Win for player2";
    }
    return score;
}


module.exports = getScore;
