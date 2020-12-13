'use strict';

const LOVE = "Love";
const FIFTEEN = "Fifteen";
const THIRTY = "Thirty";
const FORTY = "Forty";
const DEUCE = "Deuce";
const ADVANTAGE = "Advantage"

const PLAYER_ONE = "player1"
const PLAYER_TWO = "player2"

function getScore(p1, p2) {
    var s;
    if ((p1 < 4 && p2 < 4) && (p1 + p2 < 6)) {
        var p = [LOVE, FIFTEEN, THIRTY, FORTY];
        s = p[p1];
        return (p1 === p2) ? s + "-All" : s + "-" + p[p2];
    } else {
        if (p1 === p2) {
            return DEUCE;
        }
        s = p1 > p2 ? PLAYER_ONE : PLAYER_TWO;
        return ((p1 - p2) * (p1 - p2) === 1) ? ADVANTAGE + " " + s : "Win for " + s;
    }
}


module.exports = getScore;

