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
    #PLAYER_ONE = "player1";
    #PLAYER_TWO = "player2";

    constructor(playerOneScore, playerTwoScore) {
        this.#playerOneScore = playerOneScore
        this.#playerTwoScore = playerTwoScore
    }

    get playerOneScore() { return  this.#playerOneScore; }
    get playerTwoScore() { return  this.#playerTwoScore; }

    #countScoreDifference() { 
        const { playerOneScore, playerTwoScore } = this;
        return Math.abs(playerOneScore.scoreNumber - playerTwoScore.scoreNumber);
    }

    #areThereAdvantage() {
        const  { playerOneScore, playerTwoScore } = this;
        return playerOneScore.scoreNumber >= 4|| playerTwoScore.scoreNumber >= 4;
    }

    #getWinningPlayer() {
        return this.playerOneScore.isWinningOver(this.playerTwoScore)
            ? this.#PLAYER_ONE
            : this.#PLAYER_TWO
    }

    haveSamePoints() {
        return this.playerOneScore.hasSameScorePoint(this.playerTwoScore)
    }

    isDeuce() {
        return this.haveSamePoints
                    && this.playerOneScore.scoreNumber >= 3
                    && this.playerTwoScore.scoreNumber >= 3;
    }

    isAdvantage() {
        return this.#areThereAdvantage() && this.#countScoreDifference() === 1;
    }

    isGame() {
        return this.#areThereAdvantage() && this.#countScoreDifference() > 1;
    }


    calculateScore() {
        const { playerOneScore, playerTwoScore } = this;
        const haveSameScore = playerOneScore.hasSameScorePoint(playerTwoScore)
        const winningPlayer = this.#getWinningPlayer()

        if (this.isGame()) return `Win for ${winningPlayer}`
        if (this.isAdvantage()) return `${Score.ADVANTAGE} ${winningPlayer}`;
        if (this.isDeuce()) return Score.DEUCE;
        if (this.haveSamePoints() && !this.isDeuce()) return `${playerOneScore.parseScore()}-All`;

        return `${playerOneScore.parseScore()}-${playerTwoScore.parseScore()}`
    }
}

module.exports = function getScore(playerOneScoreNumber, playerTwoScoreNumber) {
    const playerOneScore = new Score(playerOneScoreNumber);
    const playerTwoScore = new Score(playerTwoScoreNumber);
    const tennisGame = new TennisGame(playerOneScore, playerTwoScore);

    return tennisGame.calculateScore();
}