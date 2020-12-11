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

    parseScore() {
        if (this.scoreNumber === 0) return this.LOVE
        if (this.scoreNumber === 1) return this.FIFTEEN
        if (this.scoreNumber === 2) return this.THIRTY

        return this.FORTY
    }

    getScoreComparedWith(score) {
        if (this.IsSameScoreAndDeuce(score)) {
            return this.DEUCE;
        }
        if (this.isSameScore(score)) {
            return `${this.parseScore()}-All`
        }
        if (this.areThereAdvantage(this,score)) {
            return this.calculateAdvantageWith(score);
        }

        return `${this.parseScore()}-${score.parseScore()}`
    }

    areThereAdvantage(scoreOne,scoreTwo) {
        return scoreOne.isAdvantage() || scoreTwo.isAdvantage();
    }

    calculateAdvantageWith(score) {
        const PLAYER_ONE_WINNER = "Win for player1"
        const PLAYER_ONE_ADVANTAGE = "Advantage player1"
        const PLAYER_TWO_WINNER = "Win for player2"
        const PLAYER_TWO_ADVANTAGE = "Advantage player2"

        const countPointDifferences = this.scoreNumber - score.scoreNumber;

        if (countPointDifferences === 1) return PLAYER_ONE_ADVANTAGE;
        if (countPointDifferences === -1) return PLAYER_TWO_ADVANTAGE;
        if (countPointDifferences >= 2) return PLAYER_ONE_WINNER;

        return PLAYER_TWO_WINNER;
    }

    isSameScore(score) {
        return score.scoreNumber === this.scoreNumber;
    }

    isAdvantage() {
        return this.scoreNumber >= 4;
    }

    IsSameScoreAndDeuce(score) {
        return this.isSameScore(score) && this.scoreNumber >= 3
    }
}

module.exports = function getScore(playerOneScoreNumber, playerTwoScoreNumber) {
    const playerOneScore = new Score(playerOneScoreNumber);
    const playerTwoScore = new Score(playerTwoScoreNumber);

    return playerOneScore.getScoreComparedWith(playerTwoScore);
}