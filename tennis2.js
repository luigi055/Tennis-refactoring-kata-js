// Mimic Algebraic Data Type in Javascript to Represent a Score
class Score {
    static LOVE = "Love";
    static FIFTEEN = "Fifteen";
    static THIRTY = "Thirty";
    static FORTY = "Forty";
    static ADVANTAGE = "Advantage";
    constructor(scoreNumber) {
        this.scoreNumber = scoreNumber
    }

    static parse({scoreNumber}) {
        const {LOVE, FIFTEEN, THIRTY, FORTY} = this
        if (scoreNumber === 0) return LOVE;
        if (scoreNumber === 1) return FIFTEEN;
        if (scoreNumber === 2) return THIRTY;
        return FORTY;
    }

    static areEquals(scoreOne, scoreTwo) {
        return scoreOne.scoreNumber === scoreTwo.scoreNumber
    }
}

const isDeuce = (playerOneScore,playerTwoScore) =>
    Score.areEquals(playerOneScore,playerTwoScore) && playerOneScore.scoreNumber > 2;
const hasAnyPlayerAdvantage = (playerOneScore,playerTwoScore) =>
    playerOneScore.scoreNumber >= 4 || playerTwoScore.scoreNumber >= 4;
const isThereWinner = (playerOneScore,playerTwoScore) =>
    hasAnyPlayerAdvantage(playerOneScore,playerTwoScore)
    && (Math.abs(playerOneScore.scoreNumber - playerTwoScore.scoreNumber)) >= 2;
const getPlayerScoresWithdraw = (playerOneScore,playerTwoScore) =>
    isDeuce(playerOneScore,playerTwoScore) ? "Deuce" :`${Score.parse(playerOneScore)}-All`;
const getWinningPlayer = (playerOneScore, playerTwoScore) =>
    playerOneScore > playerTwoScore ? "player1":"player2";

module.exports = function getScore(playerOneScoreNumber, playerTwoScoreNumber) {
    const playerOne = new Score(playerOneScoreNumber);
    const playerTwo = new Score(playerTwoScoreNumber);
    const winningPlayer = getWinningPlayer(playerOneScoreNumber,playerTwoScoreNumber);
    const {ADVANTAGE} = Score

    if (isThereWinner(playerOne,playerTwo)) return `Win for ${winningPlayer}`;
    if (Score.areEquals(playerOne,playerTwo))
        return getPlayerScoresWithdraw(playerOne,playerTwo);
    if (hasAnyPlayerAdvantage(playerOne, playerTwo)) 
        return `${ADVANTAGE} ${winningPlayer}`;

    return  `${Score.parse(playerOne)}-${Score.parse(playerTwo)}`;

}
