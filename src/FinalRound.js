import Round from './Round';
import domUpdates from './domUpdates';

class FinalRound extends Round {
  constructor(randomCategories, allPlayers, data) {
    super(randomCategories, allPlayers, data);
    this.finalClue = this.chooseFinalQuestion();
  }

  chooseFinalQuestion() {
    return this.categoryClues[0][Math.floor(Math.random() * 4)];
  }

  validateFinalRoundQuestion(player, playerInput) {
    if (playerInput.toLowerCase() === this.finalClue.answer.toLowerCase()) {
      player.score += player.finalWager;
    } else {
      player.score -= player.finalWager;
    }
    domUpdates.updateScore(player);
  }

}

export default FinalRound;