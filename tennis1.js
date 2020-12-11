class Score {
    constructor(scoreNumber) {
        this._scoreNumber = scoreNumber
        this._love = "Love";
        this._fifteen = "Fifteen";
        this._thirty = "Thirty";
        this._forty = "Forty";
        this._deuce = "Deuce";
    }

    get scoreNumber() {return this._scoreNumber}
    get LOVE() {return this._love}
    get FIFTEEN() {return this._fifteen}
    get THIRTY() {return this._thirty}
    get FORTY() {return this._forty}
    get DEUCE() {return this._deuce}

    isSameScore(score) {
        return score.scoreNumber === this.scoreNumber;
    }

    isAdvantage() {
        return this.scoreNumber >= 4;
    }

    isDeuce() {
        return this.scoreNumber >= 3
    }

    isWinningOver(score) {
        return this.scoreNumber > score.scoreNumber
    }

    parseScore() {
        if (this.scoreNumber === 0) return this.LOVE
        if (this.scoreNumber === 1) return this.FIFTEEN
        if (this.scoreNumber === 2) return this.THIRTY

        return this.FORTY
    }
}

class TennisGame {
    static #areThereAdvantage(scoreOne,scoreTwo) {
        return scoreOne.isAdvantage() || scoreTwo.isAdvantage();
    }

    static #calculateAdvantageWith(playerOneScore, playerTwoScore) {
        const countPointDifferences = playerOneScore.scoreNumber - playerTwoScore.scoreNumber;
        const winningPlayer = playerOneScore.isWinningOver(playerTwoScore) ? "player1" : "player2"
        const advantageOrWin =
            (countPointDifferences * countPointDifferences === 1) ? "Advantage": "Win for";

        return `${advantageOrWin} ${winningPlayer}`
    }

    static calculateScore(scoreOne, scoreTwo) {
        if (scoreOne.isSameScore(scoreTwo)) {
            return scoreOne.isDeuce()
                ? scoreOne.DEUCE
                : `${scoreOne.parseScore()}-All`
        }
        if (this.#areThereAdvantage(scoreOne,scoreTwo)) {
            return this.#calculateAdvantageWith(scoreOne, scoreTwo);
        }

        return `${scoreOne.parseScore()}-${scoreTwo.parseScore()}`
    }
}

module.exports = function getScore(playerOneScoreNumber, playerTwoScoreNumber) {
    const playerOneScore = new Score(playerOneScoreNumber);
    const playerTwoScore = new Score(playerTwoScoreNumber);

    return TennisGame.calculateScore(playerOneScore, playerTwoScore);
}