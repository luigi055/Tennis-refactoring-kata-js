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
    const scores = [LOVE, FIFTEEN, THIRTY, FORTY];
    const winningPlayer = p1 > p2 ? PLAYER_ONE : PLAYER_TWO
    const isThereAdvantage = Math.abs(p1 - p2) === 1
    const areEquals = p1 === p2;
    const isDeuce = (p1 + p2 >= 6)

    if (areEquals && !isDeuce) {
        return scores[p1] + "-All"
    }
    if ((p1 < 4 && p2 < 4) && !areEquals) {
        return scores[p1] + "-" + scores[p2]
    }
    if (areEquals && isDeuce) {
        return DEUCE;
    }
    return `${isThereAdvantage
                ? ADVANTAGE
                : "Win for"
            } ${winningPlayer}`;

}


module.exports = getScore;

