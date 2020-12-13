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
    const p = [LOVE, FIFTEEN, THIRTY, FORTY];
    const winningPlayer = p1 > p2 ? PLAYER_ONE : PLAYER_TWO
    const isThereAdvantage = () => Math.abs(p1 - p2) === 1

    if ((p1 < 4 && p2 < 4) && (p1 + p2 < 6)) {
        let s;
        s = p[p1];
        return (p1 === p2) ? s + "-All" : s + "-" + p[p2];
    } else {
        if (p1 === p2) {
            return DEUCE;
        }
        return `${isThereAdvantage()
                    ? ADVANTAGE
                    : "Win for"
                } ${winningPlayer}`;
    }
}


module.exports = getScore;

