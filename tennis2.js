'use strict';

function parseScore(scoreNumber) {
    if (scoreNumber === 0) return "Love"
    if (scoreNumber === 1) return "Fifteen"
    if (scoreNumber === 2) return "Thirty";
    return "Forty";
}

function getScore(P1point, P2point) {
    var score = "";

    if (P1point === P2point && P1point < 3) {
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
    if (P1point === P2point && P1point > 2) {
        score = "Deuce";
    }

    var P1res;
    var P2res;
    if (P1point > 0 && P2point === 0) {
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
    if (P2point > 0 && P1point === 0) {
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

    if (P1point > P2point && P1point < 4) {
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
    if (P2point > P1point && P2point < 4) {
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

    if (P1point > P2point && P2point >= 3) {
        score = "Advantage player1";
    }

    if (P2point > P1point && P1point >= 3) {
        score = "Advantage player2";
    }

    if (P1point >= 4 && P2point >= 0 && (P1point - P2point) >= 2) {
        score = "Win for player1";
    }
    if (P2point >= 4 && P1point >= 0 && (P2point - P1point) >= 2) {
        score = "Win for player2";
    }
    return score;
}


module.exports = getScore;
