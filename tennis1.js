class Score {
    #scoreNumber = 0
    #love = "Love";
    #fifteen = "Fifteen";
    #thirty = "Thirty";
    #forty = "Forty";
    #deuce = "Deuce";
    #advantage = "Advantage"

    constructor(scoreNumber) {
        this.#scoreNumber = scoreNumber
    }

    get scoreNumber() {return this.#scoreNumber}
    get LOVE() {return this.#love}
    get FIFTEEN() {return this.#fifteen}
    get THIRTY() {return this.#thirty}
    get FORTY() {return this.#forty}
    get DEUCE() {return this.#deuce}
    get ADVANTAGE() {return this.#advantage}

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
    #playerOneScore;
    #playerTwoScore;
    constructor(playerOneScore, playerTwoScore) {
        this.#playerOneScore = playerOneScore
        this.#playerTwoScore = playerTwoScore
    }

    get playerOneScore() { return  this.#playerOneScore; }
    get playerTwoScore() { return  this.#playerTwoScore; }

    #areThereAdvantage(scoreOne,scoreTwo) {
        return this.playerOneScore.isAdvantage() || this.playerTwoScore.isAdvantage();
    }

    #calculateAdvantageWith() {
        const countPointDifferences = this.playerOneScore.scoreNumber - this.playerTwoScore.scoreNumber;
        const winningPlayer = this.playerOneScore.isWinningOver(this.playerTwoScore) ? "player1" : "player2"
        const advantageOrWin =
            (countPointDifferences * countPointDifferences === 1) ? this.playerOneScore.ADVANTAGE: "Win for";

        return `${advantageOrWin} ${winningPlayer}`
    }

    calculateScore() {
        if (this.playerOneScore.isSameScore(this.playerTwoScore)) {
            return this.playerOneScore.isDeuce()
                ? this.playerOneScore.DEUCE
                : `${this.playerOneScore.parseScore()}-All`
        }
        if (this.#areThereAdvantage()) {
            return this.#calculateAdvantageWith();
        }

        return `${this.playerOneScore.parseScore()}-${this.playerTwoScore.parseScore()}`
    }
}

module.exports = function getScore(playerOneScoreNumber, playerTwoScoreNumber) {
    const playerOneScore = new Score(playerOneScoreNumber);
    const playerTwoScore = new Score(playerTwoScoreNumber);
    const tennisGame = new TennisGame(playerOneScore, playerTwoScore);

    return tennisGame.calculateScore();
}