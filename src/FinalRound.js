import Round from './Round';

class FinalRound extends Round {
  constructor(randomCategories, allPlayers, data) {
    super(randomCategories, allPlayers, data);
  }

  chooseFinalQuestion() {
    return this.categoryClues[0][Math.floor(Math.random() * 4)];
  }

}

export default FinalRound;