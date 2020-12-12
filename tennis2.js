/**
 * Refactoring to Functional Style
 */
// Mimic Algebraic Data Type in Javascript to Represent a Score
class Score {
    #point = 0
    static LOVE = "Love";
    static FIFTEEN = "Fifteen";
    static THIRTY = "Thirty";
    static FORTY = "Forty";
    static DEUCE = "Deuce"
    static ADVANTAGE = "Advantage";

    constructor(scoreNumber) {
        this.#point = scoreNumber
    }

    get point() { return this.#point}

    static areEquals(scoreOne, scoreTwo) {
        return scoreOne.point === scoreTwo.point
    }

    static isThereAdvantage(scoreOne, scoreTwo) {
        return scoreOne.point >= 4 || scoreTwo.point >= 4
    }

    static isThereWinner(scoreOne, scoreTwo) {
        return this.isThereAdvantage(scoreOne, scoreTwo)
            && (Math.abs(scoreOne.point - scoreTwo.point)) >= 2;
    }

    static isDeuce(scoreOne, scoreTwo) {
        return Score.areEquals(scoreOne,scoreTwo) && scoreOne.point > 2;
    }

    static parse({point}) {
        const {LOVE, FIFTEEN, THIRTY, FORTY} = this
        if (point === 0) return LOVE;
        if (point === 1) return FIFTEEN;
        if (point === 2) return THIRTY;
        return FORTY;
    }

    static parseWithdraw(score) {
        return Score.isDeuce(score,score) ? Score.DEUCE :`${Score.parse(score)}-All`
    }
}


const PLAYER1 = "player1"
const PLAYER2 = "player2"
const printWinnerOrAdvantage = (playerOne, playerTwo) =>
    Score.isThereWinner(playerOne, playerTwo) 
        ? "Win for"
        : Score.ADVANTAGE;

module.exports = function getScore(playerOneScoreNumber, playerTwoScoreNumber) {
    const playerOne = new Score(playerOneScoreNumber);
    const playerTwo = new Score(playerTwoScoreNumber);
    const winningPlayer = playerOne.point > playerTwo.point ? PLAYER1 : PLAYER2;

    if (Score.areEquals(playerOne,playerTwo)) return Score.parseWithdraw(playerOne);
    if (Score.isThereAdvantage(playerOne, playerTwo))
        return `${printWinnerOrAdvantage(playerOne, playerTwo)} ${winningPlayer}`;

    return  `${Score.parse(playerOne)}-${Score.parse(playerTwo)}`;
}
