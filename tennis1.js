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

    hasSameScorePoint(score) {
        return score.scoreNumber === this.scoreNumber;
    }

    isAdvantage() {
        return this.scoreNumber >= 4;
    }

    isDeuceWith(scoreToCompare) {
        return this.hasSameScorePoint(scoreToCompare) 
                    && this.scoreNumber >= 3
                    && scoreToCompare.scoreNumber >= 3;
    }

    isWinningOver(score) {
        return this.scoreNumber > score.scoreNumber;
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
    #playerOne = "player1";
    #playerTwo = "player2";

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

    #calculateAdvantage() {
        const { playerOneScore, playerTwoScore } = this;
        const countPointDifferences = playerOneScore.scoreNumber - playerTwoScore.scoreNumber;
        const winningPlayer = playerOneScore.isWinningOver(playerTwoScore)
                                ? this.#playerOne
                                : this.#playerTwo;
        const advantageOrWin =
            (Math.abs(countPointDifferences) === 1) ? Score.ADVANTAGE: "Win for";
        return `${advantageOrWin} ${winningPlayer}`
    }

    calculateScore() {
        const { playerOneScore, playerTwoScore } = this;
        const isDeuce = playerOneScore.isDeuceWith(playerTwoScore)
        const haveSameScore = playerOneScore.hasSameScorePoint(playerTwoScore)

        if (haveSameScore && !isDeuce) return `${playerOneScore.parseScore()}-All`;
        if (isDeuce) return Score.DEUCE
        if (this.#areThereAdvantage()) {
            return this.#calculateAdvantage();
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