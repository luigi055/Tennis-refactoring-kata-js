class Score {
    #scoreNumber = 0
    static LOVE = "Love";
    static FIFTEEN = "Fifteen";
    static THIRTY = "Thirty";
    static FORTY = "Forty";
    static DEUCE = "Deuce";
    static ADVANTAGE = "Advantage";

    constructor(scoreNumber) {
        this.#scoreNumber = scoreNumber
    }

    get scoreNumber() { return this.#scoreNumber; } 

    isSameScore(score) {
        return score.scoreNumber === this.scoreNumber;
    }

    isAdvantage() {
        return this.scoreNumber >= 4;
    }

    isDeuceWith(scoreToCompare) {
        return this.isSameScore(scoreToCompare) &&  this.scoreNumber >= 3
    }

    isWinningOver(score) {
        return this.scoreNumber > score.scoreNumber
    }

    parseScore() {
        if (this.scoreNumber === 0) return Score.LOVE
        if (this.scoreNumber === 1) return Score.FIFTEEN
        if (this.scoreNumber === 2) return Score.THIRTY

        return Score.FORTY
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
        const  { playerOneScore, playerTwoScore } = this;
        return playerOneScore.isAdvantage() || playerTwoScore.isAdvantage();
    }

    #calculateAdvantageWith() {
        const { playerOneScore, playerTwoScore } = this;
        const countPointDifferences = playerOneScore.scoreNumber - playerTwoScore.scoreNumber;
        const winningPlayer = playerOneScore.isWinningOver(playerTwoScore) ? "player1" : "player2"
        const advantageOrWin =
            (Math.abs(countPointDifferences) === 1) ? Score.ADVANTAGE: "Win for";
        return `${advantageOrWin} ${winningPlayer}`
    }

    calculateScore() {
        const { playerOneScore, playerTwoScore } = this;

        if (playerOneScore.isSameScore(playerTwoScore)) {
            return playerOneScore.isDeuceWith(playerTwoScore)
                ? Score.DEUCE
                : `${playerOneScore.parseScore()}-All`
        }
        if (this.#areThereAdvantage()) {
            return this.#calculateAdvantageWith();
        }

        return `${playerOneScore.parseScore()}-${playerTwoScore.parseScore()}`
    }
}

module.exports = function getScore(playerOneScoreNumber, playerTwoScoreNumber) {
    const playerOneScore = new Score(playerOneScoreNumber);
    const playerTwoScore = new Score(playerTwoScoreNumber);
    const tennisGame = new TennisGame(playerOneScore, playerTwoScore);

    return tennisGame.calculateScore();
}